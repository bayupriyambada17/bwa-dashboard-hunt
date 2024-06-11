/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vttyylihewqnuwmbglcg.supabase.co"
      }
    ]
  }
};

export default nextConfig;
