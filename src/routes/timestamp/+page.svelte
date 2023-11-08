<!--<script>
    let api_link = 'https://open.neis.go.kr/hub/misTimetable?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7621035&AY=2023&SEM=2&ALL_TI_YMD=231106&GRADE=2&CLASS_NM=2&type=json&key=052c429f8ab44a25b65f613ac02e8f90'
    let constant = ""
    let Weekend = 0
    // 날짜보정
    if (date.getDate() < 10) {
        constant = "0"
    }
    if (date.getDay() === 6) {
        Weekend = 2
    } else if (date.getDay() === 0) {
        Weekend = 1
    }
    // 날짜 설정
    let today = String(date.getFullYear()) + String(date.getMonth() + 1) + constant + String(date.getDate() + Weekend)
    let link = api_link + "&MLSV_YMD=" + today
    let dateinfo = today + "의 학사일정 정보 입니다.";
    let INFOMSG = ""

    // 함수
    const fdinfo = async () => { // api 호출
        const res = await fetch(link);
        const foodinfo = await res.json();

        if (! foodinfo.mealServiceDietInfo) {
            INFOMSG = "오늘의 급식정보가 없습니다"
            return INFOMSG;
        }

        INFOMSG = foodinfo.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/<br\/>/gi, "\n")

        return INFOMSG;

    }
</script>

<h1 id="today">{dateinfo}</h1>
<p id="dd">{INFOMSG}</p>

-->
<h1>개발중...</h1>
<a href="..">
    <button>메인 페이지로 돌아가기</button>
</a>
