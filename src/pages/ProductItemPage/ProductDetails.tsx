import { useContext, useEffect } from "react";
import type { ProductDetailsProps } from "./ProductDetailsProps";
import PreviousItemPageContext from "../../shared/PreviousItemPage/PreviousItemPageProvider";

function ProductDetails({ product }: ProductDetailsProps) {
  const { title, image, description, price, category, rating } = product;
  const { savePreviousItemPage } = useContext(PreviousItemPageContext);

  useEffect(() => {
    savePreviousItemPage(window.location.pathname);
  }, [savePreviousItemPage]);

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <figure className="card container-sm details-container">
        <img
          alt={`${title} photo`}
          src={image}
          className="card-img-top details-img"
        />
        <figcaption>
          <div className="card-body">
            <p className="card-title h5">{title}</p>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-body border mb-2">
            <p>Price: {price}$</p>
            <p>Category: {category}</p>
            <div className="d-flex w-100 justify-content-between">
              <span>Rate: {rating.rate}</span>
              <span>Number of rates: {rating.count}</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default ProductDetails;
