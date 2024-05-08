

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/customization/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/5.5a0f7b5e.js","_app/immutable/chunks/index.b3dbe48f.js"];
export const stylesheets = [];
export const fonts = [];
