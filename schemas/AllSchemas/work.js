import { userRef } from "./user";

export default {
  name: "work",
  title: "Work Experience",
  type: "document",
  fields: [
    userRef,
    { name: "company", title: "Company name", type: "string" },
    { name: "designation", title: "Designation", type: "string" },
    { name: "location", title: "Location", type: "string" },
    {
        name: "description",
        title: "Description",
        type: "text",
      },
    {
      name: "from",
      title: "From Date",
      type: "date",
      validation: (Rule) => Rule.required().warning("From Date required"),
    },
    { name: "to", title: "To Date", type: "date" },
    {
      name: "workImage",
      title: "Work Image",
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
