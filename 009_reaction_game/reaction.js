
		 function randomColor(color){
		 	var r = Math.floor(Math.random() * 256);
		 	var g = Math.floor(Math.random() * 256);
		 	var b = Math.floor(Math.random() * 256);
		 	var color1 = "rgb(" + r +", "+ g +", "+ b + ")"
		 	return color1;
		 };
		/////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////

		function circleOrSquare(radius){
			var radius = "0%";
			var a = Math.floor(Math.random() * 3);
			for (var i; i < 2; i++){
			}
			if(1 == Number(a)){
				radius = "50%";
			} 
			return radius;
		}
	
//////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
	makeShapeAppear();
	var start = new Date().getTime();
	function makeShapeAppear() {
		var top = Math.random() * 400;
		var left = Math.random() * 400;
		var width = Math.random() * 300;
		document.getElementById("shape").style.backgroundColor = randomColor();
		// document.getElementById("shape").style.borderRadius = circleOrSquare();
		document.getElementById("shape").style.top = top + "px";
		document.getElementById("shape").style.left = left + "px";
		if (width < 200){
			width = 200;
		}
		document.getElementById("shape").style.width = width + "px";
		document.getElementById("shape").style.height = width + "px";
		document.getElementById("shape").style.display = "block";
		
		start = new Date().getTime();
		}
		
	function appearAfterDelay() {
		setTimeout(makeShapeAppear, Math.random() * 2000);
	}
		appearAfterDelay(); 
		 
		document.getElementById("shape").onclick = function(){
			document.getElementById("shape").style.display = "none";
			  var end = new Date().getTime();
				var timeTaken = (end - start)/ 1000;
			 	document.getElementById("time").innerHTML =  timeTaken + " seconds";
			 	appearAfterDelay(); 
		}