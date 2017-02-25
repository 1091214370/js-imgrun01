
window.onload=function (){
	var tl =document.getElementById("turnright");
	var tr =document.getElementById("turnleft");
	var road =document.getElementById("road");
	var olaf=document.getElementById("ol-f");
	var olas=document.getElementById("ol-s");
	var olat=document.getElementById("ol-t");
	var timeId=null;
	var i=0;
	function listTime(){
			switch(i){
				case 0:
				olaf.style.background="blue"
				olas.style.background="none"
				olat.style.background="none"
			 	break;
				case 1:
				olaf.style.background="none"
			 	olas.style.background="blue"
			 	olat.style.background="none"
			 	break;
			 	case 2:
				olaf.style.background="none"
				olas.style.background="none"
				olat.style.background="blue"
			 	break;
	
			}
	}	
	function tpturnLeft(){
		i+=2;
		i=i%3;
		listTime();
		if(i>0&&i<3){
			var si =(100 * i);
			road.style.marginLeft="-"+si+"%";
		}else{
			road.style.marginLeft="0";
			i=0;
		}
	}
	function tpturnRight(){
		i+=1;
		i=i%3;
		listTime();
		if(i>0&&i<3){
			var si =100 * i;
			road.style.marginLeft="-"+si+"%";
		}else{
			road.style.marginLeft=0;
			i=0;
		}
	}
	timeId=setInterval(tpturnRight,3000);
	tl.onclick=function(){
		if(timeId){
			clearInterval(timeId);
			timeId=null;
		}
		tpturnRight();
		timeId=setInterval(tpturnRight,3000);
	}
	tr.onclick=function(){
		if(timeId){
			clearInterval(timeId);	
			timeId=null;
		}
		tpturnLeft();
		timeId=setInterval(tpturnRight,3000);
	}

}