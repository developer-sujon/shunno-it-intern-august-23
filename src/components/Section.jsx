//External Lib Import
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { FaPlus, FaTrash } from "react-icons/fa";

//Internal Lib Import
import {
  useBoardSectionCreateTodoMutation,
  useBoardSectionDeleteMutation,
  useBoardSectionTaskDeleteMutation,
  useBoardSectionUpdateMutation,
  useBoardSingleQuery,
  useBoardTaskUpdateMutation,
} from "../redux/services/board.service";
import RightSideModal from "./RightSideModal";
import { useState } from "react";

const Section = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // right sidebar modal state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  //click by show id on modal
  const [modalId, setModalId] = useState("");

  const { data: singleBoard } = useBoardSingleQuery(id, {
    skip: !id,
  });
  const [boardSectionCreateTodo] = useBoardSectionCreateTodoMutation();
  const [boardSectionUpdate] = useBoardSectionUpdateMutation();
  const [boardTaskUpdate] = useBoardTaskUpdateMutation();
  const [boardSectionDelete] = useBoardSectionDeleteMutation();
  const [boardSectionTaskDelete] = useBoardSectionTaskDeleteMutation();

  let timer;
  const waitTime = 1000;

  const updateSectionTitle = (e, sectionId) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      boardSectionUpdate({
        boardId: id,
        sectionId,
        postBody: { title: e.target.value },
      });
    }, waitTime);
  };

  const updateTaskTitle = (sectionId, taskId) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      boardTaskUpdate({
        boardId: id,
        sectionId,
        taskId,
        postBody: { title: "Event fired" },
      });
    }, waitTime);
    setSidebarOpen(true);
    setModalId(taskId);
  };

  const deleteSection = (sectionId) => {
    boardSectionDelete({ id, sectionId });
  };

  const deleteTaskSection = (sectionId, taskId) => {
    boardSectionTaskDelete({ id, sectionId, taskId });
  };

  return (
    <>
      <div
        id="scrollContainer"
        className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start mb-8"
      >
        {singleBoard?.sections?.map((section) => (
          <div
            key={section?._id}
            className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 p-2 mb-2 bg-gray-50 rounded-lg shadow"
          >
            <div className="font-bold bg-gray-100 my-2 p-1 group flex gap-1 items-center capitalize">
              <input
                type="text"
                defaultValue={section?.title || t("Untitled")}
                className="outline-none flex-1 capitalize pl-1 bg-transparent border-l-4 border-gray-300"
                onChange={(e) => updateSectionTitle(e, section?._id)}
              />
              <div className="gap-1 bg-gray-100  hidden group-hover:flex">
                <button
                  className="flex items-center gap-2 text-sm text-sky-500 p-1 hover:bg-gray-200 rounded bg-gray-50"
                  title="Add Todo"
                  onClick={() =>
                    boardSectionCreateTodo({
                      id,
                      postBody: { sectionId: section?._id },
                    })
                  }
                >
                  <FaPlus />
                </button>

                <button
                  onClick={() => deleteSection(section?._id)}
                  title="Delete Todo"
                  className="text-red-50 bg-red-300  text-sm p-1 rounded hover:bg-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>

            {/* Task list  */}
            <ul>
              {section?.tasks?.map((task) => (
                <>
                  <li
                    onClick={() => updateTaskTitle(section?._id, task?.id)}
                    className="cursor-pointer group bg-white hover:bg-gray-100 flex justify-between items-center rounded-lg pl-2 border-[.1px] py-2 m-1"
                  >
                    <span>{task.title || t("untitled")}</span>

                    <button
                      onClick={() => deleteTaskSection(section?._id, task?._id)}
                      className="text-red-50 mr-2 hidden group-hover:inline bg-red-300 p-1 ml-2 text-xs rounded hover:bg-red-500"
                    >
                      <FaTrash />
                    </button>
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}
        <RightSideModal
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          modalId={modalId}
        />
      </div>
    </>
  );
};

export default Section;
