import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'

const BarChartGlobalStats = () => {
    const [chartData, setChartData]  = useState([]);
    let globalStats = []
    let slicedStats =[]
    let resultsStats =[]

 const Chart = async () => {


     try{
        const response = await fetch("https://disease.sh/v3/covid-19/all")
        const jsonData = await response.json()
     
        
         for(var i in jsonData)
         globalStats.push(parseInt(jsonData[i]));

         slicedStats = globalStats.slice(2,6);
         resultsStats = slicedStats.splice(2,1)

        

            setChartData({
                labels: ["Today Cases","Deaths","Recovered"],
                datasets: [{
                                             label: "Cases",
                                             data: slicedStats,
                                             backgroundColor: [
                                                 'rgba(255, 165, 0, 1)',
                                                 'rgba(255, 0, 0, 1)',
                                                 'rgba(0, 128, 0, 1)',
                                                 
                                             ],
                                             borderColor: [
                                                 'rgba(0, 0, 0, 1)',
                                                 'rgba(0, 0, 0, 1)',
                                                 'rgba(0, 0, 0, 1)',
                                                
                                             ],
                                             borderWidth: 1
                                         }]
            });
          }
          catch (error) {
            console.error(error.message)
        }
        
    }

    useEffect(() => {
        Chart();
      }, []);

      return(
          <div className="App ml-5">
              <h1 className="text-left ml-5">Bar Chart</h1>
              <div>
                  <Bar
                    data={chartData}
                    width={1000}
                    height={1000} 
                  
                    options={{
                       
                        responsive:false,
                        
                        scales:{
                            yAxes:{
                                ticks:{
                                    beginAtZero: true,
                                   
                                	min: 0,
                                     max: 90
                                }
                            }
                        }
                    }}
                  />
              </div>
          </div>
      )
}

export default BarChartGlobalStats;