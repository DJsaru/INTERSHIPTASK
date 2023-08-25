import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


const Home = () => {

  {/* ==== Fetching All the Data from Another Page ===== */}
  const contacts = useSelector(state=>state);
  const [data, setData] = useState('');
  
  const dispatch = useDispatch();

  {/* ==== Delete Contact Button ===== */}
  const deleteContact = (id) => {
      dispatch({type:"DELETE_CONTACT", payload:id});
      toast.success("Contact deleted successfully!!!")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-center">
          <Link to="/add">
            <button className="btn btn-outline-dark"
            style={{marginBottom:"20px"}}>
              Add Contact</button>
          </Link>
        </div>
        <div className="col-md-6 mx-auto">

          {/* ==== Creating A Table  ===== */}
        <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">FName</th>
                <th scope="col">LName</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>


              {/* ==== Map The Data With Params ===== */}
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.fname}</td>
                    <td>{contact.lname}</td>
                    <td>

                       {/* ==== Edit Button ===== */}
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mb-1"
                        style={{marginRight:"6px"}}
                      >
                        Edit
                      </Link>
                      
                       {/* ==== Delete Button ===== */}
                      <button
                        type="button"
                        onClick={()=> deleteContact(contact.id)}
                        className="btn btn-sm btn-danger mr-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (

//                {/* ==== If Table is EMPTY ===== */}
                <tr>
                  <th>No Contact Found Please add contact from create contact button </th>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
