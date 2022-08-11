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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import ReadOnlyRow from "../components/ReadOnlyRow.js";
// import Data from "./mock-data.json";
// let TableData = new Array();
const Student = () => {

  const [user, setUser] = useState({
    name: '', branch: 'CSE', gender: '', phone: '', email: '', password: ''
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }


  // always use function component so that we can use hook;
  
  // want to make global variables --> make like this
  const [state1,setState1] = useState(false); // we kept state1 in dependency of useEffect , so UseEffect only runs if State1 is changed. (else infinite calls.) 
  const [show,setShow] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  

  const [snackbaropen,setSnackbaropen] = useState(false);
  const [snackbarmsg,setSnackbarmsg] = useState("");

  const [snackbaropen2,setSnackbaropen2] = useState(false);
  const [snackbarmsg2,setSnackbarmsg2] = useState("");

  const [snackbaropen3,setSnackbaropen3] = useState(false);
  const [snackbarmsg3,setSnackbarmsg3] = useState("");

  const [data,setData] = useState([]);
  const [id,setId] = useState("");
    

  /* for  Snackbar  */

  const snackbarClose = (event) => {
    setSnackbaropen(false);
  };

  const snackbarClose2 = (event) => {
    setSnackbaropen2(false);
  };

  const snackbarClose3 = (event) => {
    setSnackbaropen3(false);
  };

  /* For Snackbar ends */

  const handleClose3 = () => {
    setShow3(false);
  };
  const handleShow3 = () => {
    setShow3(true);
  };

  const handleModal = (e) => {
    setUser({
      name: '',
      branch: 'CSE',
      gender: '',
      phone: '',
      email: '',
      password: ''
    })
    setShow(!show);

  }

  const handleModal2 = (e) => {
    setShow2(!show2);
  }
  
  const handleDelete = (id1) => {
    // console.log(id);
    
    // handleShow3();
    axios.delete(`/register/${id1}`)
    .then((res) => {
        setState1(!state1);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      setSnackbaropen2(true);
      setSnackbarmsg2("Data deleted Successfully!");
      
  }

  const handleEdit = (id1,v2,v3,v4,v5,v6,v7) => {
    handleModal2();
    setUser({
      name: v2,
      branch: v3,
      gender: v4,
      phone: v5,
      email: v6,
      password: v7
    })
    setId(id1);
    
  }
  
  const handleSubmit = (e) => {

    // e.preventDefault();
    // console.log(user);

    let var1 = user.phone;
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
    
    // using axions to make HTTP request (CRUD) from react to node 

    const newData = {
      name: user.name,
      branch: user.branch,
      gender: user.gender,
      phone: user.phone,
      email: user.email,
      password: user.password
    };

    // POST Request 
    
    
    // handleShow3();
    axios.post('/register', newData)
    .then((res) => {
      setState1(!state1);
      console.log(show3);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    

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



    setUser({
      name: '',
      branch: 'CSE',
      gender: '',
      phone: '',
      email: '',
      password: ''
    })
    setShow(!show);
    setSnackbaropen(true);
    setSnackbarmsg("Data inserted Successfully!");
    
    // console.log(this.state.email + " " + this.state.password);
    // we can access email and password fully here.

  };


  const handleSubmit2 = (e) => {



    let var1 = user.phone;
    let ele1 = document.getElementById("error2");
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
    
    
    const newData = {
      name: user.name,
      branch: user.branch,
      gender: user.gender,
      phone: user.phone,
      email: user.email,
      password: user.password
    };
    
    // handleShow3();
    console.log(`/register/${id}`);
    axios.put(`/register/${id}`,newData)
    .then((res) => {
        setState1(!state1);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })

    setShow2(!show2);
    
    setSnackbaropen3(true);
    setSnackbarmsg3("Data Updated Successfully!");
  };

  const DataTable = (e) => {
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
  useEffect(() => {
    async function getData() {
      handleShow3();
      axios.get('/register')
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        handleClose3();
        console.log(show3);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    getData();
  },[state1]);

  let display;
  if(data.length==0)
  {
    display = <div className="d-flex justify-content-center">No Data Present</div>
  }
    return (
      <>
        <SideBar>
          
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={snackbaropen}
              autoHideDuration={6000}
              onClose={snackbarClose}
            >
            <Alert onClose={snackbarClose} severity="success" sx={{ width: '100%' }}>{snackbarmsg}</Alert>
            </Snackbar>

            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={snackbaropen2}
              autoHideDuration={6000}
              onClose={snackbarClose2}
            >
            <Alert onClose={snackbarClose2} severity="error" sx={{ width: '100%' }}>{snackbarmsg2}</Alert>
            </Snackbar>

            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={snackbaropen3}
              autoHideDuration={6000}
              onClose={snackbarClose3}
            >
            <Alert onClose={snackbarClose3} severity="info" sx={{ width: '100%' }}>{snackbarmsg3}</Alert>
            </Snackbar>

    
          <div className="d-flex justify-content-end my-2 mx-0">
            <div className="modalClass">
              <Button onClick={handleModal}>+ Add Student</Button>
            </div>


            <Modal show={show} onHide={handleModal}>
              <Modal.Header closeButton>Enter Details</Modal.Header>
              <Modal.Body>
                <form method="POST">

                  <div className="mb-3">
                    <label htmlFor="example1" className="form-label">Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleInputs} className="form-control"  />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="example1" className="form-label">Branch</label>
                    <select className="form-select" name="branch" value={user.branch} onChange={handleInputs}>
                      <option value="CSE">CSE</option>
                      <option value="EEE">EEE</option>
                      <option value="ENI">ENI</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check" value={user.gender}>
                      <input value="Male" onChange={handleInputs} type="radio" name="gender" id="flexRadioDefault1" />
                      <label className="m-2">Male</label>
                      <input value="Female" onChange={handleInputs} type="radio" name="gender" id="flexRadioDefault2" />
                      <label className="m-2">Female</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleInputs} className="form-control"  />
                    <div id="error1" className='text-danger'></div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={user.email} onChange={handleInputs} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleInputs} className="form-control" id="exampleInputPassword1"  />
                  </div>
                  {/* <div className="d-flex justify-content-end">
                     <button type="submit" className="btn btn-danger m-2" onClick={() => handleCancel()}>Cancel</button>
                     <button type="submit" className="btn btn-success m-2" onClick={() => handleSubmit()} >Save</button>
                     </div> */}
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleModal}>Cancel</Button>
                <Button onClick={handleSubmit}>Save</Button>
              </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleModal2}>
              <Modal.Header closeButton>Enter Details</Modal.Header>
              <Modal.Body>
                <form>

                  <div className="mb-3">
                    <label htmlFor="example1" className="form-label">Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleInputs} className="form-control"  />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="example1" className="form-label">Branch</label>
                    <select className="form-select" name="branch" value={user.branch} onChange={handleInputs}>
                      <option value="CSE">CSE</option>
                      <option value="EEE">EEE</option>
                      <option value="ENI">ENI</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check" value={user.gender}>
                      <input value="Male" onChange={handleInputs} type="radio" name="gender" id="flexRadioDefault1" />
                      <label className="m-2">Male</label>
                      <input value="Female" onChange={handleInputs} type="radio" name="gender" id="flexRadioDefault2" />
                      <label className="m-2">Female</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleInputs} className="form-control"  />
                    <div id="error2" className='text-danger'></div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={user.email} onChange={handleInputs} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleInputs} className="form-control" id="exampleInputPassword1"  />
                  </div>
                  {/* <div className="d-flex justify-content-end">
                     <button type="submit" className="btn btn-danger m-2" onClick={() => handleCancel()}>Cancel</button>
                     <button type="submit" className="btn btn-success m-2" onClick={() => handleSubmit()} >Save</button>
                     </div> */}
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleModal2}>Cancel</Button>
                <Button onClick={handleSubmit2}>Save</Button>
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
               
              <Backdrop 
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={show3} onClick={handleClose3}>
              <CircularProgress color="inherit" />
              </Backdrop>
                {display}
                {data.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.branch}</td>
                      <td>{item.gender}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <button type="button" className="m-2" onClick={() => handleEdit(item._id,item.name,item.branch,item.gender,item.phone,item.email,item.password)}><EditIcon/></button>
                        <button type="button"  onClick={() => handleDelete(item._id)}><DeleteIcon/></button>
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
export default Student;
