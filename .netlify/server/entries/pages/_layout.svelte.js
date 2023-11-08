import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 data-svelte-h="svelte-176lj5b">한수중학교 정보 안내 프로그램</h3> <h6 data-svelte-h="svelte-jmbuwn">made by tomica</h6> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
