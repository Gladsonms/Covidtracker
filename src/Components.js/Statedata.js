import { Component } from "react";
import Axios from 'axios';
import {Accordion , Card , Button} from 'react-bootstrap';

class Statedata extends Component{
    constructor(){
        super();
        this.state ={
            stateData : {}
        }
    }
        componentDidMount(){
            Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
           // response.data
            this.setState({stateData:response.data});
            });
        }
    
    render(){
        let keys =Object.keys(this.state.stateData);
        return(
           <div className="row">
               <div className="col-md-12">
               <Accordion>
                   {
                       keys.map((itm,ky)=>{
                          
                              let districts=this.state.stateData[itm].districtData;
                              let districts_keys = Object.keys(districts);
                              let total_active=0;
                              let total_confirmed=0;
                              let total_deaths=0;
                              let total_recovered=0;
                              let district_list =[];
                              for (let x in districts){
                                    total_active += districts[x].active;
                                    total_confirmed += districts[x].confirmed;
                                    total_deaths += districts[x].deceased;
                                    total_recovered += districts[x].recovered;
                                    let ob = districts[x];
                                    ob ["districts_name"] = x;
                                    district_list.push(ob)
                                    
                              }
                              return(
                                <Card>
                                <Card.Header>
                                  <Accordion.Toggle as={Button} variant="primary" eventKey={ky} className="p-2 col-md-10">
                                    {itm} <Button className="btn btn-info p-2 mr-2 ml-3">Total cases- {total_confirmed}</Button>
                                    <Button className="btn btn-warning p-2 mr-2 ml-3"> Active cases- {total_active}</Button>
                                    <Button className="btn btn-success p-2 mr-2 ml-3">Recovered- {total_recovered}</Button>
                                    <Button className="btn btn-danger p-2 mr-2 ml-3">Total deaths- {total_deaths}</Button>

                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={ky}>
                                <table className="table table-bordered table-striped">
                                    <thead> 
                                        <tr> 
                                            <th>Districts</th>
                                        <th>Coniformed</th>
                                        <th>Active</th>
                                        <th>Recovered</th>
                                        <th>Deaths</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {
                                                district_list.map((itm,ky)=>{
                                                    return(
                                                            <tr>
                                                                        <td>{itm.districts_name}</td>
                                                                        <td>{itm.confirmed}</td>
                                                                        <td>{itm.active}</td>
                                                                        <td>{itm.recovered}</td>
                                                                        <td>{itm.deceased}</td>
                                                            </tr>
                                                    )
                                                })
                                            }
                                    </tbody>
                                </table>
                                </Accordion.Collapse>
                              </Card>
                              )
                       })
                   }
  
  
</Accordion>
               </div>
           </div>
        )
    }
}
export default Statedata;