import components from "./components/index";
import pages from "./pages/index";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increament, decrement, getCount } from "./libs/count";

function App() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="appearance-none text-white ">
        <components.Navigation></components.Navigation>

        <div className=" text-center space-x-5 space-y-5 mt-5 mx-96 text-3xl rounded-xl">
          <h1>{count}</h1>
          <button
            className=" bg-slate-500 p-2 rounded-lg"
            onClick={() => dispatch(increament(count))}
          >
            Increase
          </button>
          <button
            className=" bg-slate-500 p-2 rounded-lg"
            onClick={() => dispatch(decrement(count))}
          >
            Decrease
          </button>
        </div>

        <pages.Timeline></pages.Timeline>
      </div>
    </BrowserRouter>
  );
}

export default App;
