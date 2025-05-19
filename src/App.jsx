import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebShareAPI from "ui/dev/Share";
import MainPage from "ui/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: "100%" }}>
              <MainPage />
            </div>
          }
        />
        <Route
          path="/webshareapi"
          element={
            <div style={{ width: "100%" }}>
              <WebShareAPI />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
