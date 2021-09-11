import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form";
import WeatherCard from "./Components/WeatherCard";
import ThemeToggle from "./Components/ThemeToggle";
import { useSelector } from "react-redux";
export default function App() {
  // Dark mode theme selector
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App Dark" : "App Light"}>
      <ThemeToggle />
      <Form />
      <WeatherCard />
    </div>
  );
}
