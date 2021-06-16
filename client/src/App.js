import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import Navi from "./components/Navi/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <DashBoard />
      </Container>
    </div>
  );
}

export default App;
