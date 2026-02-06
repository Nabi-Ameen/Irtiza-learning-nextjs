import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Product = (props: any) => {
  const { image, price, title, discount } = props;
  return (
    <div className="hover:shadow-xl rounded-lg">
      <div>
        <Image
          src={image}
          height={300}
          width={500}
          alt="product-image"
          className="rounded-lg"
        />
      </div>
      <div className="p-2">
        <p className="text-lg">{title}</p>
        <div className="flex gap-3">
          <p className="text-orange-500 text-xl">Rs.{price}</p>
          <p>{discount}%</p>
        </div>

        <div>
          <div>
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <span className="pl-2"> (12)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
