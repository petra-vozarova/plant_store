import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUserDocumentFromAuth, userAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";

import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop-component";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";

const App= () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const unsubscribe = userAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    },[])

  return (
    <Routes>
      <Route pat='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<Authentication/>} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
