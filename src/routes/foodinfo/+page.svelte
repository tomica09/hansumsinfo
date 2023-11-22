
<script>
  var now = new Date();
  console.log(`${now}에 새로 업데이트 되었습니다.`)
import { goto, invalidate } from '$app/navigation';

/*
function reloadPage() {
        const thisPage = window.location.pathname;

        console.log('goto ' + thisPage);

        goto('/').then(
            () => goto(thisPage)
        );
    }
    */
function previousday() {
date.setDate(date.getDate() - 1);
}
function nextday() {
date.setDate(date.getDate() + 1);
}
//////////급식 표시하는 거 함수로 만들기 -> 나중에 해야할 일
var date = new Date();
$: callFunc = fdinfo();
const fdinfo = async () => {
  
var ermsg = null;
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
  dateinfo = today + "의 급식정보 입니다.";
  INFOMSG = "";

  // 함수
    // api 호출
    const res = await fetch(link);
    const foodinfo = await res.json();

    if (!foodinfo.mealServiceDietInfo) {
      INFOMSG = "오늘의 급식정보가 없습니다";
      ermsg = "더 자세한 식단정보 확인하기"
      return INFOMSG , ermsg;
    
    }

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
  }
  const gon = function () {
    nextday();
    fdinfo();
  }
</script>
{#if callFunc}
<h1>{dateinfo}</h1>
<p>{INFOMSG}</p>
<a href="http://hansu.ms.kr/lunch.list">{ermsg}</a>
{/if}

<button on:click={gop}>이전날로</button>
<button on:click={gon}>다음날로</button>


<a href="..">
  <button>메인 페이지로 돌아가기</button>
</a>
