import { Component } from "react";
import  axios from "axios";
//import Datatable from 'react-bs-datatable';
///import tableHeaders from 'react-bs-datatable';
///import { tableBody , tableHeaders } from 'react-bs-datatable';



class World extends Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({data:response.data});
        });
        
    }
    render(){
        return(
            <div className="row">
                <div className="col md-12">
                    <table className="table  table-primary table-bordered  table-striped ">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Total cases</th>
                                <th>Recoverd</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.data.map((itm,ky)=>{
                                return(
                                    <tr>
                                        <td>{itm.country}
                                        <img style={ {width:'64px' , marginLeft:'10px'} } src={itm.countryInfo.flag} alt="countey flag"/>
                                        </td>
                                        <td>{itm.cases}</td>
                                        <td>{itm.recovered}</td>
                                        <td>{itm.deaths}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
//<Datatable tableHeaders={header} tableBody={body} />
export default World;