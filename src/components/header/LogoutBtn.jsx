
import { useDispatch } from "react-redux";
import AuthService from "../../appwrite/auth";
import { logout } from "../../store/AuthSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    AuthService.logout()
      .then(() => dispatch(logout()))
      .catch((err) => console.log(err));
  };
  return (
    <button
      className=" inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
