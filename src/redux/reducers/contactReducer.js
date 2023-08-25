
{/* ==== Initial Dummy Data ===== */}
const initialState = [
    { id: 0, fname: "Sarang", lname: "Jaybhaye"},
    { id: 1, fname: "Taiyo", lname: "AI"}
  ];
  
  export const contactReducer = (state = initialState, action) => {

    {/* ==== Using Switch To Match The CASES ===== */}
    switch (action.type) {

//      {/* ==== For Add Conatct Match ===== */}
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;

//      {/* ==== For Delete Conatct Match ===== */}
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;

//      {/* ==== For Update Conatct Match ===== */}        
      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;


//      {/* ==== Other Matches ===== */}
      default:
        return state;
    }
  };