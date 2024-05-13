

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/blog-posts/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/4.bd33303b.js","_app/immutable/chunks/index.c7992fe2.js","_app/immutable/chunks/Callout.ad7917ee.js","_app/immutable/chunks/CodeBlock.b8f51f3d.js","_app/immutable/chunks/Image.df36d756.js"];
export const stylesheets = ["_app/immutable/assets/Callout.f5800320.css","_app/immutable/assets/CodeBlock.c482c875.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
