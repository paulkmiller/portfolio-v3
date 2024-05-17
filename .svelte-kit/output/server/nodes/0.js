import * as universal from "../entries/pages/_layout.ts.js";

export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_layout.svelte.js"))
    .default);
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = [
  "_app/immutable/nodes/0.44738e89.js",
  "_app/immutable/chunks/index.c7992fe2.js",
];
export const stylesheets = ["_app/immutable/assets/0.97c9b108.css"];
export const fonts = [
  "_app/immutable/assets/inter-cyrillic-ext-600-normal.2ea11f8c.woff2",
  "_app/immutable/assets/inter-all-600-normal.ba29c057.woff",
  "_app/immutable/assets/inter-cyrillic-600-normal.9bc492f5.woff2",
  "_app/immutable/assets/inter-greek-ext-600-normal.c37a11b3.woff2",
  "_app/immutable/assets/inter-greek-600-normal.4591e350.woff2",
  "_app/immutable/assets/inter-latin-ext-600-normal.cc23fe6f.woff2",
  "_app/immutable/assets/inter-latin-600-normal.048d136d.woff2",
  "_app/immutable/assets/inter-cyrillic-ext-700-normal.b7bb121f.woff2",
  "_app/immutable/assets/inter-all-700-normal.9d318ccb.woff",
  "_app/immutable/assets/inter-cyrillic-700-normal.f6c6dcaf.woff2",
  "_app/immutable/assets/inter-greek-ext-700-normal.22174f43.woff2",
  "_app/immutable/assets/inter-greek-700-normal.9e078f49.woff2",
  "_app/immutable/assets/inter-latin-ext-700-normal.1cc47d25.woff2",
  "_app/immutable/assets/inter-latin-700-normal.ced2d8e0.woff2",
  "_app/immutable/assets/merriweather-cyrillic-ext-900-normal.6e0494cc.woff2",
  "_app/immutable/assets/merriweather-all-900-normal.5bad16cd.woff",
  "_app/immutable/assets/merriweather-cyrillic-900-normal.1158e068.woff2",
  "_app/immutable/assets/merriweather-vietnamese-900-normal.f35d0882.woff2",
  "_app/immutable/assets/merriweather-latin-ext-900-normal.e8e31be0.woff2",
  "_app/immutable/assets/merriweather-latin-900-normal.f6b9eebb.woff2",
  "_app/immutable/assets/inter-cyrillic-ext-400-normal.f7666a51.woff2",
  "_app/immutable/assets/inter-all-400-normal.f824029b.woff",
  "_app/immutable/assets/inter-cyrillic-400-normal.e9493683.woff2",
  "_app/immutable/assets/inter-greek-ext-400-normal.d3e30cde.woff2",
  "_app/immutable/assets/inter-greek-400-normal.2f2d421a.woff2",
  "_app/immutable/assets/inter-latin-ext-400-normal.64a98f58.woff2",
  "_app/immutable/assets/inter-latin-400-normal.0364d368.woff2",
  "_app/immutable/assets/merriweather-cyrillic-ext-400-normal.4c548257.woff2",
  "_app/immutable/assets/merriweather-all-400-normal.d13ad951.woff",
  "_app/immutable/assets/merriweather-cyrillic-400-normal.c46bbc4f.woff2",
  "_app/immutable/assets/merriweather-vietnamese-400-normal.880fc37f.woff2",
  "_app/immutable/assets/merriweather-latin-ext-400-normal.9e26ab50.woff2",
  "_app/immutable/assets/merriweather-latin-400-normal.5c2d662e.woff2",
  "_app/immutable/assets/ubuntu-mono-cyrillic-ext-400-normal.fcf55b87.woff2",
  "_app/immutable/assets/ubuntu-mono-all-400-normal.f4a8f91f.woff",
  "_app/immutable/assets/ubuntu-mono-cyrillic-400-normal.b958f4d0.woff2",
  "_app/immutable/assets/ubuntu-mono-greek-ext-400-normal.8b0abaf5.woff2",
  "_app/immutable/assets/ubuntu-mono-greek-400-normal.6799188f.woff2",
  "_app/immutable/assets/ubuntu-mono-latin-ext-400-normal.1fe80c26.woff2",
  "_app/immutable/assets/ubuntu-mono-latin-400-normal.b07e4ebe.woff2",
];
