## Table of Contents

- [ENV](#env)
  - [Port](#port)
  - [Environment](#dawdq)
  - [API](#api)
    - [NAME](#name)
    - [SECRET_KEY](#secret)
    - [TOKEN_HEADER](#header)
    - [BASE_URL](#base url)
    - [DEVICE_TYPE](#device)
  - [Meta](#sending-feedback)
    - [Open Graph](#og)
    - [Twitter](#twitter)
    - [DESC](#twitter)
    - [TITLE](#twitter)
    - [URL](#twitter)
    - [IMG](#twitter)
    - [KEYWORDS](#twitter)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Image

Change how Image Compression works

1. Automatically compress (.jpg, .png, .gif, .svg) when run build
2. Automatically convert (.jpg, .png) to (.webp) when run build
3. Allow <Image> component to use props for (.webp) src and normal (.jpg, .png, etc) src
4. Make <Image> component to use (.webp) format automatically from provided normal (.jpg, .png, etc) src filename (if .webp not available during development)
5. Make <Image> component to automatically fallback to normal (.jpg, .png, etc) if (.webp) is not exist (if .webp not available during development)
