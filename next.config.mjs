/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable the React DevTools profiler
  experimental: {
    typedRoutes: false,
  },

  env: {
    // BASE_URL: "http://localhost:3001"
    BASE_URL: "https://apicoffee.liara.run/"
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "**",
        port: "3001",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/product",
        destination: "/",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
