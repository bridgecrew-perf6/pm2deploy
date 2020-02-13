# base image
FROM node:12.16.0 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --silent
COPY . /app

RUN cp .env.dev.example .env
RUN npm run build

# deploy on nginx 
FROM nginx:1.16.0-alpine
COPY --from=build /app/build_deploy /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY nginx/config/general.conf /etc/nginx/conf.d/config/general.conf
COPY nginx/config/security.conf /etc/nginx/conf.d/config/security.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]