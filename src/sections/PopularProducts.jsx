import React from "react";
import Slider from "react-slick";
import { products } from "../constants";
import AddToCartProductCard from "../components/AddToCartProductCard";
import PopularProductCard from "../components/PopularProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Custom Arrow Components
const NextArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const CategorySlider = ({ title, products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-16 w-full border shadow-sm pb-10">
      <div className="p-4 md:ml-6">
        <h3 className="text-3xl md:text-[36px] font-bold font-montserrat text-coral-red">{title}</h3>
      </div>
      <div className="md:mx-5 relative">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="my-2 px-2">
              <div className="hover:border border-gray-300 p-4 rounded-lg hover:shadow-md hover:scale-[1.01] cursor-pointer transition-all">
                <AddToCartProductCard key={index} {...product} id={index} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const PopularProducts = () => {
  // Sample data for three categories (you should replace these with actual product lists)
  const category1 = products.slice(0, 8); // First 8 products
  const category2 = products.slice(0, 8); // Next 8 products
  const category3 = products.slice(0, 8); // Last 8 products

  return (
    <div id="products" className="max-container max-sm:mt-12 capitalize">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((value) => (
          <PopularProductCard key={value.name} {...value} />
        ))}
      </div>
      <CategorySlider title="Sneakers & Athletic Shoes" products={category1} />
      <CategorySlider title="Boots" products={category2} />
      <CategorySlider title="Casual Shoes" products={category3} />
    </div>
  );
};

export default PopularProducts;