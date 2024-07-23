import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Core Guide",
  description: "Detailed Guide of Vue Core",
  themeConfig: {
    sidebar: {
      "/": [{ text: "v.3.4.33", link: "/v3.4.33" }],
      "/v3.4.33/": [
        {
          text: "Directory Structure",
          link: "/v3.4.33/directory-structure/",
          items: [
            {
              text: "rollup.dts.config.js",
              link: "/v3.4.33/directory-structure/rollup.dts.config.js",
            },
            {
              text: "packages",
              link: "/v3.4.33/directory-structure/packages/",
              collapsed: true,
              items: [
                {
                  text: "reactivity",
                  collapsed: true,
                  link: "/v3.4.33/directory-structure/packages/reactivity/",
                  items: [
                    {
                      text: "src",
                      link: "/v3.4.33/directory-structure/packages/reactivity/src/",
                      items: [
                        {
                          text: "ref.ts",
                          link: "/v3.4.33/directory-structure/packages/reactivity/src/ref.ts",
                        },
                        {
                          text: "reactive.ts",
                          link: "/v3.4.33/directory-structure/packages/reactivity/src/reactive.ts",
                        },
                        {
                          text: "constants.ts",
                          link: "/v3.4.33/directory-structure/packages/reactivity/src/constants.ts",
                        },
                        {
                          text: "dep.ts",
                          link: "/v3.4.33/directory-structure/packages/reactivity/src/dep.ts",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
