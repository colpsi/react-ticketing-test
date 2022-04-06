import { useState } from "react";
import Tickets from "../components/TicketTable";
//import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";

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
        {/* <div>
          <SearchInput
            placeholder="Filter by Name, Assigne or Status"
            onChange={onInputChange}
          />
        </div> */}
      </div>

      <Tickets tickets={filteredTicket} />
      <button>
        New Ticket <Link />
      </button>
    </>
  );
}

export const getStaticProps = () => {
  const res = localStorage.getItem("tickets");
  const tickets = JSON.parse(res);

  console.log(tickets);
  return tickets;
};
