import { userRef } from "./user";

export default {
    name: "navItems",
    title: "NavItems",
    type: "document",
    fields: [
        userRef,
      { name: "navName", title: "Name", type: "string" },
      { name: "navLink", title: "Link", type: "string" },
    ],
  };
  