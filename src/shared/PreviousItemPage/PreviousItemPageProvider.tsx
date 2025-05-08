import { createContext, useState, type PropsWithChildren } from "react";

interface PreviousItemPageState {
  previousItemPage: string | null;
  savePreviousItemPage: (path: string) => void;
}

const PreviousItemPageContext = createContext<PreviousItemPageState>({
  previousItemPage: null,
  savePreviousItemPage: () => {},
});

function PreviousItemPageProvider({ children }: PropsWithChildren) {
  const savePath = sessionStorage.getItem("previousItemPage");
  const [previousItemPage, setPreviousItemPage] = useState<string | null>(
    savePath
  );
  const savePreviousItemPage = () => {
    setPreviousItemPage(location.pathname);
    sessionStorage.setItem("previousItemPage", location.pathname);
  };

  const context: PreviousItemPageState = {
    previousItemPage,
    savePreviousItemPage,
  };

  return (
    <PreviousItemPageContext.Provider value={context}>
      {children}
    </PreviousItemPageContext.Provider>
  );
}

export { PreviousItemPageProvider };
export default PreviousItemPageContext;
