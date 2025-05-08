import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { useLocation } from "react-router-dom";

interface PreviousItemPageState {
  previousItemPage: string | null;
  setPreviousItemPage: (path: string) => void;
}

const PreviousItemPageContext = createContext<PreviousItemPageState>({
  previousItemPage: null,
  setPreviousItemPage: () => {},
});

function PreviousItemPageProvider({ children }: PropsWithChildren) {
  const savePath = sessionStorage.getItem("previousItemPage");
  const [previousItemPage, setPreviousItemPage] = useState<string | null>(
    savePath
  );

  const context: PreviousItemPageState = {
    previousItemPage,
    setPreviousItemPage,
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/products/")) {
      setPreviousItemPage(location.pathname);
      sessionStorage.setItem("previousItemPage", location.pathname);
    }
  }, [location]);

  return (
    <PreviousItemPageContext.Provider value={context}>
      {children}
    </PreviousItemPageContext.Provider>
  );
}

export { PreviousItemPageProvider };
export default PreviousItemPageContext;
