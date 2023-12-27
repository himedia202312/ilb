/*총알을 정의한다*/
class Bullet{

    //총알의 상태는 멤버변수로 표현....속도,색상,좌표..
    constructor(container, x, y, width, height, velX, velY, bg){
        this.container=container;
        this.div=document.createElement("div");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.bg=bg;

        //스타일적용 
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.borderRadius=50+"%";
        this.div.style.background=this.bg;
        this.div.style.filter="blur(2px)";

        //컨테이너에 부착 
        this.container.appendChild(this.div);
    }

    move(){
        this.x += this.velX;
        this.y += this.velY;

        //화면에 등장하는 모든 적군과 나와 충돌검사해보자 
        for(let i=0;i<enemyArray.length;i++){

           let result = collisionCheck(this, enemyArray[i]);

           if(result){
                //나 멈추고 너 멈추고 
                this.velX=0;
                enemyArray[i].velX=0;

                //나를 화면에서 나제거, 적군도 제거
                wrapper.removeChild(this.div);
                wrapper.removeChild( enemyArray[i].img);

                //총알을 배열에서 제거 
                bulletArray.splice(bulletArray.indexOf(this) , 1);
                enemyArray.splice(i , 1);
           }
        }


        //총알의 x값이 화면끝을 넘어서면 총알은 제거
        //제거(화면에서 + 배열에서도 제거)
        if(this.x > 1200){
            this.velX=0;
            //현재 객체가 보유한 div를 wrapper 에서 제거
            //this 란? 인스턴스가 자기 자신을 가리키는 변수 
            //단, 변수명이 이미 정해져 있다..
            //여기서 this란 Bullet이 자기 자신을 가리키는 변수
            wrapper.removeChild(this.div);
            
            //배열에서 제거 
            let index=bulletArray.indexOf(this);
            console.log("나의 위치는 ", index);
            bulletArray.splice(index ,1);

        }

        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";        
    }
}






