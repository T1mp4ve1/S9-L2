import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCustomNav from "./components/MyCustomNav";
import MyCustomFooter from "./components/MyCustomFooter";
import MyCustomAlert from "./components/MyCustomAlert";

function App() {
  return (
    <>
      <MyCustomNav />
      <MyCustomAlert />
      <MyCustomFooter />
    </>
  );
}

export default App;
