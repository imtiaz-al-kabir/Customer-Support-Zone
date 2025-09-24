const SideStatus = ({ tkt, handleFilterTicket }) => {
  // console.log(data);
  // console.log(tkt);

  // handleFilterTicket();

  return (
    <div className="card  bg-base-100 card-sm shadow-sm ">
      <div className="card-body">
        <h2 className="card-title">{tkt.title}</h2>

        <button
          onClick={() => {
            
            handleFilterTicket(tkt.id);
          }}
          className="btn bg-green-500 text-white font-medium"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default SideStatus;
