/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable the React DevTools profiler
  experimental: {
    typedRoutes: false,
  },

  env: {
    BASE_URL: "http://localhost:3001",
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "musicland.kaktusprog.ir",
  //       pathname: "**",
  //       port: "",
  //     },
  //   ],
  // },

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
