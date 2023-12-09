import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import FeatchItems from "../Components/FeatchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";
function App() {
  const featchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FeatchItems />
      {featchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
