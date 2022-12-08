/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: true,
  }
};

module.exports = nextConfig;
