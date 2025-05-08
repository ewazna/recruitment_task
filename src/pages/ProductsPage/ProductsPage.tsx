import { useEffect, useState, type JSX } from "react";
import {
  TiArrowUnsorted,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { useFetchProductsQuery } from "../../store";
import { SortType } from "../../models";
import ProductItem from "./ProductItem";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";

function ProductsPage() {
  const [sortType, setSortType] = useState(SortType.Default);
  const [content, setContent] = useState<JSX.Element | null>(<Spinner />);

  const sortingOptions = [
    {
      label: "Default",
      sortType: SortType.Default,
      icon: <TiArrowUnsorted />,
    },
    {
      label: "Title",
      sortType: SortType.TitleAsc,
      icon: <TiArrowSortedUp />,
    },
    {
      label: "Title",
      sortType: SortType.TitleDesc,
      icon: <TiArrowSortedDown />,
    },
    {
      label: "Price",
      sortType: SortType.PriceAsc,
      icon: <TiArrowSortedUp />,
    },
    {
      label: "Price",
      sortType: SortType.PriceDesc,
      icon: <TiArrowSortedDown />,
    },
  ];

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
      if (products) {
        const { label: sortingLabel, icon: sortingIcon } = sortingOptions.find(
          (option) => option.sortType === sortType
        )!;

        const sortedProducts = [...products];
        switch (sortType) {
          case SortType.Default:
            break;
          case SortType.TitleAsc:
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case SortType.TitleDesc:
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
          case SortType.PriceAsc:
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case SortType.PriceDesc:
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
          default:
            break;
        }

        setContent(
          <main className="mt-5 pt-2">
            <ContextMenu
              name={`Sorting: ${sortingLabel}`}
              icon={sortingIcon}
              className="context-menu"
            >
              {sortingOptions.map((option) => {
                return (
                  <div key={option.sortType}>
                    <Button
                      onClick={() => {
                        setSortType(option.sortType);
                      }}
                      active={option.sortType === sortType}
                      className="w-100"
                    >
                      {option.label} {option.icon}
                    </Button>
                  </div>
                );
              })}
            </ContextMenu>
            <ul>
              {sortedProducts.map((product) => {
                return (
                  <li key={product.id}>
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
          </main>
        );
      }
    }
  }, [productsFetchingResult, sortType, products]);

  return <>{content}</>;
}

export default ProductsPage;
