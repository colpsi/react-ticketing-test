import { Component } from "react";
import ReactDOM from "react-dom";

function handleSearch(event) {
  event.preventDefault();
  window.location.assign("/ticket/" + event.currentTarget.id);
}

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
          <li
            key={item.id}
            id={item.id}
            onClick={handleSearch}
            style={{
              display: "flex",
              gap: "10px",
              background: "tomato"
            }}
          >
            <div width="20" className="id">
              {item.id}
            </div>
            <div width="90">{item.ticketName}</div>
            <div width="150">{item.email}</div>
            <div width="70">{item.status}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default function TicketTable({ tickets }) {
  return getTableBodyAsReactElement({ tickets });
}
