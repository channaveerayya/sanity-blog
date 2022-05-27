import { userRef } from "./user";

export default {
  name: "socialMedia",
  title: "Social Medias",
  type: "document",
  fields: [
    userRef,
    {
      name: "socialMediaTitle",
      title: "Social Media Title",
      type: "string",
    },
    {
      name: "socialMediaLink",
      title: "Social Media link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
};
