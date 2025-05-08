import { useParams } from "react-router-dom";
import { useFetchProductsQuery } from "../../store";
import ProductDetails from "./ProductDetails";
import Spinner from "../../components/Spinner/Spinner";

function ProductItemPage() {
  const { productId } = useParams();
  const productsFetchingResult = useFetchProductsQuery();
  const products = productsFetchingResult.data;

  if (productsFetchingResult.isFetching) {
    return <Spinner />;
  } else if (productsFetchingResult.isError) {
    return (
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
      return <ProductDetails product={product} />;
    } else {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 min-vh-100">
          <p>Product not found</p>
        </div>
      );
    }
  }
}

export default ProductItemPage;
