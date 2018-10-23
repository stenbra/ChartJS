new Chart(document.getElementById("chart"),{
	type: "bar",
	data: {
		labels:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
		datasets:[
			{
				label: "Regnmängd(mm)",
				backgroundColor:["#66f","#f66","#66f","#f66","#66f","#f66","#66f","#f66","#66f","#f66","#66f","#f66"],
				data:[44,34,35,30,42,60,75,74,56,60,53,47,10]
			}
		]
	},
	options: {
		legend: {display: false},
		title: {
			display: true,
			text: "Regnmängd i Finland (medeltal)"
		}
	}
});