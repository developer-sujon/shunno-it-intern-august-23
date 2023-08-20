//External Lib Import
import { useParams } from "react-router-dom";

//Internal Lib Import
import Emoji from "../../components/Emoji";
import Section from "../../components/Section";
import {
  useBoardSectionCreateMutation,
  useBoardSingleQuery,
  useBoardUpdateMutation,
} from "../../redux/services/board.service";
import { FaPlus } from "react-icons/fa";

const SingleBoard = () => {
  const { id } = useParams();
  const [boardSectionCreate] = useBoardSectionCreateMutation();

  const { data: singleBoard } = useBoardSingleQuery(id, {
    skip: !id,
  });

  const [boardUpdate] = useBoardUpdateMutation();

  const changeEmoji = (emoji) => {
    boardUpdate({
      id,
      postBody: {
        icon: emoji,
      },
    });
  };

  let timer;
  const waitTime = 1000;

  const updateTitle = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      boardUpdate({
        id,
        postBody: {
          title: e.target.value,
        },
      });
    }, waitTime);
  };

  const updateDescription = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      boardUpdate({
        id,
        postBody: {
          description: e.target.value,
        },
      });
    }, waitTime);
  };

  return (
    <>
      <div className="p-2 flex-col rounded max-w-4xl flex  mx-auto my-5 min-h-screen">
        <Emoji singleBoard={singleBoard} changeEmoji={changeEmoji} />

        <div style={{ display: "none", top: "100%", zIndex: 9999 }}>
          <div>
            <em-emoji-picker />
          </div>
        </div>
        <h2 className="text-4xl mb-5">
          <input
            type="text"
            className="debounce_input outline-none"
            defaultValue={singleBoard?.title}
            onChange={updateTitle}
          />
        </h2>
        <p>
          <textarea
            className="debounce_input_textarea outline-none	resize-none h-[50px] overflow-hidden w-full border-0;
            "
            defaultValue={singleBoard?.description}
            onChange={updateDescription}
          />
        </p>
        <button
          onClick={() => boardSectionCreate(singleBoard?._id)}
          className="text-start flex items-center gap-2 p-1 text-red-500 rounded-lg  group w-full focus:outline-none active:bg-white"
        >
          <FaPlus /> Add section
        </button>
        <span className="h-[.1px] w-full bg-gray-600 mb-3" />
        <div className="d-flex" />

        <Section />
      </div>
    </>
  );
};

export default SingleBoard;
