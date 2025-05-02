const Spinner = () => {
  return (
    <div className="text-center mt-4">
      <div
        className="spinner-border"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
