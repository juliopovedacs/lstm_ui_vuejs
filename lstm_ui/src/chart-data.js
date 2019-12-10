export const resultsChartData = {
    type: 'bar',
    title: 'Results of Remaining Cycle-Time MAE in Days',
    data: {
      labels: ['2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'Our Approach',
          data: [41, 26, 57, 47, 49, 40, 67, 68, 24, 26],
          backgroundColor: "rgba(62, 149, 205, 0.5)",
          borderColor: '#36495d',
          borderWidth: 3
        }
      ]
    },
    options: {
      legend: {
        labels: {
            fontSize: 18
        }
    },
    title: {
        display : true,
        text : "Results of Remaining Cycle-Time MAE in Days",
        fontSize : 22.0
     },
    scales: {
        yAxes: [{
            ticks:{
                beginAtZero: true,
                fontSize:15.0,
            },
            scaleLabel: {
                display: true,
                labelString: 'MAE (days)',
                fontSize :20.0,
            }
        }],
        xAxes: [{
            ticks:{
              fontSize: 15.0,
            },
            scaleLabel: {
                display: true,
                labelString: 'Prefix Size',
                fontSize : 20.0,
            }
        }]
      },
      responsive: true,
      lineTension: 1,
    }
  }
  
  export default resultsChartData;