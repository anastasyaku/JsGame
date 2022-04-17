function Display(){
	
	
	this.Play = () => {
	control.animate();	
	 control.timer();}
	
  this.Start = ()=>{
		control.initFish();
		control.animate();	
		control.timer();}
 
 this.Pause = () => {
	 	clearInterval(Timer); 
	  	clearInterval(Timer2); }
	
}






function Controller(){
	Fish.call(this);
var life=true;
	 var init=0;
	 var min=0;
	 var sec=15;
	 var x_p, y_p;
	 var StopPress = true;
	 
	this.keyDownHandler = function(e) {
 
   if(e.keyCode == 32) {
   
	 if( StopPress) {
	
		   StopPress = false;
		   disp.Pause();
		   
	   }
	   else{ 
	 
	   StopPress = true; 
	   disp.Play();}
    }
	}
	 
	 
	 
function clearBg(){
	ct.clearRect(0,0,canvas.width, canvas.height);
}
	 
	 
 function drawFish(f_img, x, y){
	
		
	  ct.drawImage(f_img, x, y, 50, 50);
  
  }
  
  
  
  
	
  this.animate = function(){
	
		Timer=setInterval(function (){
		clearBg();
	
		if (life){
			
		fish.MoveX();			
		drawFish(f_img,x,y);
		}
		else {
	
			fish.Delete();
			drawFish(f_img,x,y);
		}
		}, 20);
		
	
	 
 }
 
 this.initFish = function(){
	
	  fish = new Fish();
	drawFish(f_img,x,y);
}
 
this.timer = function (){
	Timer2=setInterval(function (){
		sec--;
		if (sec==0) {sec = 60;
		min--;}
		document.clockform.clock.value =min+":"+sec;
			
		if ((sec==60)&&(min==-1)) {
			alert('gg');
		}		
	


	}, 500);
	
	
	
	
}	
	
	
	function findOffset(obj) {
    var curX = curY = 0;
    if (obj.offsetParent) {
        do {
            curX += obj.offsetLeft;
            curY += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return {
	x_p:curX,
	y_p:curY};
    }
}


this.point = function (){
 var pos = findOffset(canvas);
    
    mouseX = event.clientX - pos.x_p;
    mouseY = event.clientY - pos.y_p;


 
 if( mouseX>x-100 && mouseX<x+100  && mouseY>y-100 && mouseY<y+100 ){

life=false;
}

}
	
}	
	



function Fish(){
	this.x= -50;
	this.y=  Math.floor(Math.random()*(canvas.height-50));;
	this.point = 2;;
	this.f_img = new Image();  ;
	
	
	f_img.src = 'img/fish1.png'; 
	

	this.MoveX =() => x++;	
	
	
	this.Delete =() =>{
		y=y-5;
		let p = document.getElementById('points');
		p.innerHTML =  `Points ${point}`;
	//	f_img.src = 'img/fish2.png'; 
		}
	
	
	
	
	
	
	
	
}
var disp;
var control;

window.addEventListener("load", function (){
	
	canvas = document.getElementById("game_canvas");
	ct = canvas.getContext("2d");
	canvas.width = 700;
	canvas.height = 300;
	 disp = new Display();
	 control = new Controller();

	
	
	window.addEventListener('click', control.point, false);
	window.addEventListener("keydown",  control.keyDownHandler, false);
	




}, false);