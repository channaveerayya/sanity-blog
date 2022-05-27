import { userRef } from "./user";

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    userRef,
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "projectDescription",
      title: "project Description",
      type: "text",
    },
    {
      name: "demoLink",
      title: "Demo link",
      type: "url",
    },
    {
      name: "techStack",
      title: "Tech stacks used",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "techStacks" }],
        },
      ],
    },
    {
      name: "from",
      title: "From Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    { name: "to", title: "To Date", type: "date" },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
  ],
};
