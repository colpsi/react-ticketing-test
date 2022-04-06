const getTicket = async (id) => {
  const res = localStorage.getItem("tickets");
  const tickets = JSON.parse(res);

  const ticket = tickets.filter((ticket) => ticket.id === id);

  return ticket;
};

const Ticket = ({ ticket }) => {
  return <div>test</div>;
};

export default Ticket;

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params }) => {
  const ticket = await getTicket(params.id);

  return {
    props: {
      ticket
    }
  };
};
