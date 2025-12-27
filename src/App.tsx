import ConditionalRenderingWithLists from "./assets/components/ConditionalRenderingWithLists";
import DayTenHomeWork from "./assets/components/DayTenHomeWork";
import HighNumber from "./assets/components/HighNumber";
import ToggleText from "./assets/components/ToggleText";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <ToggleText/>
      <ConditionalRenderingWithLists/>
      <HighNumber/>
      <DayTenHomeWork/>
    </div>
  )
}
