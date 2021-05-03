import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

/* <meta property="og:description" content="%REACT_APP_META_DESC%" />
<meta property="og:title" content="%REACT_APP_META_TITLE%" />
<meta property="og:url" content="%REACT_APP_META_URL%" />
<meta property="og:image" content="%REACT_APP_META_IMG%" />


<meta name="twitter:description" content="%REACT_APP_META_DESC%" />
<meta name="twitter:title" content="%REACT_APP_META_TITLE%" />
<meta name="twitter:url" content="%REACT_APP_META_URL%" />
<meta name="twitter:image" content="%REACT_APP_META_IMG%" /> */

function SEO({ lang, image, title, description, keywords, meta }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix: "og: http://ogp.me/ns#",
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: "keywords",
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          name: `twitter:creator`,
          content: "Sampoerna",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]
        .concat([
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:image",
            content: image,
          },
          {
            property: "og:image:width",
            content: 200,
          },
          {
            property: "og:image:height",
            content: 200,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ])
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `id`,
  image: process.env.REACT_APP_META_IMG,
  title: process.env.REACT_APP_META_TITLE,
  description: process.env.REACT_APP_META_DESC,
  keywords: process.env.REACT_APP_META_KEYWORDS,
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
