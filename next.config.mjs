/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roldrive-phi.vercel.app",
        pathname: "**", // allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
