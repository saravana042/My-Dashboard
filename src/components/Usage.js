import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Previous bill',
      backgroundColor: 'rgba(33,132,218,0.95)',
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      data: [45, 30, 76, 86, 70, 50, 80, 50, 56, 30, 60, 40]
    },
    {
        label: 'Latest bill',
        backgroundColor: 'rgba(239, 108, 0, 0.95)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 40, 89, 56, 90, 67, 89, 50]
      }
  ]
}

export default class App extends React.Component {
  render() {
    return (
    
        <div className="card">
            <div className="card-content center-align">
              <h3>Usage History</h3>
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'',
              fontSize:20
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                      display: false,
                  }
                }],
                xAxes: [{
                  gridLines: {
                    display: false,
                }
              }]

            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
            </div>
        </div>
    
   
      
    );
  }
}