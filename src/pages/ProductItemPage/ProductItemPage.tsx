import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetchProductsQuery } from "../../store";
import ProductDetails from "./ProductDetails";

function ProductItemPage() {
  let content;

  const { productId } = useParams();
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
      const product = products.find(
        (product) => product.id.toString() === productId
      );
      content = <ProductDetails product={product} />;
    }
  }
  return <>{content}</>;
}

export default ProductItemPage;
