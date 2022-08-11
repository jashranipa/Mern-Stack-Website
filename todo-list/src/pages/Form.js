import React, { Component, useState } from 'react'
// import { Route } from "react-router-dom";
import Form2 from './Form2.js';
// import react-router from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// navigate: 
// add content: trick to keep empty div with id , and then write innerHtml in function

// export function GoForm2(props) {
//     const navigate = useNavigate();
//     navigate('/form2');
// }

const Form = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: 'example1@gmail.com', password: ''
    });

    let name, value;

    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }




    const handleSubmit = (event) => {
        event.preventDefault();



        // console.log(this.state.email + " " + this.state.password);
        // we can access email and password fully here.

        // want to insert any dynamic data -->
        let e1 = document.getElementById("error1");
        let e2 = document.getElementById("error2");
        e1.innerHTML = "";
        e2.innerHTML = "";
        if (user.email == "jash@gmail.com" && user.password == "jash") {
            console.log("login succesfull");
            // window.location="/home";
            navigate('/home');
            // this.props.history.push('/form2');
        }
        else if (user.email != "jash@gmail.com") {
            e1.innerHTML = "Incorrect Email ID";
        }
        else if (user.password != "jash") {
            e2.innerHTML = "Incorrect Password";
        }

    };



    return (
        <div className="container cssclass">

            <form onSubmit={handleSubmit}>
                <div className="row">

                    <div className="mb-3 col">
                        <label htmlFor="exampleInputEmail1" className="form-label text-centre">Email address</label>
                        <input type="email" name="email" value={user.email} onChange={handleInputs} className="form-control" id="exampleInputEmail1" />
                        <div id="error1" className="text-danger"></div>
                    </div>


                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleInputs} className="form-control" id="exampleInputPassword1" />
                    <div id="error2" className="text-danger"></div>
                </div>


                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>




            </form>
            <div id="redirect1"></div>
        </div>
    )

}


export default Form;
