import { useState } from "react";
import TicketTable from "./TicketTable";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Home({ tickets = getStaticProps() }) {
  const [keyword, setKeyword] = useState("");
  console.log("test");
  const filteredTicket = tickets.filter(
    (ticket) =>
      ticket.ticketName.toLowerCase().includes(keyword) ||
      ticket.email.toLowerCase().includes(keyword) ||
      ticket.status.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <>
      <div>
        <div>Found {tickets.length} tickets</div>
        <div>
          <SearchInput
            placeholder="Filter by Name, Assigne or Status"
            onChange={onInputChange}
          />
        </div>
      </div>

      <TicketTable tickets={filteredTicket} />
      <Link to="ticket/new">
        <Button renderAs="button">
          <p>New Ticket</p>
        </Button>
      </Link>
    </>
  );
}

export const getStaticProps = () => {
  const res = localStorage.getItem("tickets");
  const tickets = JSON.parse(res);

  console.log(tickets);
  return tickets;
};
