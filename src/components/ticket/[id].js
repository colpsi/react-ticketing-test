import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const getTicket = (id) => {
  const res = localStorage.getItem("tickets");
  const tickets = JSON.parse(res) || [];

  const ticket = tickets.find((ticket) => ticket.id === parseInt(id, 0));
  return ticket;
};

const Ticket = () => {
  let { id } = useParams();
  let ticket = getTicket(id);
  function handleSubmit() {}
  function handleTicketName() {}
  return (
    <form onSubmit={handleSubmit}>
      <h3>{ticket.id}</h3>
      <div>
        <label htmlFor="ticketNameInput">Ticket Name :</label>
        {/* Calling the function handleChange */}
        <input
          id="ticketNameInput"
          type="text"
          value={ticket.ticketName}
          onChange={handleTicketName}
        />
      </div>
      <div>
        <label htmlFor="descriptionInput">Description : </label>
        {/* Calling the function handleChange */}
        <textarea
          id="descriptionInput"
          type="text"
          value={ticket.description}
        />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        {/* Calling the function handleChange */}
        <input id="email" type="email" value={ticket.email} />
      </div>
      <div>
        <label htmlFor="status">Change the ticket status a car: </label>

        <select name="status" id="status" value={ticket.status}>
          <option value="open">Open</option>
          <option value="progress">In Progress</option>
          <option value="closed">Closed</option>
          <option value="no-reproduce">Could Not Reproduce</option>
        </select>
      </div>
      <Link to="/">
        <Button renderAs="button">
          <p>Cancel</p>
        </Button>
      </Link>
    </form>
  );
};

export default Ticket;

export const getStaticPaths = () => {
  const res = localStorage.getItem("tickets");
  const tickets = JSON.parse(res);

  const paths = tickets.map((country) => ({
    params: { id: tickets.id }
  }));

  return {
    paths,
    fallback: false
  };
};
