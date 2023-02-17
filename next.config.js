/*
npm i i18n-routing i18n-app
*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  /*i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },*/
  /*
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-custom-header',
            value: 'Solidity in farsi',
          },
        ],
      },
    ]
  },
  */
  reactStrictMode: true,
}

module.exports = nextConfig
