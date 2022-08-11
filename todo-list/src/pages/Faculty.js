import React from 'react'
import { Link } from 'react-router-dom';
import SideBar from "../components/SideBar.js";

function faculty() {
  return (
    <>
      <SideBar>
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Prof. Sam</strong>
                <h3 className="mb-0">HOD of Computer Science</h3>
                <p className="card-text mb-auto">Description</p>
              </div>

            </div>
          </div>

        </div>
      </SideBar>
    </>
  )
}

export default faculty
