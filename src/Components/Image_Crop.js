import React, {  useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageCrop = () => {
  const [image, setImage] = useState("");
  const cropImage = useRef("");
  const cropperInstance = useRef();
  const [final, setFinal] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (cropperInstance.current) {
      cropImage.current = cropperInstance.current
        .getCroppedCanvas()
        .toDataURL();
      setFinal(cropImage.current);
    }
    console.log("This is the Croped Image", cropImage.current);
  };

  return (
    <>
      <div className="w-[100%] text-center text-[25px]">Image Cropper</div>
      <div className="flex gap-5 space-between w-[full] mb-[5px]">
        <input
          type="file"
          onChange={onChange}
          className="bg-red-200 rounded p-[8px] w-[50%]"
        />
        <button onClick={getCropData} className="bg-red-200 rounded p-[8px]">
          Crop Image
        </button>
      </div>
      <div className="flex gap-5 space-between">
        <Cropper
          className="h-[500px] w-[50%]"
          initialAspectRatio={1}
          src={image}
          background={false}
          responsive={true}
          onInitialized={(instance) => {
            cropperInstance.current = instance;
          }}
          zoomable={false}
        />
        {final && (
          <img
            src={final}
            alt="croped "
            className="h-[400px] w-[30%]"
          />
        )}
      </div>
    </>
  );
};

export default ImageCrop;