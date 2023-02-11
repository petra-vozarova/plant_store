import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop-component";


const App= () => {
  return (
    <Routes>
      <Route pat='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='/shop/*' element={<Shop />} />
      </Route>

    </Routes>
  );
}

export default App;