import React, { Component } from 'react'
import axios from "axios"
import AllBusses from './AllBusses';
 class AddBus extends Component {

    state = {
            arrival:"",
            departure:"",
            company_id:this.props.id,
            company_name:this.props.user,
            date:"",
            time:"",
            max_seats:"",
            price:""
    }

    onChangeHandler=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8081/addbus`,this.state)
        .then(res=>{
           
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Arrival</label>
                    <input type = "text" name="arrival" onChange={this.onChangeHandler}></input>
                    <label>Departure</label>
                    <input type="text" name="departure" onChange={this.onChangeHandler}></input>
                    <label>Date</label>
                    <input type="text" name="date" onChange={this.onChangeHandler}></input>
                    <label>Time</label>
                    <input type="text" name="time" onChange={this.onChangeHandler}></input>
                    <label>Max Seat</label>
                    <input type="text" name="max_seats" onChange={this.onChangeHandler}></input>
                    <label>Price</label>
                    <input type="text" name="price" onChange={this.onChangeHandler}></input>
                    <button onClick={this.onSubmitHandler} >ADD BUS</button>
                </form>
                <AllBusses id = {this.props.id}></AllBusses>
            </div>
        )
    }
}
export default AddBus