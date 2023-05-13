import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import News from "./components/News";
const App = () => {
  const pagesize = "20";
  const apikey = `b57d4863425e4bd4b43d441ed27f0d86`;
  const country = "us";
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apikey={apikey}
                key="general"
                pagesize={pagesize}
                country={country}
                category="general"
                head="Top"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apikey={apikey}
                key="business"
                pagesize={pagesize}
                country={country}
                category="business"
                head="Business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apikey={apikey}
                key="entertainment"
                pagesize={pagesize}
                country={country}
                category="entertainment"
                head="Entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apikey={apikey}
                key="health"
                pagesize={pagesize}
                country={country}
                category="health"
                head="Health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apikey={apikey}
                key="science"
                pagesize={pagesize}
                country={country}
                category="science"
                head="Science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apikey={apikey}
                key="sports"
                pagesize={pagesize}
                country={country}
                category="sports"
                head="Sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apikey={apikey}
                key="technology"
                pagesize={pagesize}
                country={country}
                category="technology"
                head="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
