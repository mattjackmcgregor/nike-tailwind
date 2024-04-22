import Shoe8 from "../assets/images/shoe8.svg";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-container max-lg:flex-col gap-10"
    >
      <div className="flex flex-col flex-1">
        <h2 className=" font-bold font-palanquin capitalize text-4xl lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafter footwear
          is designed to elevate you experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={Shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
