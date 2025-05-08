import { useContext } from "react";
import { Link } from "react-router-dom";
import PreviousItemPageContext from "../../components/PreviousItemPage/PreviousItemPageProvider";

function HomePage() {
  const { previousItemPage } = useContext(PreviousItemPageContext);

  return (
    <div className="home-container">
      <img alt="home_page_image" src="/house.png" />
      {previousItemPage && (
        <Link to={previousItemPage}>Return to product browsing</Link>
      )}
    </div>
  );
}

export default HomePage;
