import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Routeur from "./Routeur";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Provider store={store}>
      <Routeur />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  );
};

export default App;
