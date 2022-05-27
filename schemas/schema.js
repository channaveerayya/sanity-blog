// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import socialMedia from "./AllSchemas/socialMedia";
import homepage from "./AllSchemas/homePage";
import aboutMe from "./AllSchemas/aboutMe";
import projects from "./AllSchemas/projects";
import techStacks from "./AllSchemas/techStacks";
import work from "./AllSchemas/work";
import tools from "./AllSchemas/tools";
import navMenu from "./AllSchemas/navMenu";
import languages from "./AllSchemas/languages";
import education from "./AllSchemas/education";
import {userSchema} from "./AllSchemas/user";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    userSchema,
    aboutMe,
    education,
    homepage,
    languages,
    navMenu,
    projects,
    socialMedia,
    techStacks,
    tools,
    work,
  ]),
});
