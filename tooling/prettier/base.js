import { promises as fs } from "fs";
import { join } from "path";

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const tailwindConfigPath = join(process.cwd(), "packages/tailwind/src/web.ts");
const tailwindConfigExists = await fileExists(tailwindConfigPath);

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["cn", "cva"],
  importOrder: [
    "<TYPES>",
    "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
    "^(next/(.*)$)|^(next$)",
    "^(expo(.*)$)|^(expo$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>^[.|..|@]",
    "^@/",
    "^[../]",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
};

if (tailwindConfigExists) {
  console.log("Using Tailwind config from", tailwindConfigPath);
  config.tailwindConfig = tailwindConfigPath;
}

export default config;
