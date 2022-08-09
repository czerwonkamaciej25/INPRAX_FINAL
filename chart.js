// first chart////////////////////////////////////////////////
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
    ctx.font = "normal 45px Open Sans";
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.textAlign = "center";
    ctx.fillText("200", width / 2, height / 2 + top);
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
      easing: "linear",
      delay: 10,
      duration: 1000,
    },
  },
  plugins: [stackedText],
};
var myChart = new Chart(document.getElementById("myChart"), config);

//second chart////////////////////////////////////////////////

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
    ctx.font = "normal 45px Open Sans";
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.textAlign = "center";
    ctx.fillText("2000", width / 2, height / 2 + top);
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
      easing: "linear",
      delay: 10,
      duration: 2000,
    },
  },
  plugins: [stackedText],
};

var myChart2 = new Chart(document.getElementById("myChart2"), config);

//third chart////////////////////////////////////////////////

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
    ctx.font = "normal 45px Open Sans";
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.textAlign = "center";
    ctx.fillText("20000", width / 2, height / 2 + top);
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
      easing: "linear",
      delay: 10,
      duration: 3000,
    },
  },
  plugins: [stackedText],
};
var myChart3 = new Chart(document.getElementById("myChart3"), config);

//Intersection////////////////////////////////////////////////

const options = {
  rootMargin: "1px",
  threshold: 0.9,
};

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      myChart.data.datasets[0].data = myChart.data.datasets[0].data.map(() => {
        return Math.floor(Math.random() * 100 + 1);
      });

      myChart.update();
      observer.disconnect();
    }
    if (entry.isIntersecting) {
      myChart2.data.datasets[0].data = myChart2.data.datasets[0].data.map(
        () => {
          return Math.floor(Math.random() * 100 + 1);
        }
      );

      myChart2.update();
      observer.disconnect();
    }
    if (entry.isIntersecting) {
      myChart3.data.datasets[0].data = myChart3.data.datasets[0].data.map(
        () => {
          return Math.floor(Math.random() * 100 + 1);
        }
      );

      myChart3.update();
      observer.disconnect();
    }
  });
};

const observer = new IntersectionObserver(intersectionCallback, options);

const target = document.getElementById("myChart");
observer.observe(target);
