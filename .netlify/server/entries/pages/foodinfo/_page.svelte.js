import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
let api_link = "https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7621035&key=052c429f8ab44a25b65f613ac02e8f90&type=json";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let callFunc;
  const date = /* @__PURE__ */ new Date();
  let constant = "";
  let Weekend = 0;
  if (date.getDate() < 10) {
    constant = "0";
  }
  if (date.getDay() === 6) {
    Weekend = 2;
  } else if (date.getDay() === 0) {
    Weekend = 1;
  }
  let today = String(date.getFullYear()) + String(date.getMonth() + 1) + constant + String(date.getDate() + Weekend);
  let link = api_link + "&MLSV_YMD=" + today;
  let dateinfo = today + "의 급식정보 입니다.";
  let INFOMSG = "";
  const fdinfo = async () => {
    const res = await fetch(link);
    const foodinfo = await res.json();
    if (!foodinfo.mealServiceDietInfo) {
      INFOMSG = "오늘의 급식정보가 없습니다";
      return INFOMSG;
    }
    INFOMSG = foodinfo.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/<br\/>/gi, "\n");
    return INFOMSG;
  };
  callFunc = fdinfo();
  return `${callFunc ? `<h1 id="today">${escape(dateinfo)}</h1> <p id="dd">${escape(INFOMSG)}</p>` : ``} <a href=".." data-svelte-h="svelte-1ta9pzf"><button>메인 페이지로 돌아가기</button></a>`;
});
export {
  Page as default
};
