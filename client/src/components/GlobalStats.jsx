import  React, { Fragment ,useEffect,useState } from 'react'
import { CardDeck } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Divider from '@mui/material/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChartGlobalStats from './BarChartGlobalStats'
import PieChartGlobalStats from './PieChartGlobalStats'
import AnimatedNumber from 'react-animated-number'
import LineGraph from './LineGraph';


const GlobalStats = () =>{

    const [data,setData] = useState([]);
    
    const getData = async () => {
        try {

            const response = await fetch("https://corona.lmao.ninja/v2/all")
            const jsonData = await response.json()
              setData(jsonData)
        
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
     
        getData();
        
    },[]);

    const date = new Date(parseInt(data.updated));
    const lastUpdated = date.toString();

return(
   <Fragment>

        <h1 className="text-center mt-2">Global Stats</h1>
        
        <Divider/>

        <p>
  <button className="btn btn-primary ml-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleGlobalStats" aria-expanded="true" aria-controls="collapseExampleGlobalStats" >
    Global Stats
  </button>

  <button className="btn btn-primary ml-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamplePie" aria-expanded="true" aria-controls="collapseExampleGlobalStats" >
    Pie Chart
  </button>

  <button className="btn btn-primary ml-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleBar" aria-expanded="true" aria-controls="collapseExampleGlobalStats" >
    Bar Chart
  </button>

  <button className="btn btn-primary ml-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleLine" aria-expanded="true" aria-controls="collapseExampleGlobalStats" >
    Worldwide new cases
  </button>
</p>

        
<div className="collapse" id="collapseExampleGlobalStats">
  <div className="card card-body">
  <CardDeck>

 
 <Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}>

<Card.Body>
<Card.Title>Cases</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.cases}
   
    
    formatValue={n => n.toFixed(0)}
    duration ={700}
    frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
  />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>


 <Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}>

<Card.Body>
  <Card.Title>Today Cases</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.todayCases}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Deaths</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.deaths}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
<Card.Title>Today Deaths</Card.Title>
<Card.Text>
{<AnimatedNumber  value={data.todayDeaths}
 
  
 formatValue={n => n.toFixed(0)}
 duration ={700}
 frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
/>}
</Card.Text>
</Card.Body>
<Card.Footer>
<small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
<Card.Title>Recovered</Card.Title>
<Card.Text>
{<AnimatedNumber  value={data.recovered}
 
  
 formatValue={n => n.toFixed(0)}
 duration ={700}
 frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
/>}
</Card.Text>
</Card.Body>
<Card.Footer>
<small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
<Card.Title>Today Recovered</Card.Title>
<Card.Text>
{<AnimatedNumber  value={data.todayRecovered}
 
  
 formatValue={n => n.toFixed(0)}
 duration ={700}
 frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
/>}
</Card.Text>
</Card.Body>
<Card.Footer>
<small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>




</CardDeck>


<CardDeck>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Active</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.active}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Critical</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.critical}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
<Card.Title>Cases Per One Million</Card.Title>
<Card.Text>
{<AnimatedNumber  value={data.casesPerOneMillion}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
</Card.Text>
</Card.Body>
<Card.Footer>
<small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>


<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Deaths Per One Million</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.deathsPerOneMillion}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Tests</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.tests}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
<Card.Title>Tests Per One Million</Card.Title>
<Card.Text>
{<AnimatedNumber  value={data.testsPerOneMillion}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
</Card.Text>
</Card.Body>
<Card.Footer>
<small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>



</CardDeck>


<CardDeck>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Population</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.population}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>One Case Per People</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.oneCasePerPeople}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
<Card.Title>One Death Per People</Card.Title>
<Card.Text>
{<AnimatedNumber  value={data.oneDeathPerPeople}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
</Card.Text>
</Card.Body>
<Card.Footer>
<small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>


<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>One Test Per People</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.oneTestPerPeople}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Active Per One Million</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.activePerOneMillion}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
<Card.Title>Recovered Per One Million</Card.Title>
<Card.Text>
{<AnimatedNumber  value={data.recoveredPerOneMillion}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
</Card.Text>
</Card.Body>
<Card.Footer>
<small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

</CardDeck>


<CardDeck>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>Critical Per One Million</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.criticalPerOneMillion}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

<Card bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}> 

<Card.Body>
  <Card.Title>AffectedCountries</Card.Title>
  <Card.Text>
  {<AnimatedNumber  value={data.affectedCountries}
   
    
   formatValue={n => n.toFixed(0)}
   duration ={700}
   frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
 />}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small>Last updated {lastUpdated}</small>
</Card.Footer>
</Card>

</CardDeck>

  </div>
</div>

<Divider/>
   
<div className="collapse" id="collapseExampleGraphs">
  
</div>

<div className="collapse" id="collapseExamplePie">
    <PieChartGlobalStats/>
    
  </div>

  <div className="collapse" id="collapseExampleBar">
    <BarChartGlobalStats/>
  </div>


  <div className="collapse" id="collapseExampleLine" style={{height:'1000px',width:'1000px'}}>
    <LineGraph/>
  </div>

  


 

 
</Fragment>
)
}

export default GlobalStats