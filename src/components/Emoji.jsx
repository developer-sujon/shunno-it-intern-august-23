import { useEffect, useState } from "react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Emoji = ({ singleBoard, changeEmoji }) => {
  const [selectedEmoji, setSelectedEmoji] = useState();
  const [isShowPicker, setIsShowPicker] = useState(false);

  useEffect(() => {
    setSelectedEmoji(singleBoard?.icon);
  }, [singleBoard]);

  const selectEmoji = (e) => {
    const sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    const emoji = String.fromCodePoint(...codesArray);
    setIsShowPicker(false);
    setSelectedEmoji(emoji);
    changeEmoji(emoji);
  };

  const showPicker = () => setIsShowPicker(!isShowPicker);

  return (
    <h1
      className="text-4xl flex gap-2 items-center text-gray-700 font-bold"
      onClick={showPicker}
      style={{ position: "relative" }}
    >
      <button>{selectedEmoji}</button>
      <div
        style={{
          display: isShowPicker ? "block" : "none",
          position: "absolute",
          top: "100%",
          zIndex: "9999",
        }}
      >
        <Picker
          data={data}
          onEmojiSelect={selectEmoji}
          previewEmoji={"point_up"}
        />
      </div>
    </h1>
  );
};

export default Emoji;
