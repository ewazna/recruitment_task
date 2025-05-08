import { useEffect, useState } from "react";
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

function ProductsPage() {
  const [sortType, setSortType] = useState(SortType.Default);

  let content;
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
    if (productsFetchingResult.error) {
      content = <p>Error during product fetching</p>;
    }
  }, [productsFetchingResult]);

  if (productsFetchingResult.isFetching) {
    content = <>Loading</>;
  } else if (productsFetchingResult.isSuccess) {
    if (products) {
      const sortedProducts = [...products];
      switch (sortType) {
        case "none":
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

      content = (
        <main className="mt-5 pt-2">
          <ContextMenu
            name="Sorting"
            icon={<TiArrowUnsorted />}
            className="context-menu"
          >
            {sortingOptions.map((option) => {
              return (
                <div key={option.sortType}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
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
        </main>
      );
    }
    return <>{content}</>;
  }
}

export default ProductsPage;
