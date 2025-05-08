import { useEffect } from "react";
import { useFetchProductsQuery } from "../../store";
import ProductItem from "./ProductItem";

function ProductsPage() {
  let content;
  const productsFetchingResult = useFetchProductsQuery();
  const products = productsFetchingResult.data;

  useEffect(() => {
    if (productsFetchingResult.error) {
      content = <p>Error during product fetching</p>;
    }
  }, [productsFetchingResult]);

  if (productsFetchingResult.isFetching) {
    content = <>Loading</>;
  } else if (productsFetchingResult.isSuccess) {
    if (products) {
      content = (
        <ul className="list-container">
          {products.map((product) => {
            return (
              <li key={product.title}>
                <ProductItem
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </li>
            );
          })}
        </ul>
      );
    }
    return <>{content}</>;
  }
}

export default ProductsPage;
