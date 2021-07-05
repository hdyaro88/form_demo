import { useState } from "react";
import styles from "./Image_Holder.module.css";
import React from "react";
import { app } from "../../../base";
import { useDispatch } from "react-redux";
import { campaignDataActions, statusActions } from "../../../store/store";
const ImageHolder = React.memo((props) => {
  const [Image, setImage] = useState(null);
  const [File_Local, setFile_Local] = useState(null);
  const dispatch = useDispatch();
  const fileHandlder = async (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      setFile_Local(URL.createObjectURL(file));
    }
    dispatch(statusActions.imageUploadingStatus("pending"));
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const FileURL = await fileRef.getDownloadURL();
    dispatch(statusActions.imageUploadingStatus("completed"));
    dispatch(
      campaignDataActions.addrefrenceData({ name: file.name, link: FileURL })
    );
  };

  const removeFileHandler = async () => {
    setFile_Local(null);
    if (Image === null) {
      return;
    }
    dispatch(campaignDataActions.deleterefrenceData(Image.name));
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(Image.name);
    await fileRef.delete();
  };
  return (
    <div className={styles.img_up}>
      <input
        type="file"
        id={props.id}
        name={`reference${props.id}`}
        onChange={fileHandlder}
        accept=".mp4 , .jpeg , .png"
        hidden
      />
      <div className={styles.image}>
        {File_Local &&
          (Image.name.includes(".jpeg") || Image.name.includes(".png")) && (
            <img src={File_Local} alt={`img ${props.id}`} />
          )}
        {File_Local && Image.name.includes(".mp4") && (
          <video src={File_Local} controls></video>
        )}
      </div>
      <label
        className={styles.upload}
        htmlFor={props.id}
        onChange={fileHandlder}
      >
        upload
      </label>
      <label className={styles.upload} onClick={removeFileHandler}>
        remove
      </label>
    </div>
  );
});
export default ImageHolder;
