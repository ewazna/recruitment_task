import { Link } from "react-router-dom";
import type { ProductItemProps } from "./ProductItemProp";

function ProductItem({ id, image, title, price }: ProductItemProps) {
  return (
    <Link
      to={`/products/${id}`}
      className="card mb-3 container-sm d-flex product-container cursor-pointer"
    >
      <figure className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            alt={`${title} photo`}
            src={image}
            className="img-fluid rounded-start p-1 product-img"
          />
        </div>
        <figcaption className="col-md-8 card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">
            <strong>Price:</strong> {price}$
          </p>
        </figcaption>
      </figure>
    </Link>
  );
}

export default ProductItem;
