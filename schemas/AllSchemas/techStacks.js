export default {
  name: "techStacks",
  title: "Tech Stacks",
  type: "document",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
      validation: (Rule) => Rule.required().warning("required"),
    },
    {
      name: "rate",
      title: "Rate",
      type: "number",
      validation: (Rule) => [
        Rule.lessThan(100).warning("must below 100"),
        Rule.greaterThan(0).warning("is should be more than zero"),
        Rule.positive().warning("must me positive"),
      ],
    },
  ],
};
