<script>
function previousday() {
date.setDate(today.getDate() - 1);
location.reload();
}
function nextday() {
date.setDate(today.getDate() + 1);
location.reload();
}
  let date = new Date();
  let api_link =
    "https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7621035&key=052c429f8ab44a25b65f613ac02e8f90&type=json";
  let constant = "";
  let Weekend = 0;
  // 날짜보정
  if (date.getDate() < 10) {
    constant = "0";
  }
  if (date.getDay() === 6) {
    Weekend = 2;
  } else if (date.getDay() === 0) {
    Weekend = 1;
  }
  // 날짜 설정
  let today =
    String(date.getFullYear()) +
    String(date.getMonth() + 1) +
    constant +
    String(date.getDate() + Weekend);
  let link = api_link + "&MLSV_YMD=" + today;
  $: callFunc = fdinfo();
  let dateinfo = today + "의 급식정보 입니다.";
  let INFOMSG = "";

  // 함수
  const fdinfo = async () => {
    // api 호출
    const res = await fetch(link);
    const foodinfo = await res.json();

    if (!foodinfo.mealServiceDietInfo) {
      INFOMSG = "오늘의 급식정보가 없습니다";
      return INFOMSG;
    }

    INFOMSG = foodinfo.mealServiceDietInfo[1].row[0].DDISH_NM.replace(
      /<br\/>/gi,
      "\n"
    );

    return INFOMSG;
  };
</script>
{#if callFunc}
<h1>{dateinfo}</h1>
<p>{INFOMSG}</p>
{/if}

<button on:click={previousday}>이전날로</button>
<button on:click={nextday}>다음날로</button>


<a href="..">
  <button>메인 페이지로 돌아가기</button>
</a>
