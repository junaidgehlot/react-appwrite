import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/AuthSlice";
import { Header, Footer } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <>
      <Header />
      <div className=" min-h-screen flex content-between">
        <main>
          {/* <Outlet></Outlet> */}
        </main>
      </div>
      <Footer />
    </>
  ) : (
    <div>Loading</div>
  );
}

export default App;
