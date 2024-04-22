import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl text-center font-bold font-palanquin">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className=" info-text m-auto text-center mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about thier
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 mt-16 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map(({ customerName, imgURL, rating, feedback }) => (
          <ReviewCard
            key={customerName}
            imgUrl={imgURL}
            customerName={customerName}
            rating={rating}
            feedback={feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
