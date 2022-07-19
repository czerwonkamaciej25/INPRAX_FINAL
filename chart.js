var ctxB = document.getElementById("barChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
type: 'horizontalBar',
data: {
labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
datasets: [{
label: '# of Votes',
data: [0, 0, 0, 0, 0, 0],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)'
],
borderColor: [
'rgba(255,99,132,1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
],
borderWidth: 1
}]
},
options: {
scales: {
xAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});

// ----- intersection observer will run animation once it enters the viewport ---------

const options = {
  rootMargin: '0px',
  threshold: 0.5
}

const intersectionCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      myBarChart.data.datasets[0].data = myBarChart.data.datasets[0].data.map(() => {
        return Math.floor(Math.random() * 10 + 1)
      });

      myBarChart.update();
      observer.disconnect();
    }
  });
}

const observer = new IntersectionObserver(intersectionCallback, options);

const target = document.getElementById('barChart');
observer.observe(target);


// var data = {
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [1200, 22],
//       backgroundColor: ["rgb(28,198,160)"],
//       borderColor: ["rgb(28,198,160)"],
//       borderWidth: 13,
//       weight: 0,
//     },
//   ],
// };
// var stackedText = {
//   id: "stackedText",
//   afterDatasetsDraw(chart, args, options) {
//     const {
//       ctx,
//       chartArea: { top, bottom, left, right, width, height },
//     } = chart;

//     console.log(data.datasets[0].data[0]);

//     ctx.save();
//     ctx.font = "bolder 40px Arial";
//     ctx.fillStyle = "rgb(28,198,160)";
//     ctx.textAlign = "center";
//     ctx.fillText("#: " + data.datasets[0].data[0], width / 2, height / 2 + top);
//   },
// };

// var config = {
//   type: "doughnut",
//   data,
//   options: {
//     responsive: true,
//     animation: {
//       animateRotate: true,
//       animateScale: false,
//       easing: 'linear',
//       delay: 400, 
//       duration: 4000,
      
//     },
//     rotation: 233,
    

//   },
//   plugins: [stackedText],
  
// };

// var myChart = new Chart(document.getElementById("myChart"), config);
// var myChart2 = new Chart(document.getElementById("myChart2"), config);
// var myChart3 = new Chart(document.getElementById("myChart3"), config);

// const options = {
//   rootMargin: '0px',
//   threshold: 0.5
// }

// const intersectionCallback = (entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       myChart.data.datasets[0].data = myChart.data.datasets[0].data.map(() => {
//         return Math.floor(Math.random() * 10 + 1)
//       });

//       myChart.update();
//       observer.disconnect();
//     }
//   });
// }

// const observer = new IntersectionObserver(intersectionCallback, options);

// const target = document.getElementById('myChart');
// observer.observe(target);
// var ctx = document.getElementById('myChart2').getContext('2d');
// var myChart2 = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         datasets: [{
//             label: '# of Votes',
//             data: [12],
//             backgroundColor: [
//                 'rgb(28,198,160)',

//             ],
//             borderColor: [
//                 'rgb(28,198,160)',
//             ],
//             borderWidth: 20,
//             weight:0
//         }]

//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// var ctx = document.getElementById('myChart3').getContext('2d');
// var myChart3 = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         datasets: [{
//             label: '# of Votes',
//             data: [12],
//             backgroundColor: [
//                 'rgb(28,198,160)',

//             ],
//             borderColor: [
//                 'rgb(28,198,160)',
//             ],
//             borderWidth: 20,
//             weight:0
//         }]

//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
