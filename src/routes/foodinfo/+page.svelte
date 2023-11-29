<script>
  var now = new Date();
  console.log(`${now}에 새로 업데이트 되었습니다.`);
  function previousday() {
    date.setDate(date.getDate() - 1);
  }
  function nextday() {
    date.setDate(date.getDate() + 1);
  }
  var date = new Date();
  $: callFunc = fdinfo();
  const fdinfo = async () => {
    let api_link =
      "https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7621035&key=052c429f8ab44a25b65f613ac02e8f90&type=json";
    let constant = "";
    // 날짜보정
    if (date.getDate() < 10) {
      constant = "0";
    }
let constant2 = "";
if (date.getMonth() + 1 < 10){
constant2 = "0";
}
    // 날짜 설정
    let today =
      String(date.getFullYear()) + constant2 +
      String(date.getMonth() + 1) +
      constant +
      String(date.getDate());
    let link = api_link + "&MLSV_YMD=" + today;
    INFOMSG = "";
    //레이아웃
    var dayy;
    if (date.getDay() === 0) {
      dayy = "일요일";
    } else if (date.getDay() === 1) {
      dayy = "월요일";
    } else if (date.getDay() === 2) {
      dayy = "화요일";
    } else if (date.getDay() === 3) {
      dayy = "수요일";
    } else if (date.getDay() === 4) {
      dayy = "목요일";
    } else if (date.getDay() === 5) {
      dayy = "금요일";
    } else if (date.getDay() === 6) {
      dayy = "토요일";
    }
    dateinfo = today + " " + dayy + "의 급식정보 입니다.";

    // api 호출
    const res = await fetch(link);
    const foodinfo = await res.json();
    //주말 보정
    if (!foodinfo.mealServiceDietInfo) {
      INFOMSG = "오늘의 급식정보가 없습니다";
      return INFOMSG;
    }
    //결과
    INFOMSG = foodinfo.mealServiceDietInfo[1].row[0].DDISH_NM.replace(
      /<br\/>/gi,
      "\n"
    );
    return INFOMSG;
  };
  var dateinfo;
  var INFOMSG;

  const gop = function () {
    previousday();
    fdinfo();
  };
  const gon = function () {
    nextday();
    fdinfo();
  };
</script>
{#if callFunc}
<h1>{dateinfo}</h1>
<p>{INFOMSG}</p>
<a href="http://hansu.ms.kr/lunch.list">더 자세한 식단정보 확인하기</a><br />
{/if}

<button on:click="{gop}">이전날로</button>
<button on:click="{gon}">다음날로</button>

<a href="..">
  <button>메인 페이지로 돌아가기</button>
</a>
