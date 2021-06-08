import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";



function App() {
  return (
    // 두개를 동시에 렌더링 하기 위해선 <>를 사용
    <>
      {/* github page를 위하여 HashRouter를 사용 */}
      {/* BrowserRouter는 #이 존재하지 않음 */}
      {/* <BrowserRouter></BrowserRouter> */}
      <HashRouter>
        <Route path="/" component={Navigation} />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
      {/* <footer></footer> */}
    </>
  );
}

export default App;