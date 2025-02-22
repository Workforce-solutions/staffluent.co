import { Rule } from "@/types/sanity";

const category = {
  name: "tagDetail", // Keep this as-is or rename to "category"
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
        rule.custom((fieldValue: string) => {
          if (
            fieldValue !== fieldValue.toLowerCase() ||
            fieldValue.split(" ").includes("")
          ) {
            return "Tags must be lowercase and not include spaces.";
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