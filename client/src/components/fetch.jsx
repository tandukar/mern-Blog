
import React, { Component } from 'react';

class Fetch extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
  "http://localhost:3800/api/user/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    First_Name: { item.firstname }, 
                    Last_Name: { item.lastname }, 
                    User_Email: { item.email } 
                    User_Age: { item.age } 
                    </ol>
                ))
            }
        </div>
    );
  }
  }
  
  export default Fetch;