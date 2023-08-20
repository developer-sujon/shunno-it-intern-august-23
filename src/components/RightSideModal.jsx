/* eslint-disable react/prop-types */
//External Lib Import
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const RightSideModal = ({ sidebarOpen, setSidebarOpen, modalId }) => {
  return (
    <div className="relative">
      <aside
        className={`fixed top-0 right-0 z-40 w-1/3 h-screen transition-transform shadow-lg ${
          !sidebarOpen ? "translate-x-full" : "translate-x-0"
        } `}
      >
        {/* sidebar  */}
        <button
          onClick={() => setSidebarOpen(false)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-red-800 bg-red-200 m-1 rounded-full  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 overflow-hidden absolute right-0"
        >
          <FaTimes />
        </button>
        <div className="h-full px-3 pt-10 py-4 overflow-y-auto bg-gray-50">
          <Link
            to="/"
            className="flex items-center p-2 font-bold text-gray-900 rounded-lg "
          >
            {" "}
            <h2 className="font-2xl">Modal Id: {modalId}</h2>
          </Link>
          <div className="bg-white p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsum
              repudiandae harum deleniti amet, consequatur nihil cupiditate
              expedita doloribus a!
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RightSideModal;
