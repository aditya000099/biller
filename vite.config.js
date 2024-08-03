import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react(), svgr({ svgrOptions: { icon: true } })],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
