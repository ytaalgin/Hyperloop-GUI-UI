(function () {
	
    var gauge = new Gauge(document.querySelector('#speedometer')).setOptions({
        lineWidth: 0.05,
        angle: -0.25,
        colorStart: '#ff0000', colorStop: '#ff0000',
        
        highDpiSupport: true,
        pointer: {
            length: 0.3,
            strokeWidth: 0.005,
            color: '#0386d6'
        },
        renderTicks: {
            divisions: 10,
            divColor: '#000000',
        }
    });
	
const canvas = document.getElementById("speedometer");
const ctx = canvas.getContext("2d");

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Hız: 0 m/s", canvas.width/2, canvas.height/2); 

	gauge.minValue = 0;
    gauge.maxValue = 0.5;
    gauge.animationSpeed = 10;
	
})();

/*Distance*/
(function () {
	
    var gauge = new Gauge(document.querySelector('#distance')).setOptions({
        lineWidth: 0.05,
        angle: -0.25,
        colorStart: '#ff0000', colorStop: '#ff0000',
        
        highDpiSupport: true,
        pointer: {
            length: 0.3,
            strokeWidth: 0.005,
            color: '#0386d6'
        },
        renderTicks: {
            divisions: 50,
            divColor: '#000000',
        }
    });
	
const canvas = document.getElementById("distance");
const ctx = canvas.getContext("2d");

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Mesafe: 0 m", canvas.width/2, canvas.height/2); 
	
	gauge.minValue = 0;
    gauge.maxValue = 0.5;
    gauge.animationSpeed = 10;
	
})();

/*Thrust*/
(function () {
	
    var gauge = new Gauge(document.querySelector('#thrust')).setOptions({
        lineWidth: 0.07,
        angle: 0.19,
        colorStart: '#ff0000', colorStop: '#ff0000',
        
        highDpiSupport: true,
        pointer: {
            length: 0.25,
            strokeWidth: 0.009,
            color: '#0386d6'
        },
        renderTicks: {
            divisions: 63,
            divColor: '#000000',
        }
    });
	
const canvas = document.getElementById("thrust");
const ctx = canvas.getContext("2d");

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("0", canvas.width/2, canvas.height/3);
ctx.fillText("İtki Motorları", canvas.width/2, canvas.height/2);
	
	gauge.minValue = 0;
    gauge.maxValue = 0.5;
    gauge.animationSpeed = 10;
	
})();

/*Levitation*/
(function () {
	
    var gauge = new Gauge(document.querySelector('#levitation')).setOptions({
        lineWidth: 0.07,
        angle: 0.19,
        colorStart: '#ff0000', colorStop: '#ff0000',
        
        highDpiSupport: true,
        pointer: {
            length: 0.25,
            strokeWidth: 0.009,
            color: '#0386d6',
        },
        renderTicks: {
            divisions: 63,
            divColor: '#000000',
        }
    });
const canvas = document.getElementById("levitation");
const ctx = canvas.getContext("2d");

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("0", canvas.width/2, canvas.height/3);
ctx.fillText("Levitasyon Motorları", canvas.width/2, canvas.height/2);
	
    gauge.minValue = 0;
    gauge.maxValue = 0.5;
	gauge.animationSpeed = 10;
	
})();

/*İvme-x-y-z*/
var xValues = ["X", "Y", "Z"];
var yValues = [0, 10, 20, 30, 40, 50, 60, 70, 100];
var barColors = ["#0386d6", "#0386d6","#0386d6"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]  
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "İvme (m/s2)",
      fontColor: 'white',
	  fontSize: 15
    },
scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                },
		  gridLines: {
          display: true,
		  color: "gray"
        }
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
		  gridLines: {
          display: true,
		  color: "gray"
        }
            }]
        }
  }
});

/*Gyro-x-y-z*/
var xValues = ["Roll Açısı", "Pitch Açısı", "Yaw Açısı"];
var yValues = [-300, -100, 60, 360];
var barColors = ["#0386d6", "#0386d6","#0386d6"];

new Chart("Gyro", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]  
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Gyro (°)",
	  fontColor: 'white',
	  fontSize: 15
    },
scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                },
		  gridLines: {
          display: true,
		  color: "gray"
        }
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
		  gridLines: {
          display: true,
		  color: "gray"
        }
            }]
        }
  }
});

/*Sapmalar*/
var xValues = ["Sağ(+)/Sol(-)", "Yukarı(+)/Aşağı(-)"];
var yValues = [-60, 60];
var barColors = ["#0386d6", "#0386d6"];

new Chart("deviation", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]  
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
	  fontColor: 'white',
      text: "Sapma (cm)",
	  fontSize: 15
    },
scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                },
		  gridLines: {
          display: true,
		  color: "gray"
        }
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
		  gridLines: {
          display: true,
		  color: "gray"
        }
            }]
        }
  }
});