import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col items-start justify-center">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-slate-gray text-sm leading-8 mt-4 lg:max-w-lg sm:max-w-sm">
          Experience top-notch quality and style with our sought after
          selections. Discover a world of comfort, design and value.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-16">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
