import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
