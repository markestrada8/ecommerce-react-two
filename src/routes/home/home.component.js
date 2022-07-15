import { Outlet } from "react-router-dom";
import "../../categories.styles.scss";
import Catalogue from "../../components/catalogue/catalogue.component";

const Home = () => {
  return (
    <div className="categories-container">
      <Catalogue />
      <Outlet />
    </div>
  );
};

export default Home;
