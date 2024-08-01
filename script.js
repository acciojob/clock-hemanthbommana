//your JS code here. If required.

document.addEventListener('DOMContentLoaded',UpdateTimer());
setInterval(UpdateTimer, 1000);
	function UpdateTimer(){
		let ans = document.getElementById("timer") ;
		let now = new Date();
		let hours = now.getHours();
		    hours = hours % 12;
            hours = hours ? hours : 12;
		let minutes = now.getMinutes();
		let seconds = now.getSeconds();
		let period = hours >= 12 ? 'PM' : 'AM';
		ans.innerHTML = (now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()+", "+hours+":"+minutes+":"+seconds+" "+period);
		
	}
