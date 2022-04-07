import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home component
import Home from "./components/Home";
import Ticket from "./components/ticket/[id]";

// import About component
import NewTicket from "./components/ticket/NewTicket";
import TicketDetails from "./components/ticket/[id]";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />

          <Route path="/ticket/new" element={<NewTicket />} />

          <Route path="/ticket/:id" element={<Ticket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
