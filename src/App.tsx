import { ToastContainer } from "react-toastify";
import ConditionalRenderingWithLists from "./assets/components/ConditionalRenderingWithLists";
import VisitTracker from "./assets/components/Day11HomeWork";
import EvenOdd from "./assets/components/Day11MiniPractice";
import TitleChanger from "./assets/components/Day12FirstMiniPractice";
import Day12HomeWork from "./assets/components/Day12HomeWork";
import OnlineStatus from "./assets/components/Day12SecondMiniPractice";
import UserList from "./assets/components/Day13FirstPractice";
import Post from "./assets/components/Day13HomeWork";
import RegisterForm from "./assets/components/Day14HomeWork";
import CreatePost from "./assets/components/Day14Practice";
import DayTenHomeWork from "./assets/components/DayTenHomeWork";
import HighNumber from "./assets/components/HighNumber";
import "bootstrap/dist/css/bootstrap.min.css";
import MainApp from "./assets/components/Day15/MainApp";


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-dark">
      <ToastContainer/>
      {/* <ToggleText />
      <ConditionalRenderingWithLists />
      <HighNumber />
      <DayTenHomeWork />
      <EvenOdd />
      <VisitTracker />
      <TitleChanger />
      <OnlineStatus />
      <Day12HomeWork /> */}
      {/* <UserList/>
      <Post/>
      <CreatePost/> */}
      {/* <RegisterForm/> */}
      <MainApp/>
    </div>
  )
}
