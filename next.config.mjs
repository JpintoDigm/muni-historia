/** @type {import('next').NextConfig} */

export const basePath = "/250CiudadDeGuatemala";
// export const basePath = "/prueba/jpinto/muniHistoria";

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
