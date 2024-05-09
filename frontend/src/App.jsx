import "./App.css";
import ItemProduct from "./components/product/item-product/item-product";
import Layout from "./layout/Layout";
import Routers from "./routes/Routers";

function App() {
  return (
    <>
      <Layout>
        <Routers />
      </Layout>
    </>
  );
}

export default App;
