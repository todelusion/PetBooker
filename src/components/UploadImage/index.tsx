import React, { ChangeEvent, useEffect, useState } from "react";

function UploadImage(): JSX.Element {
  const [imageFile, setImageFile] = useState<File[]>();

  const [previewImage, setPreviewImage] = useState<string[]>();

  // 接收上傳圖片
  const handleSetImage = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    if (files === null) return;
    if (
      files.length > 4 ||
      (imageFile != null ? imageFile.length + files.length : 0) > 4
    ) {
      alert("照片數量不可大於4張");
      return;
    }
    console.log(files);

    // 建立postRequest的FormData

    const imageFormData =
      imageFile != null
        ? [...imageFile, ...files]
        : Object.values(files).map((item) => item);
    setImageFile(imageFormData);
    // 建立previewImage
    const previewData = imageFormData?.map((item) => URL.createObjectURL(item));
    setPreviewImage(previewData);
    // eslint-disable-next-line no-param-reassign
    event.target.value = "";
  };

  // 點擊刪除previewImg&imageflie
  const deleteImg = (img: string, index: number): void => {
    const previewData = previewImage?.filter((item) => item !== img);
    const imagefile = imageFile?.filter(
      (_item, fileindex) => fileindex !== index
    );
    setPreviewImage(previewData);
    setImageFile(imagefile);
  };

  useEffect(() => {
    console.log(imageFile);
    console.log(previewImage);
  }, [imageFile, previewImage]);

  return (
    <div>
      <label
        htmlFor="upload"
        className=" mt-4 w-8 cursor-pointer rounded-md bg-indigo-200 p-2 text-white"
      >
        File
        <input
          multiple
          id="upload"
          type="file"
          name="image"
          placeholder="image"
          onChange={handleSetImage}
          accept="image/*"
          hidden
        />
      </label>
      <span className="flex ">
        {previewImage !== null && previewImage !== undefined
          ? previewImage.map((item, index) => (
              <button onClick={() => deleteImg(item, index)} type="button">
                <img src={item} alt="previewImage" className="h-20 w-20 " />
              </button>
            ))
          : ""}
      </span>
    </div>
  );
}
export default UploadImage;
