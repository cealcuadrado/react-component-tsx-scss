import style from "./App.module.scss";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="container my-2">
      <h2><i className="fab fa-react fa-fw"></i> React: Component App with TSX and SCSS</h2>
      <hr/>
      <Layout/>
    </div>
  );
}

export default App;
