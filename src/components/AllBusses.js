import React, { Component } from 'react'
import axios from 'axios'
import uniqid from "uniqid"

 class AllBusses extends Component {
    state={
        busses:[],
        id: this.props.id
    }
    
    getMyBusses =()=>{
        if(this.state.id!==null)
        {
            axios.post(`http://localhost:8081/getbusses`,this.state.id)
            .then(res=>{
                this.setState({
                    busses:res.data
                })
            })
        
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getMyBusses}> Get My Busses</button>

                <div>
                    {
                        this.state.busses.map(bus=>{
                         return(
                         <p key={uniqid.time()}>{bus.arrival}-{bus.departure}-{bus.company_id}-{bus.company_name}-{bus.date}-{bus.time}-{bus.max_seats}-{bus.price}</p>
                        )  
                        })
                    }
                </div>




            </div>
        )
    }
}
export default AllBusses