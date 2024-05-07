

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/blog-posts/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/4.75b9b6dc.js","_app/immutable/chunks/index.f709382c.js","_app/immutable/chunks/CodeBlock.65d26326.js","_app/immutable/chunks/Image.aea5a19a.js"];
export const stylesheets = ["_app/immutable/assets/4.f5800320.css","_app/immutable/assets/CodeBlock.c482c875.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
