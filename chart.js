const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12],
            backgroundColor: [
                'rgb(28,198,160)',
            
            ],
            borderColor: [
                'rgb(28,198,160)',
            ],
            borderWidth: 20,
            weight:0
        }]
        
    },
});

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

