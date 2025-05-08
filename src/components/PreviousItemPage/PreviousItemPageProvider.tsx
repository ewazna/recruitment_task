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
  const [previousItemPage, setPreviousItemPage] = useState<string | null>(null);

  const context: PreviousItemPageState = {
    previousItemPage,
    setPreviousItemPage,
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/products/")) {
      setPreviousItemPage(location.pathname);
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
