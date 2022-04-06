import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home component
import Home from "./components/Home";

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

          <Route
            path="/ticket/:id"
            render={(props) => {
              console.log(props);
              return <TicketDetails {...props} />;
            }}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
