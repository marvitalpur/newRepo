import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import '../assets/scss/global.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from "../navigation/Navigate";

// import { Container } from './styles';
const App = () => {
  return (
    <>
    {/* <Sidebar/> */}
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <Navigation/>

    </>
  );
};

export default App;
