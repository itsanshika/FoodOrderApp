import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const [shown,setshown]=useState(false);

 function showHandler()
 {
   setshown(true);
 };

 function hideHandler()
 {
   setshown(false);
 };



  return (
    <div>
      {shown && <Cart onCartShow={hideHandler}/>}  
      <Header  onNoCardShown={showHandler}/>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
