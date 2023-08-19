//External Lib Import
import { useTranslation } from "react-i18next";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

//Internal Lib Import
import { useEffect, useState } from "react";
import {
  useBoardDeleteMutation,
  useBoardListQuery,
} from "../redux/services/board.service";

const BoardList = () => {
  const { data: boardListData } = useBoardListQuery();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);
  const [boardDeleteId, setBoardDeleteId] = useState(null);
  const [boardDelete, { isSuccess }] = useBoardDeleteMutation();

  useEffect(() => {
    if (boardListData?.length) {
      const transform = boardListData?.reduce(
        (acc, cur) => {
          cur.favourite ? acc.favorites.push(cur) : acc.privates.push(cur);
          return acc;
        },
        { favorites: [], privates: [] }
      );
      setBoardList(transform);
    }
  }, [boardListData]);

  useEffect(() => {
    if (isSuccess) {
      const nextBoard = boardListData.find(
        (item) => item._id !== boardDeleteId
      );

      if (nextBoard) {
        navigate(`/boards/${nextBoard._id}`);
      } else {
        navigate(`/`);
      }
    }
  }, [isSuccess]);

  const boardDeleteHandle = (id) => {
    setBoardDeleteId(id);
    boardDelete(id);
  };

  return (
    <ul className="space-y-2 font-medium ml-2">
      {/* Favorite list  */}
      <li>
        <small className="text-gray-400">{t("favorite")}</small>
      </li>
      {boardList?.favorites?.map((board) => (
        <BoardItem
          board={board}
          key={board._id}
          boardDeleteHandle={boardDeleteHandle}
        />
      ))}

      {/* Private list  */}
      <li>
        <small className="text-gray-400">{t("private")}</small>
      </li>
      {boardList?.privates?.map((board) => (
        <BoardItem
          board={board}
          key={board._id}
          boardDeleteHandle={boardDeleteHandle}
        />
      ))}
    </ul>
  );
};

const BoardItem = ({ board, boardDeleteHandle }) => {
  return (
    <li className="group">
      <Link
        className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group"
        to={`/boards/${board._id}`}
      >
        {board.icon || <HiOutlineDocumentText />}
        <span className="ml-1">{board.title}</span>
        {/* action  */}
        <div className="hidden group-hover:flex ml-2">
          <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1">
            <FaEdit />
          </span>
          <span
            onClick={() => setIsModal(true)}
            className="rounded text-sm active:text-sky-600 hover:bg-white p-1"
          >
            <FaPlus />
          </span>
          <span
            className="rounded text-sm active:text-sky-600 hover:bg-white p-1 text-red-400"
            onClick={() => boardDeleteHandle(board._id)}
          >
            <FaTrash />
          </span>
        </div>
      </Link>
    </li>
  );
};

export default BoardList;
