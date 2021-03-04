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
function f(){
  
   if (x==1){
      on.style.backgroundColor="yellow";
      x=0;}
   else{
      on.style.backgroundColor="red";
      x=1;
   }
}
setInterval(f,1000)
