/** @type {import('next').NextConfig} */

export const basePath = "/prueba/sralda/muniHistoria";

const nextConfig = {
  transpilePackages: ["@arcgis/core"],
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true  
};

export default nextConfig;
