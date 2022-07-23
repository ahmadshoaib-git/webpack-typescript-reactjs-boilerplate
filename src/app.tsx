import "./assets/css/styles.css";
import svg from "./assets/svg/icon.svg";
import Image1 from "./assets/imgs/image1.jpg";
const App = () => {
  return (
    <div className="app">
      <img src={Image1} alt="Boilerplate Image" />
      <div>
        <span>React TypeScript Webpack Starter Template</span>
        <img src={svg} alt="Boilerplate Icon" />
      </div>
    </div>
  );
};

export default App;
