export const userRef = {
  name: "user",
  title: "User",
  type: "reference",
  to: [{ type: "user" }],
  validation: (Rule) => Rule.required(),
  options: {
    disableNew: true,
  },
};
export const userSchema = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    { name: "user", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "email" },
    { name: "phone", type: "string", title: "Phone" },
    { name: "location", type: "string", title: "Location" },
    { name: "age", type: "number", title: "Age" },
  ],
};
