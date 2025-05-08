function Spinner() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 min-vh-100">
      <div
        className="spinner-border text-primary large-spinner"
        role="status"
      ></div>
      <p className="mt-2">Loading...</p>
    </div>
  );
}

export default Spinner;
