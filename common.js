//이미 js 영역이다...
//getRandom(100);
function getRandom(max){
    //0~n
    let result = parseInt(Math.random()*max); //3.xxxxxxx    
    return result; //함수 호출자에게 결과를 전달하기 위해...
}

// 3~5 를 추출하려면, 호출할때  getRandomByRange(-100, 101)
function getRandomByRange(min, max){
    let result = min + parseInt(((max-min)*Math.random()));  
    return result;  
}

//두 객체 간 충돌체크 
function collisionCheck(me, you){
    //1) 좌측 상단에서의 충돌조건
    let result1=((me.x +me.width) >= you.x )  &&  ( (me.y+me.height) >= you.y );

    //2)  좌측 하단에서의 충돌조건
    let result2=( (me.x +me.width) >= you.x  )   &&  (me.y <=  (you.y+you.height));

    //3) 우측 상단에서의 충돌조건 
    let result3=(me.x <= (you.x+you.width))   &&   ((me.y+ me.height) >= you.y) ;


    //4) 우측 하단에서의 충돌조건 
    let result4=(me.x <=  (you.x+you.width))  &&  (me.y <=  (you.y+you.height) )  ;          

    //console.log("result1 result2 result3 result4 ", result1, result2, result3, result4);
    return result1 && result2 && result3 && result4;    
}

/*---------------------------------------
욕 필터링 함수
---------------------------------------*/
function filterString(msg){
    let slang=["개새끼","씨팔","놈","니미","육시럴","지랄"];
    let good=["강아지","에이틴","님","이런","제기랄","난동"];        

    //누군가가 아래와 같은 메시지를 입력했다고 가정해보자 
    //let msg="야이 니미 씨팔 놈 개새끼 니 놈 때문에 나 망했자나 씨팔";
    
    //사용자가 입력한 메시지의 소속된 모든 문자열들이 욕에 해당되는지 
    //조사하기 위해서는 공백문자를 기준으로 분리시키자 
    let wordArray=msg.split(" ");

    
    let result=""; //복원될 메시지가 들어갈 변수 

    for(let i=0;i<wordArray.length;i++){ //모든 단어를 대상으로...
        for(let a=0;a<slang.length;a++){ //욕에 해당하는지 비교...
            if(wordArray[i] == slang[a]){ //욕이 발견되었다면...
                wordArray[i]=good[a]; //메시지 배열의 단어를 순화된 언어로 교체
            }
        }
        //다시 공백을 넣어줘서 대화메시지를 복원시켜주자 
        result += wordArray[i] +" ";
    }
    //console.log("순화된 결과 ", result);
    return result;
}

/*---------------------------------------------
특정 경로에서 파일명만 추출하기
path : 파일의 풀 경로  ex)  c:/test/pic.jpg
---------------------------------------------*/
function getFilename(path){
    let lastIndex=path.lastIndexOf("\\");

    //전체 문자열내에서 일부를 추출 (시작index, 끝index-exclusive)
    let filename = path.substring(lastIndex+1, path.length); 
    
    return filename; //최종적으로 파일명만 반환
}

function getStoreList(){
    let stores=[
        //하나의 상점에 대한 정보
        {
            store_name:"김밥천국",
            lati:37.61920, 
            longi:126.7185,
            url:"https://map.naver.com/p/search/%EC%82%AC%EC%9A%B0%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1502576528?c=16.18,0,0,0,dh&placePath=%3Fentry%3Dpll",
            intro:"저렴한 가격이 매력적",
            icon:"../images/enemy.jpg" 
        },
        {
            store_name:"해물꽃돈",
            lati:37.6196165, 
            longi:126.7158012,
            url:"https://www.muomuo.kr/default/",
            intro:"강남 청년 운영 고깃집",
            icon:"../images/star.png" 
        },
        {
            store_name:"포메인",
            lati:37.61876, 
            longi:126.7162,
            url:"https://www.phomein.com/brand/main/main.do",
            intro:"정통 베트남 요리",
            icon:"../images/mashroom.jpg" 
        }

    ];
    return stores;
}

/*---------------------------------------------
로또 반환받기
---------------------------------------------*/
function getLotto(){
    //로또 번호의 대상이 되는 번호를 수집  1~45 
    let numArray=[];
    let winArray=[]; //당첨번호가 누적될 배열..

    //로또 번호 채우기 
    for(let i=1;i<=45;i++){
        numArray.push(i);
    }

    //당첨번호가 6개에 도달할때까지, 계속 시도해야 하므로..무한루프로 시도한다
    //for(시작값; 끝값)
    while(true){
        //당첨번호 추출 
        let n = getRandomByRange(1, numArray.length+1); //1~45
        console.log("추출된 랜덤 수는 " , n);

        //6개까지만 아래의 작업을 진행 
        if(winArray.length<6){
            //당첨번호 내역에 없는 번호일 경우만...
            if(winArray.indexOf(n)==-1){ //중복된 수가 없는 경우만...
                winArray.push(n); //당첨 배열에 추가
            }
        }else{
            break; //반복문 빠져나오기
        }
    }

    return winArray;
}

/*---------------------------------------------
2자리수의 경우 0을 붙이는 스트링 처리 함수 
ex)   8의 경우 08로 , 12의 경우는 그대로..
---------------------------------------------*/
function getNumString(n){
    let str=n;
    if(n<10){
        str = "0"+str;
    }
    return str;
}
