const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                'rgb(28,198,160)',
                'rgba(54, 162, 235, 0.2)',
            
            ],
            borderColor: [
                'rgb(28,198,160)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
          
        }]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});