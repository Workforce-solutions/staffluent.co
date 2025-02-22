// src/sanity/schemas/category.ts
import { Rule } from '@/types/sanity'

const category = {
  name: "tagDetail",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "tagname",
      title: "Tag Name",
      type: "string",
      options: {
        source: "tagname",
        unique: true,
        slugify: (input: string) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (rule: Rule) =>
        rule.custom((fields: string) => {
          if (
            fields !== fields.toLowerCase() ||
            fields.split(" ").includes("")
          ) {
            return "Tags must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export default category;