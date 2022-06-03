import components from "./components/index";
import pages from "./pages/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="appearance-none text-white ">
        <components.Navigation></components.Navigation>
        <pages.Timeline></pages.Timeline>
      </div>
    </BrowserRouter>
  );
}

export default App;
