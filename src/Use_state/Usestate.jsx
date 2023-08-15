import { useState } from "react";


function Usestate() {
   const [num, setNum] = useState(1);
   console.log(num);

   return (
      <div>
         <h1>{num}</h1>
         <button onClick={() => setNum(num + 1)}>+</button>
      </div>
   );
}

export default Usestate;