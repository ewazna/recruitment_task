import type { ProductDetailsProps } from "./ProductDetailsprops";

function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) {
    return <>Product not found</>;
  }

  const { title, image, description, price, category, rating } = product;

  return (
    <figure className="details-container">
      <img alt={`${title} photo`} src={image} className="product-img" />
      <figcaption>
        <p>{title}</p>
        <p>{description}</p>
        <p>Price: {price}$</p>
        <p>Category: {category}</p>
        <div>
          <span>Rate: {rating.rate}</span>
          <span>Number of rates: {rating.count}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default ProductDetails;
