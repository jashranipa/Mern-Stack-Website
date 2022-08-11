import React from 'react'
import * as FabIcon from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBar from "../components/SideBar.js";


const Home = () => {
  return (
    <>
      <SideBar>
        <h1>BITS PILANI</h1>
        <img src={require('../images/bits_pilani.jpg')} width="100%" height="30%" alt="Error loading Image" />
        <div class="p-3 m-0">

              <h2><span>Our</span> mission</h2>
              <div align="justify"><p>BITS mission is to advance knowledge and educate students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century.</p></div><div align="justify"></div>
          

          
              <h2><span>Our</span> vision</h2>
              <p align="justify">Our commitment to transparency and stress on equal opportunity has been a key contributing factor behind our emergence as an institute of national repute, our rigorous intake process rewards only merit and ensures that only</p>
          

              <h2><span>Our</span> policy</h2>
              <p align="justify">The pursuit of excellence requires a transparent and honest approach. At BITS Pilani, we have always believed this to be true and are one of the few top institutes in India to favour a ‘Merit Only based admission policy.</p>
          

        </div>
      </SideBar>
    </>
  )
};


export default Home
