import { userRef } from "./user";

export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    userRef,
    { name: "schoolCollege", title: "School/College", type: "string" },
    { name: "school", title: "School/College Name", type: "string" },
    { name: "cgpa", title: "CGPA", type: "number" },
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
  ],
};
