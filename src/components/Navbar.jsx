//External Lib Import
import { useTranslation } from "react-i18next";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

//Internal Lib Import
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import logo from "../assets/logo.png";
import {
  useBoardDeleteMutation,
  useBoardListQuery,
  useBoardSingleQuery,
  useBoardUpdateMutation,
} from "../redux/services/board.service";

const Navbar = () => {
  const url = new URL(window.location.href);
  const { id } = useParams();
  const { t } = useTranslation();
  const boardPage = url.pathname.includes("boards");
  const navigate = useNavigate();
  const { data: singleBoard } = useBoardSingleQuery(id, {
    skip: !id,
  });
  const [boardUpdate] = useBoardUpdateMutation();
  const [boardDelete, { isSuccess }] = useBoardDeleteMutation();
  const { data: boardList } = useBoardListQuery();

  const favouriteBoard = () => {
    if (singleBoard) {
      if (singleBoard.favourite) {
        boardUpdate({
          id,
          postBody: {
            favourite: false,
          },
        });
      } else {
        boardUpdate({
          id,
          postBody: {
            favourite: true,
          },
        });
      }
    }
  };

  const deleteBoard = () => {
    boardDelete(id);
  };
  useEffect(() => {
    if (isSuccess) {
      const nextBoard = boardList.find((board) => board._id !== id);
      if (nextBoard) {
        navigate(`/boards/${nextBoard._id}`);
      } else {
        navigate(`/`);
      }
    }
  }, [isSuccess]);

  return (
    <nav className="flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="h-8" />{" "}
        <span className="font-bold text-xl text-gray-600">{t("T O D O")}</span>
      </div>
      {id && singleBoard && (
        <div className="flex justify-between">
          <button
            className="text-3xl focus:outline-none text-amber-200"
            onClick={favouriteBoard}
          >
            {id && singleBoard?.favourite ? <AiFillStar /> : <AiOutlineStar />}
          </button>
          <button
            className="text-2xl focus:outline-none text-red-400"
            onClick={deleteBoard}
          >
            <FaTrash />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
