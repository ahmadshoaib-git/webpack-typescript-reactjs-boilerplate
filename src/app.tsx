import "./assets/css/styles.css";
import svg from "./assets/svg/icon.svg";
import Image1 from "./assets/imgs/image1.jpg";
const App = () => {
  return (
    <div className="app">
      <div className="outer-img bounce-out-down">
        <img src={Image1} alt="Boilerplate Image" />
      </div>
      <div>
        <span>React TypeScript Webpack Starter Template</span>
        <img src={svg} alt="Boilerplate Icon" />
      </div>
      <div>{process.env.name}</div>
      <div>{process.env.NODE_ENV}</div>
    </div>
  );
};

export default App;
