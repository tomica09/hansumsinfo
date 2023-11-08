

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/timestamp/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.03074090.js","_app/immutable/chunks/scheduler.b732239f.js","_app/immutable/chunks/index.9d1a3fa4.js"];
export const stylesheets = [];
export const fonts = [];
