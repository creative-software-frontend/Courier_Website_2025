import { FaRegLightbulb } from "react-icons/fa";

const WhyUsItem = () => {
  return (
    <div className="col-12 col-md-4">
      <div className="p-3 mb-4">
        <div className="d-flex gap-4">
          <FaRegLightbulb className="text-xxl text-success" />
          <div>
            <h3 className="fw-medium">One Stop Solution</h3>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, consequuntur vitae? Architecto quod ducimus ab
              voluptas ipsa porro eos quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsItem;
