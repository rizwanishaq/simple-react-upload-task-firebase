import "./App.css";

import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import GetData from "./components/GetData";

function App() {
  return (
    <>
      <Header />
      <Container className="mb-3">
        <CreateNote />
        <GetData />
      </Container>
    </>
  );
}

export default App;
