import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // permite probar el dev server desde el celular en la misma red WiFi
  allowedDevOrigins: ["192.168.18.21"],
};

export default nextConfig;
