import { star } from "../assets/icons";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgUrl}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          height={24}
          width={24}
          className="object-contain m-2"
        />
        <p className=" font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
