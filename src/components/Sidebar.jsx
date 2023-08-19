//External Lib Import
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaPlusCircle, FaTimes } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

//Internal Lib Import
import defaultUserImg from "../assets/avatar.jpg";
import { userLogout } from "../redux/features/auth.reducer";
import { useBoardCreateMutation } from "../redux/services/board.service";
import BoardList from "./BoardList";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [boardCreate, { isLoading, data: newlyCreatedBoard }] =
    useBoardCreateMutation();

  useEffect(() => {
    if (newlyCreatedBoard) {
      navigation(`/boards/${newlyCreatedBoard._id}`);
    }
  }, [newlyCreatedBoard]);

  return (
    <div className="relative">
      <button
        onClick={() => setSidebarOpen(true)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 overflow-hidden "
      >
        <span className="sr-only">{t("open sidebar")}</span>

        <FaBars />
      </button>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen || "-translate-x-full"
        } sm:translate-x-0`}
      >
        {/* sidebar  */}
        <button
          onClick={() => setSidebarOpen(false)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-red-800 bg-red-200 m-1 rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 overflow-hidden absolute right-0"
        >
          <span className="sr-only">{t("open sidebar")}</span>

          <FaTimes />
        </button>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <Link
            to="/"
            className="flex items-center p-2 font-bold text-gray-900 rounded-lg hover:bg-gray-100  group"
          >
            <img
              className="w-5 h-5 rounded transition duration-75"
              src={user?.avatar || defaultUserImg}
              alt="profile"
              referrerPolicy="no-referrer"
            />
            <span className="ml-3">{user?.name || "unknown"}</span>
          </Link>
          <ul className="space-y-2 font-medium ml-2">
            <li>
              <button
                onClick={() => boardCreate()}
                className="flex items-center gap-2 p-1 text-gray-500 rounded-lg hover:bg-gray-100 group w-full focus:outline-none active:bg-white"
              >
                <FaPlusCircle /> {t("new page")}
              </button>
            </li>
            <li>
              <button
                onClick={() => dispatch(userLogout())}
                className="flex items-center gap-2 p-1 bg-red-100 text-red-500 rounded-lg hover:bg-red-50 group w-full focus:outline-none active:bg-white"
              >
                <HiOutlineLogout className="ml-1" /> {t("logout")}
              </button>
            </li>
          </ul>
          <BoardList />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
