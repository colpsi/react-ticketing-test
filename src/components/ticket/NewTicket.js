import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function NewTicketForm() {
  const [ticketName, setTicketName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const [tickets, setTickets] = useState();
  const isLowerCase = ticketName === ticketName.toLowerCase();
  const error = isLowerCase ? null : "Username must be lower case";

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTickets = localStorage.getItem("tickets");
    const tickets = JSON.parse(existingTickets) || [];

    tickets.forEach((ticket) => {
      if (ticket.id > count) {
        setCount(ticket.id + 1);
      }
    });

    setTickets(tickets);
  }, []);

  useEffect(() => {
    const existingTickets = localStorage.getItem("tickets");
    setTickets(existingTickets ? JSON.parse(existingTickets) : []);
  }, []);

  function handleSubmit(event) {
    //event.preventDefault();
    setDescription();
    setCount(count + 1);
    const ticket = {
      id: count,
      ticketName: `${ticketName}`,
      description: `${event.target.elements.descriptionInput.value}`,
      email: `${email}`,
      status: "open"
    };

    const next = [...tickets, ticket];

    localStorage.setItem("tickets", JSON.stringify(next));
    alert(`You entered: ${ticketName}`);
  }

  function handleTitleChange(event) {
    setTicketName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ticketNameInput">Ticket Name :</label>
        {/* Calling the function handleChange */}
        <input id="ticketNameInput" type="text" onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="descriptionInput">Description : </label>
        {/* Calling the function handleChange */}
        <textarea id="descriptionInput" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        {/* Calling the function handleChange */}
        <input id="email" type="email" onChange={handleEmailChange} />
      </div>
      {/* displaying error message */}
      <div style={{ color: "red" }}>{error}</div>
      {/* disable button boolean */}
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
      <Link to="/">
        <Button renderAs="button">
          <p>Cancel</p>
        </Button>
      </Link>
    </form>
  );
}
