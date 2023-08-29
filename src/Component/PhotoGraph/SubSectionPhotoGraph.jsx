import React, { useState } from "react";

const SubSectionPhotoGraph = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
      console.log("Base64 Image Data:", selectedImage);
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
