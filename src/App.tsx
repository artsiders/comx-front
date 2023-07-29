import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Routeur from "./Routeur";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
