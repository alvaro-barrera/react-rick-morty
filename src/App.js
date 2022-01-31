import "./App.css";
import { HomeComponent } from "./Components/HomeComponent/HomeComponent";
import { RequestProvider } from "./requestContainer";

function App() {
  return (
    <RequestProvider>
      <HomeComponent />
    </RequestProvider>
  );
}

export default App;
