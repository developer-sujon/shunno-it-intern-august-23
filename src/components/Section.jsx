//External Lib Import
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

//Internal Lib Import
import {
  useBoardSectionCreateTodoMutation,
  useBoardSectionDeleteMutation,
  useBoardSectionTaskDeleteMutation,
  useBoardSectionUpdateMutation,
  useBoardSingleQuery,
  useBoardTaskUpdateMutation,
} from "../redux/services/board.service";

const Section = () => {
  const { id } = useParams();
  const { t } = useTranslation();

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
        postBody: { title: "e.target.value" },
      });
    }, waitTime);
  };

  const deleteSection = (sectionId) => {
    boardSectionDelete({ id, sectionId });
  };

  const deleteTaskSection = (sectionId, taskId) => {
    boardSectionTaskDelete({ id, sectionId, taskId });
  };

  return (
    <>
      {singleBoard?.sections?.map((section) => (
        <div
          key={section?._id}
          id="scrollContainer"
          className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start mb-8"
        >
          <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 p-2 bg-gray-50 rounded-lg">
            <h4 className="font-bold my-2 flex gap-2 items-center">
              <input
                type="text"
                defaultValue={section?.title || t("untitled")}
                className="outline-none"
                onChange={(e) => updateSectionTitle(e, section?._id)}
              />
              <button onClick={() => deleteSection(section?._id)}>
                delete
              </button>
            </h4>
            <button
              onClick={() =>
                boardSectionCreateTodo({
                  id,
                  postBody: { sectionId: section?._id },
                })
              }
            >
              Add todo
            </button>
            <ul>
              {section?.tasks?.map((task) => (
                <>
                  {" "}
                  <li onClick={() => updateTaskTitle(section?._id, task?.id)}>
                    {task.title || t("untitled")}
                  </li>
                  <button
                    onClick={() => deleteTaskSection(section?._id, task?._id)}
                  >
                    delete
                  </button>
                </>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Section;
