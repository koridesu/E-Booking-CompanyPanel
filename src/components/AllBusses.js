import React, { Component } from 'react'
import axios from 'axios'
import uniqid from "uniqid"
import '../styles/AddBus.css'

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
                <div >
              
                </div>
                <button className="getmybusses" onClick={this.getMyBusses}> Get My Busses</button>
              
                <div>
                    {
                        this.state.busses.map(bus=>{
                         return(
                             
                         <div className="line">
                        <div><h1 style={{fontSize:20, marginLeft:25,color: "#3B324D"}}>{bus.company_name} </h1>  </div>    
                                <div className="row">

                                    <div className="col-md-2 vr">
                                        <p>Şirket ID: {bus.company_id}</p>
                                    </div>
                                    <div className="col-md-2 vr">
                                        <p>Nereden:  {bus.departure}</p>
                                    </div>

                                    <div className="col-md-2 vr">
                                        <p>Nereye: {bus.arrival}</p>
                                    </div>                              

                                    <div className="col-md-2 vr">
                                        <p> Tarih: {bus.date} </p>
                                    </div>

                                    <div className="col-md-2 vr">
                                        <p> Saat: {bus.time}</p>
                                    </div>

                                    <div className="col-md-2 vr">
                                        <p> Fiyat: {bus.price}TL</p>
                                    </div>
                                    <div className="col-md-2 vr">
                                        <p> Max Seat: {bus.max_seats}</p>
                                    </div>

                                    
                             </div>                     
                        </div>
                        )  
                    })
                }
            </div>
        </div>

        )
    }
}
export default AllBusses