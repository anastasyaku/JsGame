function Display(){
	
	
	this.Play = function(){
	control.animate();	
	 control.timer();
 
 }
	
  this.Start = function(){
	//alert('start');
	control.initFish();
	control.animate();	
	 control.timer();
 
 }
 
 this.Pause = function (){
	 
	clearInterval(Timer); 
	  
	clearInterval(Timer2); 
 }
	



   

	
	
	
	
}
///////////////////////////////////////////////////////






function Controller(){
	Fish.call(this);
var life=true;
	 var init=0;
	 var min=0;
	 var sec=15;
	 var x_p, y_p;
	 var StopPress = true;
	 
	this.keyDownHandler = function(e) {
  //  alert (StopPress);
   if(e.keyCode == 32) {
     // alert (StopPress);
	 if( StopPress) {
	//	 alert (StopPress);
		 //  alert('будет пауза');
		   StopPress = false;
		   disp.Pause();
		   
	   }
	   else{ 
	   // alert (StopPress);
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
	//alert('animate');
		Timer=setInterval(function (){
		clearBg();
	
		if (life){
			//alert('notkilled');
		fish.MoveX();			
		drawFish(f_img,x,y);
		}
		else {
		//	alert('killed');
			fish.Delete();
			drawFish(f_img,x,y);
		}
		}, 20);
		//alert(k);
	
	 
 }
 
 this.initFish = function(){
	// alert('init');
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
//alert(mouseX+' my coords '+mouseY);

//alert(x+'fish'+y);

 
 if( mouseX>x-100 && mouseX<x+100  && mouseY>y-100 && mouseY<y+100 ){
//alert('Good work');
life=false;
}
 //var point = document.getElementById('point').innerHTML  = "You :"+points;
//delete fish[i];




}
	
}	
	
	


////////////////////////////////////////////////


function Fish(){
	this.x;
	this.y;
	this.point;
	
	this.f_img;
	
	
	f_img = new Image();   
	f_img.src = 'img/fish1.png'; 
	
	x = -50;
	y =  Math.floor(Math.random()*(canvas.height-50));
	
	point = 2;
	this.MoveX = function(){
		x++;
		
		
		
	}
	
	
	this.Delete = function(){
		
		//alert('delete');
		y=y-5;
		var p = document.getElementById('points');
		


p.innerHTML =  "Points"+point;
f_img.src = 'img/fish2.png'; 
		
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
	
	//window.addEventListener('click', point, false);



}, false);