import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {


  {/* ==== Using Hooks ===== */}

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [active, setActive] = useState("");
  const [inactive, setInActive] = useState("");

  {/* ==== Getting All Array Data ===== */}

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  {/* ==== Navigation Use ===== */}
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    {/* ==== To fill All The Details Popup ===== */}
    if (!fname || !lname ) {
      return toast.warning("Please enter details!!!");
    }

    const data = {
      id: contacts[contacts.length - 1],
      fname,
      lname,
    };

    {/* ==== Contact Added Succesfully ===== */}
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully!!!");
    history("/");
  };

  return (

    <div className="container">
      <h1 className="display-3">Create Contact</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-5">

        {/*===== Body Creation for Add Contact Page =====*/}

          <form onSubmit={handleSubmit}>

              {/* ==== Fname Input Field ===== */}
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>

                {/* ==== Lname Input Field ===== */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>


                {/* ==== Radio Input Field ===== */}
            <input className="form-group" type="radio"  
            value={active}
            onChange={(e) => setActive(e.target.value)}
            />
            Active

            <br></br>


                {/* ==== Radio Input Field ===== */}
            <input className="form-group" type="radio" 
            value={inactive}
            onChange={(e) => setInActive(e.target.value)}/>
            Inactive


                 {/* ==== Submit Button ===== */}
            <div className="form-group">
              <button className="btn btn-dark btn-block" type="submit">
                Save Contact
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
