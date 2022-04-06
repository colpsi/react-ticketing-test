import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import NewTicket from "./components/ticket/NewTicket";
import TicketDetails from "./components/ticket/[id]";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/ticket/new" element={<NewTicket />} />

          <Route
            path="/ticket/:id"
            render={(props) => {
              return <TicketDetails {...props} />;
            }}
          />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route path="*" to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
