import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { storage } from "../firebase";
import ProgressBar from "@ramonak/react-progress-bar";

const UploadImage = ({ url, setUrl }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  return (
    <>
      <Row>
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>Upload</Button>
        <ProgressBar completed={progress} />
      </Row>
      {url && <img src={url} alt="" />}
    </>
  );
};

export default UploadImage;
