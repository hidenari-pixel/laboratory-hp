// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
// 本番用の next.config.js ファイル
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/~orita',
};

module.exports = nextConfig;
