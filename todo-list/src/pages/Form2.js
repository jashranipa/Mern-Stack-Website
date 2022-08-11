import React, { Component } from 'react'

export class form2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            state: '',
            phone: '',
            country: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    handleStateChange = (event) => {
        this.setState({
            state: event.target.value
        })
    };

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    };

    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value
        })
    };

    

    handleSubmit = (event) => {

        event.preventDefault();
        
        // console.log(this.state.email + " " + this.state.password);
        // we can access email and password fully here.
        
        // want to insert any dynamic data --> 
        console.log(this.state.name + " " + this.state.country);
        
        let d1 = document.getElementById("details");
        let name = this.state.name;
        let state = this.state.state;
        let phone = this.state.phone;
        let country = this.state.country;
        d1.innerHTML=`<ul style="list-style-type:disc;">
        <li>Name: ${name}</li>
        <li>State: ${state}</li>
        <li>Phone : ${phone}</li>
        <li>Country: ${country}</li>
        
        </ul>`;
    };

    render() {
        return (
            <>
                <div className="container cssclass">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="example1" className="form-label">Name</label>
                            <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" id="example1" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="example3" className="form-label">State</label>
                            <input type="text" value={this.state.state} onChange={this.handleStateChange} className="form-control" id="example3" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="example3" className="form-label">Phone Number</label>
                            <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} className="form-control" id="example3" required />
                        </div>
                        
                        
                        <div className="mb-3">
                            <label htmlFor="example3" className="form-label">Country</label>
                            <input type="text" value={this.state.country} onChange={this.handleCountryChange} className="form-control" id="example3" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div id="details"></div>
                </div>
            </>
        )
    }
}

export default form2
