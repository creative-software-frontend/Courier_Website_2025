const ReviewItem = () => {
  return (
    <div className="col-12 col-md-3">
      <div className="card p-3 mb-3">
        <div className="d-flex justify-content-end">
          <span className="badge bg-secondary">SMEs</span>
        </div>
        <p className="mb-0 text-dark-primary text-lg">
          <i class="fa fa-quote-left" aria-hidden="true"></i>
        </p>
        <p className="fw-regular text-medium line-height-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          ratione et, sed quasi ut mollitia numquam natus at ipsum dolorem
          possimus quas eveniet velit ea.
        </p>
        <div className="d-flex align-items-center gap-2">
          <img className="review_logo" src="/company-logo.jpg" alt="logo" />
          <div>
            <h5 className="mb-0">John Doe</h5>
            <p className="mb-0 text-small">Pran Rfl Group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
