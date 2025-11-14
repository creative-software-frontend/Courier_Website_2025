/* 
 component achievements - index page
*/

const Achievements = () => {
  return (
    // achievement Section
    <section className="section">
      {/* achievement heading */}
      <h2 className="section-heading achievements">Our Achievements</h2>
      {/* achievement wrapper */}
      <div
        className={"main__wrapper grid grid-4 achievements__container"}
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        {/* achievement 1 */}
        <div className={"achievement"}>
          <h2>1 Million+</h2>
          <p>Parcels Delivered</p>
        </div>
        {/* achievement 2 */}
        <div className={"achievement"}>
          <h2>64</h2>
          <p>Districts Coverage</p>
        </div>
        {/* achievement 3 */}
        <div className={"achievement"}>
          <h2>500+</h2>
          <p>Delivery Agents</p>
        </div>
        {/* achievement 4 */}
        <div className={"achievement"}>
          <h2>2000+</h2>
          <p>Registered Merchants</p>
        </div>
      </div>
      {/* end achievement wrapper */}
    </section>
    // end client section
  );
};

export default Achievements;
