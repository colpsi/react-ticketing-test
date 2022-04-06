import { Link } from "react-router-dom";

function getTableBodyAsReactElement({ tickets }) {
  console.log("tableRender");
  return !tickets ? null : (
    <ul>
      <li style={{ display: "flex", gap: "10px", flexBasis: 0 }}>
        <div width="20">ID</div>
        <div width="90">Ticket Name</div>
        <div width="150">Assignee</div>
        <div width="70">Status</div>
      </li>

      {tickets.map((item) => {
        return (
          <Link to={`/ticket/${item.id}`}>
            <li
              key={item.id}
              style={{
                display: "flex",
                gap: "10px",
                background: "tomato"
              }}
            >
              <div className="id">{item.id}</div>
              <div>{item.ticketName}</div>
              <div>{item.email}</div>
              <div>{item.status}</div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default function TicketTable({ tickets }) {
  return getTableBodyAsReactElement({ tickets });
}
