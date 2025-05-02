const Error = ({ message }) => {
  return (
    <div className="container mt-4">
      <div className="alert alert-danger" role="alert">
        {message || "Something went wrong. Try again later."}
      </div>
    </div>
  );
};

export default Error;
