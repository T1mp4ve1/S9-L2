import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCustomNav from "./components/MyCustomNav";
import MyCustomFooter from "./components/MyCustomFooter";
import MyCustomAlert from "./components/MyCustomAlert";
import MyAllTheBooks from "./components/MyAllTheBooks";

import fantasyBooks from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import horrorBooks from "./books/horror.json";
import romanceBooks from "./books/romance.json";
import scifiBooks from "./books/scifi.json";

function App() {
  const [selectedBooks, setSelectedBooks] = useState(fantasyBooks);
  return (
    <>
      <MyCustomNav />
      <MyCustomAlert />

      <div className="text-center my-3">
        <button onClick={() => setSelectedBooks(fantasyBooks)}>Fantasy</button>
        <button onClick={() => setSelectedBooks(historyBooks)}>History</button>
        <button onClick={() => setSelectedBooks(horrorBooks)}>Horror</button>
        <button onClick={() => setSelectedBooks(romanceBooks)}>Romance</button>
        <button onClick={() => setSelectedBooks(scifiBooks)}>Sci-Fi</button>
      </div>

      <MyAllTheBooks library={selectedBooks} />
      <MyCustomFooter />
    </>
  );
}

export default App;
