import React, { useState } from "react";
import { Button, Row, Container, Image } from "react-bootstrap";
import { notesRef, storage } from "../firebase";
import ProgressBar from "@ramonak/react-progress-bar";

const CreateNote = () => {
  const [note, setNote] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
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

  const createnote = (e) => {
    e.preventDefault();

    const item = {
      task: note,
      done: false,
      another: "anythin",
      url: url,
    };

    notesRef.push(item);
    setNote("");
    setUrl("");
    setProgress(0);
  };

  return (
    <Container>
      <Row>
        <form onSubmit={createnote}>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="create a note"
          />
          <Button onClick={createnote}>Add a note</Button>
        </form>
      </Row>
      <Row>
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>Upload</Button>
        <ProgressBar completed={progress} />
      </Row>
      <Row>
        <Image src={url} xs={6} md={4} roundedCircle fluid />
      </Row>
    </Container>
  );
};

export default CreateNote;
