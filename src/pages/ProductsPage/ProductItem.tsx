import { useNavigate } from "react-router-dom";
import type { ProductItemProps } from "./ProductItemProp";

function ProductItem({ id, image, title, price }: ProductItemProps) {
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(`/products/${id}`)}>
      <figure className="product-container">
        <img alt={`${title} photo`} src={image} className="product-img" />
        <figcaption>
          <p>{title}</p>
          <p>
            <strong>Price:</strong> {price}$
          </p>
        </figcaption>
      </figure>
    </a>
  );
}

export default ProductItem;
