

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8593fa07.js","_app/immutable/chunks/scheduler.b732239f.js","_app/immutable/chunks/index.9d1a3fa4.js"];
export const stylesheets = [];
export const fonts = [];
