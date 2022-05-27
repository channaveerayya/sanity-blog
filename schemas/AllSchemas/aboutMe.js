import { userRef } from "./user";
export default {
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
    userRef,
    {
      name: "aboutMe",
      title: "About me",
      type: "text",
    },
    { name: "learnMore", title: "Learn more path", type: "string" },
    {
      name: "myServices",
      title: "My Services",
      type: "array",
      of: [
        {
          name: "myService",
          title: "My Service",
          type: "object",
          fields: [
            { name: "serviceName", title: "Service Name", type: "string" },
            {
              name: "serviceDescription",
              title: "Service Description",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
