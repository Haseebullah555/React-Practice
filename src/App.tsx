import ConditionalRenderingWithLists from "./assets/components/ConditionalRenderingWithLists";
import VisitTracker from "./assets/components/Day11HomeWork";
import EvenOdd from "./assets/components/Day11MiniPractice";
import TitleChanger from "./assets/components/Day12FirstMiniPractice";
import Day12HomeWork from "./assets/components/Day12HomeWork";
import OnlineStatus from "./assets/components/Day12SecondMiniPractice";
import DayTenHomeWork from "./assets/components/DayTenHomeWork";
import HighNumber from "./assets/components/HighNumber";
import ToggleText from "./assets/components/ToggleText";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <ToggleText />
      <ConditionalRenderingWithLists />
      <HighNumber />
      <DayTenHomeWork />
      <EvenOdd />
      <VisitTracker />
      <TitleChanger />
      <OnlineStatus />
      <Day12HomeWork />
    </div>
  )
}
