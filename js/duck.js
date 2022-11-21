$(document).ready(function(){
			
		//index페이지에서 페이스 슬라이드
			const slide=setInterval(fade,2300);
			let i=3;
			function fade(){
				i--;
				if(i==0){$("#index img").stop().fadeIn(1000); 
				i=3;}
				else{$("#index img").eq(i).stop().fadeOut(1000);}
			}
	
	
	
	
	
	
	
	
	
	
	
	
	
});////////전체 끌