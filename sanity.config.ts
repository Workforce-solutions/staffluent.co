import { defineConfig, SchemaTypeDefinition } from "sanity";
import { deskTool } from "sanity/desk";
import post from './src/sanity/schemas/post'
import author from './src/sanity/schemas/author'
import category from './src/sanity/schemas/category'
import blockContent from './src/sanity/schemas/blockContent'

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  apiVersion: "2023-03-09",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: [post, author, category, blockContent] as SchemaTypeDefinition[]
  },
});

export default config;