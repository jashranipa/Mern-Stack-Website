// https://www.positronx.io/react-mern-stack-crud-app-tutorial/ 
import React, { useState, Component, useEffect } from 'react';
import Navbar from '../components/SideBar.js';
import '../App.css';
import '../index.js';
import { Button, Modal, Table } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as GrIcons from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import SideBar from "../components/SideBar.js";
import { TableData } from './TableData.js';
import { nanoid } from "nanoid";
// import Snackbar1 from "../components/PositionedSnackbar.jsx"
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import axios from 'axios';

// import ReadOnlyRow from "../components/ReadOnlyRow.js";
// import Data from "./mock-data.json";
// let TableData = new Array();
export class Student extends Component {

  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      show: false
    }
    this.state = {
      name: '',
      branch: 'CSE',
      gender: '',
      phone: '',
      email: '',
      password: '',
      // TableData: []
    }
    this.state = {
      snackbaropen: false,
      snackbarmsg: ''
    }
  }

  /* for  Snackbar  */

  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };

  /* For Snackbar ends */


  handleModal() {
    this.setState({
      name: '',
      branch: 'CSE',
      gender: '',
      phone: '',
      email: '',
      password: ''
    })
    this.setState({ show: !this.state.show })
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  handleBranchChange = (event) => {
    this.setState({
      branch: event.target.value
    })
  };

  handleGenderChange = (event) => {
    // console.log("fn called");
    // console.log(event.target.value);
    this.setState({
      gender: event.target.value
    })
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    })
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  };



  deleteRecord = (id) => {
    // console.log(id);   // Best Way to debug
    // for(let i=0;i<TableData.length;i++)
    // {
    //   console.log(TableData[i]);  
    // }
    // console.log("Deletion entered");
    // let i = 0;
    // let tempData = TableData;
    // for (i = 0; i < TableData.length; i++) {
    //   if (TableData[i].id == id) {
    //     break;
    //   }
    // }
    // tempData.splice(i, 1);
    // this.setState({
    //   TableData: tempData
    // })
    // console.log("Deletion Done");
  };
  
  handleCancel = (e) => {
    // e.preventDefault();
    this.handleModal();
  }

  handleEdit = (v1,v2,v3,v4,v5,v6,v7) => {
    this.handleModal();
    this.setState({
      name: v2,
      branch: v3,
      gender: v4,
      phone: v5,
      email: v6,
      password: v7
    })
  }
  
  handleSubmit = (e) => {

    // e.preventDefault();
    // console.log(this.state);

    let var1 = this.state.phone;
    let ele1 = document.getElementById("error1");
    ele1.innerHTML="";
    for(let i=0;i<var1.length;i++)
    {
      if(var1[i]>='0' && var1[i]<='9')
      {

      }
      else
      {
        ele1.innerHTML="Incorrect Phone number";
        return;
      }
    }
    
    // using axions to make HTTP request (CRUD) from react to node (See: https://www.positronx.io/react-mern-stack-crud-app-tutorial/ )

    const newData = {
      name: this.state.name,
      branch: this.state.branch,
      gender: this.state.gender,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password
    };

    // POST Request 
    axios.post('/register', newData)
    .then(res => console.log(res.data));

    

    // let name = this.state.name;
    // let branch = this.state.branch;
    // let gender = this.state.gender;
    // let phone = this.state.phone;
    // let email = this.state.email;
    // let password = this.state.password;
    

    // const res = await fetch("/register",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type" : "application/json"
    //   },
    //   body: JSON.stringify({

    //     name:name, branch:branch, gender:gender, phone:phone, email:email,password:password
    //   })
    // });

    // const data = await res.json();


    // const newData = {
    //   name: this.state.name,
    //   branch: this.state.branch,
    //   gender: this.state.gender,
    //   phone: this.state.phone,
    //   email: this.state.email,
    //   password: this.state.password
    // };
    // let tempData = TableData;
    // tempData.push(newData);



    this.setState({
      name: '',
      branch: 'CSE',
      gender: '',
      phone: '',
      email: '',
      password: '',
      // TableData: tempData
    })
    this.setState({ show: !this.state.show });
    this.setState({ snackbaropen: true, snackbarmsg: 'Data inserted Successfully!' });
    // console.log(this.state.email + " " + this.state.password);
    // we can access email and password fully here.

  };

  DataTable = (e) => {
    // GET Request (Read)
    axios.get('/register')
    .then((res) => {
        // TableData = [];
        for(let i=0;i<res.data.length;i++)
        {
          console.log("enter"+TableData.length);
          TableData.push(res.data[i]);
          // console.log(res.data[i]);
        }
        // TableData = res.data;    
      })
      .catch((error) => {
        console.log(error);
      })
      // console.log(TableData.length);
    // for(let i=0;i<TableData.length;i++)
    // {
    //   console.log(TableData[i]);
    // }
      // TableData.push(1);
      // console.log(TableData[0]);
  }

  render() {
    return (
      <>
        <SideBar>
          
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={this.state.snackbaropen}
              autoHideDuration={6000}
              onClose={this.snackbarClose}
            >
            <Alert onClose={this.snackbarClose} severity="success" sx={{ width: '100%' }}>{this.state.snackbarmsg}</Alert>
            </Snackbar>

    
          <div className="d-flex justify-content-end my-2 mx-0">
            <div className="modalClass">
              <Button onClick={() => this.handleModal()}>+ Add Student</Button>
            </div>


            <Modal show={this.state.show} onHide={() => this.handleModal()}>
              <Modal.Header closeButton>Enter Details</Modal.Header>
              <Modal.Body>
                <form method="POST">

                  <div className="mb-3">
                    <label htmlFor="example1" className="form-label">Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control"  />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="example1" className="form-label">Branch</label>
                    <select className="form-select" value={this.state.branch} onChange={this.handleBranchChange}>
                      <option value="CSE">CSE</option>
                      <option value="EEE">EEE</option>
                      <option value="ENI">ENI</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check" value={this.state.gender}  >
                      <input value="Male" onChange={this.handleGenderChange} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="m-2">Male</label>
                      <input value="Female" onChange={this.handleGenderChange} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="m-2">Female</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} className="form-control"  />
                    <div id="error1" className='text-danger'></div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1"  />
                  </div>
                  {/* <div className="d-flex justify-content-end">
                     <button type="submit" className="btn btn-danger m-2" onClick={() => this.handleCancel()}>Cancel</button>
                     <button type="submit" className="btn btn-success m-2" onClick={() => this.handleSubmit()} >Save</button>
                     </div> */}
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => this.handleModal()}>Cancel</Button>
                <Button onClick={() => this.handleSubmit()}>Save</Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div className="app-container">

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>Gender</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.DataTable()} */}
                {TableData.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.branch}</td>
                      <td>{item.gender}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <button type="button" className="bg-primary m-1" ><AiIcons.AiOutlineEdit /></button>
                        <button type="button" className="bg-danger m-1"><ImIcons.ImCross /></button>
                        {/* <button type="button" className="m-1">Delete</button> */}
                      </td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>


        </SideBar>
      </>
    );
  }
}

export default Student;
