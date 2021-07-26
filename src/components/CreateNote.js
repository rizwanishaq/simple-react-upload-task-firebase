import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import { notesRef } from "../firebase";

import { useForm } from "react-hook-form";
import UploadImage from "./UploadImage";

const CreateNote = () => {
  const { register, handleSubmit } = useForm();
  const [url, setUrl] = useState("");

  const onSubmit = (data) => {
    const item = {
      data,
    };

    notesRef.push(item);
  };

  return (
    <Container>
      <Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
        </form>
      </Row>
      <UploadImage url={url} setUrl={setUrl} />
    </Container>
  );
};

export default CreateNote;
