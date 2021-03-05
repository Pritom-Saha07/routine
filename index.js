function clock(){
   t=new Date();
   h=t.getHours();
   m=t.getMinutes();
   s=t.getSeconds();
   hr=h*30+m/2;
   mr=m*6+s/10;
   sr=s*6;
   hour.style.transform=`rotate(${hr}deg)`;
   min.style.transform=`rotate(${mr}deg)`;
   sec.style.transform=`rotate(${sr}deg)`;
}
setInterval(clock,1000);
let x=1;
function set(){
   t=new Date();
   h1=t.getHours();
   m1=t.getMinutes();
   d=t.getDate();
   switch(d){
      case 5:{
         if((h1==8&&m1>=50)||(h1==9&&m1<50)){
            if (x==1){
               sat2.style.backgroundColor="yellow";
               x=0;}
            else{
               sat2.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==9&&m1>=50)||(h1==10&&m1<50)){
            if (x==1){
               sat3.style.backgroundColor="yellow";
               x=0;}
            else{
               sat3.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==10&&m1>=50)||(h1==11&&m1<50)){
            if (x==1){
               sat1.style.backgroundColor="yellow";
               x=0;}
            else{
               sat1.style.backgroundColor="red";
               x=1;
            }
         }
         else if(h1>=2&&h1<5){
            if (x==1){
               sat4.style.backgroundColor="yellow";
               x=0;}
            else{
               sat4.style.backgroundColor="red";
               x=1;
            }
         }
         break;
      }
      case 0:{
         if((h1==8&&m1>=50)||(h1==9&&m1<50)){
            if (x==1){
               sun1.style.backgroundColor="yellow";
               x=0;}
            else{
               sun1.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==9&&m1>=50)||(h1==10&&m1<50)){
            if (x==1){
               sun2.style.backgroundColor="yellow";
               x=0;}
            else{
               sun2.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==10&&m1>=50)||(h1==11&&m1<50)){
            if (x==1){
               sun3.style.backgroundColor="yellow";
               x=0;}
            else{
               sun3.style.backgroundColor="red";
               x=1;
            }
         }
         else if(h1>=2&&h1<5){
            if (x==1){
               sun4.style.backgroundColor="yellow";
               x=0;}
            else{
               sun4.style.backgroundColor="red";
               x=1;
            }
         }
         break;
      }
      case 1:{
         if((h1==8&&m1>=50)||(h1==9&&m1<50)){
            if (x==1){
               mon2.style.backgroundColor="yellow";
               x=0;}
            else{
               mon2.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==9&&m1>=50)||(h1==10&&m1<50)){
            if (x==1){
               mon3.style.backgroundColor="yellow";
               x=0;}
            else{
               mon3.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==7&&m1>=50)||(h1==8&&m1<50)){
            if (x==1){
               mon1.style.backgroundColor="yellow";
               x=0;}
            else{
               mon1.style.backgroundColor="red";
               x=1;
            }
         }
         break;
      }
      case 2:{
         if((h1==8&&m1>=50)||(h1==9&&m1<50)){
            if (x==1){
               tue1.style.backgroundColor="yellow";
               x=0;}
            else{
               tue1.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==9&&m1>=50)||(h1==10&&m1<50)){
            if (x==1){
               tue2.style.backgroundColor="yellow";
               x=0;}
            else{
               tue2.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==10&&m1>=50)||(h1==11&&m1<50)){
            if (x==1){
               tue3.style.backgroundColor="yellow";
               x=0;}
            else{
               tue3.style.backgroundColor="red";
               x=1;
            }
         }
         else if(h1>=2&&h1<5){
            if (x==1){
               tue4.style.backgroundColor="yellow";
               x=0;}
            else{
               tue4.style.backgroundColor="red";
               x=1;
            }
         }
         break;
      }
      case 3:{
         if((h1==8&&m1>=50)||(h1==9&&m1<50)){
            if (x==1){
               wed2.style.backgroundColor="yellow";
               x=0;}
            else{
               wed2.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==9&&m1>=50)||(h1==10&&m1<50)){
            if (x==1){
               wed3.style.backgroundColor="yellow";
               x=0;}
            else{
               wed3.style.backgroundColor="red";
               x=1;
            }
         }
         else if((h1==7&&m1>=50)||(h1==8&&m1<50)){
            if (x==1){
               wed1.style.backgroundColor="yellow";
               x=0;}
            else{
               wed1.style.backgroundColor="red";
               x=1;
            }
         }
         else if(h1>=11&&h1<2){
            if (x==1){
               sat4.style.backgroundColor="yellow";
               x=0;}
            else{
               sat4.style.backgroundColor="red";
               x=1;
            }
         }
         break;
      }
      default:{
         break;
      }
      
   }
}
setInterval(set,1000)


