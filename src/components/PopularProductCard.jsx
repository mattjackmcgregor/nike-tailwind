import star from "../assets/icons/star.svg";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div>
      {/* <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"> */}
      <div className="flex flex-col w-full max-sm:w-full">
        <img
          src={imgURL}
          alt="shoe collection"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>
      <div className="mt-8 flex gap-2.5 justify-start items-center">
        <img src={star} alt="rating" width={15} height={15} />
        <p className="font-montserrat text-slate-gray text-sm">(4.5)</p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin ">
        {name}
      </h3>
      <p className="mt-2 leading-normal font-semibold font-montserrat text-coral-red ">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
