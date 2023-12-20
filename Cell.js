/*셀하나를 정의한다*/

class Cell{
    //js 에서 클래스가 보유한 멤버변수는 반드시 생성자 함수내에 
    //정의해야 한다..
    //특히, 클래스가 보유한 변수는 , 해당 인스턴스가 소멸될때까지
    //생명력을 가진다...
    constructor(container, x, y, width, height, bg){
        this.container=container;
        this.div=document.createElement("div");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.bg=bg;
        this.a=0.1;
        this.targetOP=1;

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.bg;
        this.div.style.border="1px solid black";
        this.div.style.boxSizing="border-box";
        this.div.style.opacity=1; //불투명, 즉 완전히 보이는 상태

        //부착?
        this.container.appendChild(this.div);
        
        //div에 마우스 올려놓으면, op를 0으로 놓자 
        this.div.addEventListener("mouseover", ()=>{
            this.targetOP=0;
        });

    }       

    //나의투명도= 현재투명도 + a*(목표투명도 - 현재투명도)
    render(){
        this.div.style.opacity = parseFloat(this.div.style.opacity)+this.a*(this.targetOP-parseFloat(this.div.style.opacity));
    }

}