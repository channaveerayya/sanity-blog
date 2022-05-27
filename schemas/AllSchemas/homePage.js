import { userRef } from "./user";

export default {
    name: "homepage",
    title: "HomePage",
    type: "document",
    fields: [
      userRef,
      {
        name: "heroImage",
        title: "Hero Image",
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
          { name: "attribution", type: "string", title: "Attribution" },
        ],
      },
      {
        title: "Ask me btn text",
        name: "askmebtn",
        type: "string",
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  }