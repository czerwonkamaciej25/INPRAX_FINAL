// var ctxB = document.getElementById("barChart").getContext("2d");
// var myBarChart = new Chart(ctxB, {
//   type: "doughnut",
//   data: {
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [0],
//         backgroundColor: ["rgb(28,198,160)"],
//         borderColor: ["rgb(28,198,160)"],
//         borderWidth: 20,
//         weight: 0,
//       },
//     ],
//   },

//   options: {
//     scales: {
//       xAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
//   plugins: {
//       id: "stackedText",
//       afterDatasetsDraw(chart, args, options) {
//         const {
//           ctx,
//           chartArea: { top, bottom, left, right, width, height },
//         } = chart;
    
//         console.log(data.datasets[0].data[0]);
    
//         ctx.save();
//         ctx.font = "bolder 40px Arial";
//         ctx.fillStyle = "rgb(28,198,160)";
//         ctx.textAlign = "center";
//         ctx.fillText("#: " , width / 2, height / 2 + top);
//       },
//     }
// });

// // ----- intersection observer will run animation once it enters the viewport ---------

// const options = {
//   rootMargin: "0px",
//   threshold: 0.5,
// };

// const intersectionCallback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       myBarChart.data.datasets[0].data = myBarChart.data.datasets[0].data.map(
//         () => {
//           return Math.floor(Math.random() * 10 + 1);
//         }
//       );

//       myBarChart.update();
//       observer.disconnect();
//     }
//   });
// };

// const observer = new IntersectionObserver(intersectionCallback, options);

// const target = document.getElementById("barChart");
// observer.observe(target);
var data = {
  datasets: [
    {
      label: "# of Votes",
      data: [0],
      backgroundColor: ["rgb(28,198,160)"],
      borderColor: ["rgb(28,198,160)"],
      borderWidth: 13,
      weight: 0,
    },
  ],
};

var stackedText = {
  id: "stackedText",
  afterDatasetsDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;

    console.log(data.datasets[0].data[0]);

    ctx.save();
    ctx.font = "bolder 40px Arial";
    ctx.fillStyle = "rgb(28,198,160)";
    ctx.textAlign = "center";
    ctx.fillText("#: ", width / 2, height / 2 + top);
  },
};

var config = {
  type: "doughnut",
  data,
  options: {
    responsive: true,
    animation: {
      animateRotate: true,
      animateScale: false,
      easing: 'linear',
      delay: 400,
      duration: 4000,

    },

  },
  plugins: [stackedText],

};

var myChart = new Chart(document.getElementById("myChart"), config);
var myChart2 = new Chart(document.getElementById("myChart2"), config);
var myChart3 = new Chart(document.getElementById("myChart3"), config);

const options = {
  rootMargin: '0px',
  threshold: 0.5
}

const intersectionCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      myChart.data.datasets[0].data = myChart.data.datasets[0].data.map(() => {
        return Math.floor(Math.random() * 10 + 1)
      });

      myChart.update();
      //2
      myChart2.data.datasets[0].data = myChart.data.datasets[0].data.map(() => {
        return Math.floor(Math.random() * 10 + 1)
      });

      myChart2.update();
      //3
      myChart3.data.datasets[0].data = myChart.data.datasets[0].data.map(() => {
        return Math.floor(Math.random() * 10 + 1)
      });

      myChart3.update();
      observer.disconnect();
    }
  });
}

const observer = new IntersectionObserver(intersectionCallback, options);

const target = document.getElementById('myChart');
observer.observe(target);

// const counters = document.querySelectorAll('.counter');
// const speed = 200; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });


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
