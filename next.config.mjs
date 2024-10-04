/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nabsteel.rahkartest.ir",
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
