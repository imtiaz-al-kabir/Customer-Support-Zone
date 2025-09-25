const Resolve = ({ el, handleResolve }) => {


  return (
    <div
      onClick={handleResolve}
      className="card  bg-base-100 card-sm shadow-sm "
    >
      <div className="card-body">
        <h2 className="card-title">{el.title}</h2>
        <div className="flex justify-between items-center">
          <h1 className="text-green-500 text-lg"> ✓ completed</h1>
          <h2 className=""> click to remove</h2>
        </div>
      </div>
    </div>
  );
};

export default Resolve;
