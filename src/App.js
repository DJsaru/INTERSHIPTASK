import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Dashboard from "./components/AddG";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

      {/* ==== Creating Routes ===== */}
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route
          path="/maps"
          element={
            <QueryClientProvider client={queryClient}>
              <Dashboard />
            </QueryClientProvider>
          }
        />        
      </Routes>
    </div>
  );
};

export default App;
