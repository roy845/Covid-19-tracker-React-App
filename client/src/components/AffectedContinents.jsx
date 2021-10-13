import axios from 'axios';
import  React, { Fragment ,useEffect,useState } from 'react'
import Card from 'react-bootstrap/Card'
import Divider from '@mui/material/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedNumber from 'react-animated-number'
import Columns from "react-columns"
import Form from "react-bootstrap/Form"

const AffectedCountries = () =>{
    const [data,setData] = useState([]);
    const[searchContinents,setSearchContinents] = useState("")
   

    const getData = async () => {
      axios
      .get("https://corona.lmao.ninja/v2/continents")
      .then(res=>{
          
          setData(res.data)
        
      })
      .catch(err=>{
        console.log(err)
      });
    }

    useEffect(()=>{
        
        getData();

    },[]);


    const filterContinents = data.filter(item=>{
        return searchContinents.toLowerCase() !=="" ? item.continent.toLowerCase().includes(searchContinents.toLowerCase()):item;
    })

    const continents = filterContinents.map((data,i)=>{
        
        return(

        
<Card key = {i} bg="light" text={"dark"} className = "text-center" style={{margin:"10px"}}>

  
  <Card.Body>
  <Card.Title>{data.continent}</Card.Title>
    <Card.Text>
    Cases: 
    {<AnimatedNumber value={data.cases}
     
      
      formatValue={n => n.toFixed(0)}
      duration ={700}
      frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}

    />}
    </Card.Text>

    <Card.Text>
 Deaths:
{<AnimatedNumber value={data.deaths}
     
      
     formatValue={n => n.toFixed(0)}
     duration ={700}
     frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}

   />}
    </Card.Text>

    <Card.Text>
 Recovered:
{<AnimatedNumber value={data.recovered}
     
      
     formatValue={n => n.toFixed(0)}
     duration ={700}
     frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}

   />}
    </Card.Text>


    <Card.Text>
 Today's Cases:
{<AnimatedNumber value={data.todayCases}
     
      
     formatValue={n => n.toFixed(0)}
     duration ={700}
     frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}

   />}
    </Card.Text>

    <Card.Text>
    Today's Deaths:
{<AnimatedNumber value={data.todayDeaths}
     
      
     formatValue={n => n.toFixed(0)}
     duration ={700}
     frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}

   />}
    </Card.Text>

    <Card.Text>
    Active:
{<AnimatedNumber value={data.active}
     
      
     formatValue={n => n.toFixed(0)}
     duration ={700}
     frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}

   />}
    </Card.Text>


    <Card.Text>
     Critical:
{<AnimatedNumber value={data.critical}
     
      
     formatValue={n => n.toFixed(0)}
     duration ={700}
     frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}

   />}
    </Card.Text>

  </Card.Body>

  <Card.Footer>
      <small>Last updated {new Date(parseInt(data.updated)).toString()}</small>
    </Card.Footer>

</Card>
        );
    })

    var queries = [{
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 3,
        query: 'min-width: 1000px'
      }];

    return(
        <Fragment>

        <h1 className="text-center mt-2">Affected Continents</h1>
        
      
        <Divider/>

        <p>
  <button className="btn btn-primary ml-2"
   type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleAffectedCountries" aria-expanded="true" aria-controls="collapseExampleGlobalStats" >
    Affected Continents
  </button>

  <button className="btn btn-primary ml-2" 
  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamplePie" aria-expanded="true" aria-controls="collapseExampleGlobalStats" >
    Pie Chart
  </button>

  <button className="btn btn-primary ml-2" 
  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExampleBar" aria-expanded="true" aria-controls="collapseExampleGlobalStats" >
    Bar Chart
  </button>
</p>

        <Divider/>
        <div className="collapse" id="collapseExampleAffectedCountries">
 <Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Label><h2>Search</h2></Form.Label>
    <Form.Control type="text" onChange ={e=>setSearchContinents(e.target.value)}placeholder="Search a country" />
  </Form.Group>
</Form>

        <Columns queries={queries}>{continents}</Columns>
        </div>
    </Fragment>
    )



}

export default  AffectedCountries