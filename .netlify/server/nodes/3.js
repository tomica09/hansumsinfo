

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/foodinfo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d411554a.js","_app/immutable/chunks/scheduler.b732239f.js","_app/immutable/chunks/index.9d1a3fa4.js"];
export const stylesheets = [];
export const fonts = [];
