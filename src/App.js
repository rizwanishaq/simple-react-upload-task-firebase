import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container className="mb-3">
        <CreateNote />
      </Container>
    </>
  );
}

export default App;
