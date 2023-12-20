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

