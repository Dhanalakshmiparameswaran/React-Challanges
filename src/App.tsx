import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnBoard from "./onBoard"; 
import ShowText from "./components/ShowText";
import Stopwatch from "./components/StopWatch";
import ToDoList from "./components/ToDoList";
import ProgressBar from "./components/ProgressBar";
import FormData from "./components/FormData";
import MaxCount from "./components/MaxCount";
import Lazy from "./components/Lazy";
import withLazyLoad from "./components/LazyComponent/withLazyLoad";
import Navigate from "./components/Navigate";
import Result from "./components/NavigateComponent/Result";
import Student from "./components/URLComponent/Student";
import IdDisplay from "./components/URLComponent/IdDisplay";
import URLParameter from "./components/URLParameter";
import NotFound from "./components/catch";
import TaskList from "./components/Tasklist";
import UseWindowDiamentionDisaplay from "./components/UseWindowDiamentionDisaplay";
import FetchData from "./components/UseFetchData";
import Theme from "./components/Theme";
import ButtonRemover from "./components/ButtomRemove";
import FixTheme from "./components/FixTheme";
import UnNeccessaryCall from "./components/FunctionCall";
import CalculateFactorial from "./components/CalculationCall";
import CounterComponent from "./components/Rerender";

const Home = withLazyLoad(() => import("./components/LazyComponent/Home"));
const Newsletters = withLazyLoad(() => import("./components/LazyComponent/NewLetter"));
const Dashboard = withLazyLoad(() => import("./components/LazyComponent/DashBoard"));

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={< OnBoard/>} />
          <Route path="/ShowandHideText" element={<ShowText />} />
          <Route path="/StopWatch" element={<Stopwatch />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/ProgressBar" element={<ProgressBar />} />
          <Route path="/FormData" element={<FormData/>} />
          <Route path="/MaxCount" element={<MaxCount/>} />
          <Route path="/Lazy" element={<Lazy/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Newsletters" element={<Newsletters />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Navigate" element={<Navigate />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/URL" element={<URLParameter />} />
          <Route path="/Ram" element={<Student name="Ram" />} />
          <Route path="/ids/:id" element={<IdDisplay />} /> 
          <Route path="*" element={<NotFound />} />   
          <Route path="/PageButtom" element={<TaskList />} />  
          <Route path="/WindowDimensionsDisplay" element={<UseWindowDiamentionDisaplay />} />
          <Route path="/UseFetch" element={<FetchData />} /> 
          <Route path="/Theme" element={<Theme />} />  
          <Route path="/ButtonRemover" element={<ButtonRemover />} />   
          <Route path="/FixTheme" element={<FixTheme />} /> 
          <Route path="/UnNeccessaryCall" element={<UnNeccessaryCall />} />
          <Route path="/Calculation" element={<CalculateFactorial />} />    
          <Route path="/Rerender" element={<CounterComponent />} /> 
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
