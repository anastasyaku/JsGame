function Display(){
	var time=true;
	
	this.Play = function(){
	control.animate();	
	if (time) control.timer();
 	window.addEventListener('click', control.point, false);
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
	window.removeEventListener('click', control.point, false);
	
 }
	
	this.test = function(){
		time = false;
		control.initFish();
		control.animate();	
				}
	
	
}
///////////////////////////////////////////////////////






function Controller(){
	//Fish.call(this);
	var n=40;
var fish= new Array(n);
	 var points=0;
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
	 
	 
 function drawFish(x,y,size){
	//alert('draw');
			 this.img;
	// this.fish;
		
		img = new Image();   
		img.src = 'img/fish1.png'; 
		ct.drawImage(img, x,y, size,size);
  
  }
  
  
  
  
	
  this.animate = function(){
//	alert('animate');
		Timer=setInterval(function (){
		clearBg();
		
	for(var i=0; i < n; i++){
		if (fish[i].Getlife()){
			//alert('notkilled');
		//	 alert('xc'+xC);
		fish[i].x= fish[i].MoveX(fish[i].x,fish[i].speed);	
//alert('get1'+fish.x);
		
		drawFish(fish[i].x, fish[i].y, fish[i].size);
		}
		else {
		//	alert('killed');
			fish[i].y=fish[i].Delete(fish[i].y);
			drawFish(fish[i].x, fish[i].y, fish[i].size);
		}
		
	}
		}, 20);
		//alert(k);
	
	 
 }
 
 this.initFish = function(){
	
//	alert('init');
	for(var i=0; i < n; i++)
	{
		fish[i] = new Fish();
//	alert(fish[i].size_rand);
		switch (fish[i].size_rand) { //в зависимости от значения операции, производим действие
			  case 0:
		//	  alert('nol');
			  fish[i].size=50;
			  fish[i].point_f=1;
				fish[i].speed=1;
				break;
				
				 case 1:
		//		  alert('odin');
			  fish[i].size=40;
			    fish[i].point_f=3;
				fish[i].speed=2;
				break;
				
				 case 2:
			//	  alert('dva');
			  fish[i].size=30;
			    fish[i].point_f=5;
				fish[i].speed=4;
				break;
	
		}
	drawFish(fish[i].x, fish[i].y, fish[i].size);
	
	}
	 // alert(fish.x);
	//drawFish(fish.x, fish.y);

	}
 
this.timer = function (){
	var min=1;
	 var sec=60;
	Timer2=setInterval(function (){
		sec--;
		if (sec==0) {sec = 60;
		min--;}
		document.clockform.clock.value =min+":"+sec;
		
		if ((sec==60)&&(min==-1)) {
			//alert('gg');
			game_over();
		}		
		
		
		
		}, 500);
	
	
	
	
}	
	function game_over() {
		clearInterval(Timer); 
	  
	clearInterval(Timer2); 
		
		var g = document.getElementById('gg');
		g.innerHTML = "Game Over";
		
		
	for(var i=0; i < n; i++)
	{ fish[i] = undefined;} 
		
		document.getElementById("start").disabled = true;
		document.getElementById("play").disabled = true;
		document.getElementById("pause").disabled = true;
		document.getElementById("test").disabled = true;
		document.getElementById("start").style.background = "#98DCD8";
		document.getElementById("play").style.background = "#98DCD8";
		document.getElementById("pause").style.background = "#98DCD8";
		document.getElementById("test").style.background = "#98DCD8";
		document.clockform.clock.value ="0:0";
	}
	
	
	function findOffset(obj) {
		var x_p;
			var y_p;
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
    //alert(pos.x_p+' пос'+pos.y_p);
    mouseX = event.clientX - pos.x_p;
    mouseY = event.clientY - pos.y_p;
//alert(mouseX+' my coords '+mouseY);

//alert(fish.x+'fish'+fish.y);

 for(var i=0; i < n; i++){
if( mouseX>fish[i].x-fish[i].size && mouseX<fish[i].x+fish[i].size  && mouseY>fish[i].y-fish[i].size && mouseY<fish[i].y+fish[i].size ){
//	alert(fish[i].x+'fish'+fish[i].y);
//alert('Good work');
fish[i].Setlife(false);
fish[i].Setlife(true);
var p = document.getElementById('points');
	//	alert('point'+fish[i].point_f);
		points=points+fish[i].point_f;
		//alert('points'+points);
		p.innerHTML =points;
//f_img.src = 'img/fish2.png'; 

}


 }



}
	
}	
	
	


////////////////////////////////////////////////


function Fish(){
	this.x = (-1)*Math.floor(Math.random()*2500);
	this.y =  Math.floor(Math.random()*(canvas.height));
	this.point_f;
	this.size_rand=Math.floor(Math.random()*3);
		this.size;
	 var life=true;
	this.speed=Math.floor(Math.random()*3);;
//	this.f_img = new Image(); 
	
	
	 
//	f_img.src = 'img/fish1.png'; 
	
	this.Getlife = function(){
		return life;
		
		
	}
		
	this.Setlife = function(l){
		if(typeof(l) === "boolean"){
		
		if (life!=false)
		life = l;
		
	
	}	
//	alert(life);	
	}	
		
	
	this.MoveX = function(x, sp){
	//alert('move');
	//	alert(x);
		x=x+sp;
	//	alert('move '+x);
		
		return x;
	}
	
	
	this.Delete = function(y){
		
		//alert('delete');
		y=y-8;
		
	return y;	
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