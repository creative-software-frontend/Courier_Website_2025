const SpinnerButton = ({ text }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {text && text} &nbsp;
      <div class="spinner-border" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
    </div>
  );
};

export default SpinnerButton;
