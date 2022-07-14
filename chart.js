const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [1200, 22],
      backgroundColor: ["rgb(28,198,160)"],
      borderColor: ["rgb(28,198,160)"],
      borderWidth: 20,
      weight: 0,
    },
  ],
};
const stackedText = {
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
    ctx.fillText("#: " + data.datasets[0].data[0], width / 2, height / 2 + top);
  },
};
let delayed;
const config = {
  type: "doughnut",
  data,
  options: {
    responsive: true,
  },
  plugins: [stackedText],
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 136600 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
const myChart2 = new Chart(document.getElementById("myChart2"), config);
const myChart3 = new Chart(document.getElementById("myChart3"), config);
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
