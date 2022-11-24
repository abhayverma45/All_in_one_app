import React, { useState, useEffect } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Tab from "./components/tab";
import "./index.css";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="preloader">
          <HashLoader
            color={"#284ca9"}
            loading={loading}
            size={45}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Tab />
        </>
      )}
    </div>
  );
}

export default App;
