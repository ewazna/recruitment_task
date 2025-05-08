import { useParams } from "react-router-dom";
import { useEffect, useState, type JSX } from "react";
import { useFetchProductsQuery } from "../../store";
import ProductDetails from "./ProductDetails";
import Spinner from "../../components/Spinner/Spinner";

function ProductItemPage() {
  const [content, setContent] = useState<JSX.Element | null>(<Spinner />);

  const { productId } = useParams();
  const productsFetchingResult = useFetchProductsQuery();
  const products = productsFetchingResult.data;

  useEffect(() => {
    if (productsFetchingResult.isFetching) {
      setContent(<Spinner />);
    } else if (productsFetchingResult.isError) {
      setContent(
        <div className="d-flex flex-column justify-content-center align-items-center w-100 min-vh-100">
          <img alt="error_image" src="/error.png" className="w-25 h-25" />
          <p className="mt-2">Error during product fetching</p>
        </div>
      );
    } else if (productsFetchingResult.isSuccess && products) {
      const product = products.find(
        (product) => product.id.toString() === productId
      );

      if (product) {
        setContent(<ProductDetails product={product} />);
      } else {
        setContent(
          <div>
            <p>Product not found</p>
          </div>
        );
      }
    }
  }, [productsFetchingResult, productId, products]);

  return <>{content}</>;
}

export default ProductItemPage;
