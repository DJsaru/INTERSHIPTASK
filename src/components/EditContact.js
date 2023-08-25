import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const EditContact = () => {

  const {id} = useParams();

  {/* ==== Using Hooks ===== */}

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  {/* ==== Getting All Array Data ===== */}

  const contacts = useSelector(state => state);
  const dispatch = useDispatch();

  {/* ==== Navigation Use ===== */}
  const history = useNavigate();

  {/* ==== ID Use Only ===== */}
  const currentContact = contacts.find(contact => contact.id === parseInt(id))  ;


  useEffect(() => {
    if(currentContact){
      setFName(currentContact.fname);
      setLName(currentContact.lname);
    }
  }, [currentContact])

  const handleSubmit = (e) => {
    e.preventDefault();

    {/* ==== To fill All The Details Popup ===== */}
    if (!fname || !lname) {
      return toast.warning("Please enter details!!!")
    }

    const data = {
      id: parseInt(id),
      fname,
      lname
    }

    {/* ==== Contact Added Succesfully ===== */}
    dispatch({type: "UPDATE_CONTACT", payload: data})
    toast.success("Contact updated successfully!!!")
    history('/');

  };

  

  return (
    <div className="container">

      {/* ==== Query ===== */}
      {currentContact ? (
        <>
      <h1 className="display-3">Edit Contact {id}</h1>
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

              {/* ==== Edit Button ===== */}
            <div className="form-group">
              <button className="btn btn-dark btn-block" type="submit">
                Edit Contact
              </button>
            </div>

              {/* ==== Navigate To Home ===== */}
            <Link to="/" className="mr-3">
              <button className="btn btn-danger btn-block">
               Cancel
              </button>
            </Link>


          </form>
        </div>
      </div>
      </>

   //  {/* ==== If ID doesn't exist ===== */}
      ):(
        <h1 className="display-3">Client with id {id} not exists</h1>
      )}

    </div>
  )
}

export default EditContact;