/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable the React DevTools profiler
  profiler: true,
  experimental: {
    typedRoutes: false,
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
