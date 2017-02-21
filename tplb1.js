
window.onload=function (){
	var tl =document.getElementById("turnright");
	var tr =document.getElementById("turnleft");
	var road =document.getElementById("road");
	var olaf=document.getElementById("ol-f");
	var olas=document.getElementById("ol-s");
	var olat=document.getElementById("ol-t");
	var timeId;
	var i=0;
	tl.onclick=function(){
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
	tr.onclick=function(){
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
		timeId=window.setInterval(tl.onclick,3000);
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
		timeId();
}
	