import { useContext } from "react";
import { Link } from "react-router-dom";
import PreviousItemPageContext from "../../components/PreviousItemPage/PreviousItemPageProvider";

function HomePage() {
  const { previousItemPage } = useContext(PreviousItemPageContext);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-25 h-100 d-flex flex-column justify-content-center align-items-center">
        <img
          alt="home_page_image"
          src="/house.png"
          className="w-75 h-75 mb-5"
        />
        {previousItemPage && (
          <Link to={previousItemPage} className="btn btn-outline-primary">
            Return to product browsing
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePage;
