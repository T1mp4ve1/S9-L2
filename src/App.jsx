import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCustomNav from "./components/MyCustomNav";
import MyCustomFooter from "./components/MyCustomFooter";
import MyCustomAlert from "./components/MyCustomAlert";
import MyAllTheBooks from "./components/MyAllTheBooks";

function App() {
  return (
    <>
      <MyCustomNav />
      <MyCustomAlert />
      <MyAllTheBooks />
      <MyCustomFooter />
    </>
  );
}

export default App;
