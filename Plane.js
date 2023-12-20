/* 게임의 등장할 우주선을 정의한다 */
class Plane{
    //이 객체가 보유할 변수를 멤버변수라 하고, 생성자 메서드내에 작성
    //해야 한다.. 즉 클래스 소속 변수를 멤버변수라 하고 영어로 property
    //라 한다 (특히 이 멤버변수는 이 객체와 生을 같이 한다..)
    constructor(container,x, y, width, height, velX, velY){
        this.container=container; //이 객체의 img가 붙여질 부모 컨테이너..
        this.img=document.createElement("img");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        
        //스타일 지정 
        this.img.src="../images/Airplane/plane.png";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //컨테이너에 부착 
        this.container.appendChild(this.img);
    }

    //이 우주선의 동작을 정의한다.. 
    move(){
        this.x +=this.velX; //x축으로의 누적값 구하기
        this.y +=this.velY; //y축으로의 누적값 구하기

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}