import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFromData } from "../../FormDataSlice/FormDAtaSlice";

const SubSectionPhotoGraph = () => {
  const [selectedImage, setSelectedImage] = useState({});
   const disptch = useDispatch()
   const  {FromData} = useSelector(state => state.FromGetData)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        setSelectedImage(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShow = () => {
    if (selectedImage) {
      disptch(GetFromData(selectedImage))
    } else {
      console.log("No image selected.");
    }
  };

  return (
    <div>
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br></br>
      <br></br>
      <button className="btn btn-primary" onClick={handleShow}>
        Update Profile
      </button>
    </div>
  );
};

export default SubSectionPhotoGraph;
