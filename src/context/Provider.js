import { useState } from "react";
import MyContext from "."


const Provider = ({children})=>{

    const [count, setCount] = useState(0)

    const changeIncrease=()=>{
        setCount(count + 1)
    }

    const changeDecrease=()=>{
        setCount(count - 1)
    }




    return(
        <MyContext.Provider value={{count, changeDecrease, changeIncrease}}>
            {children}
        </MyContext.Provider>
    )

}

export default Provider;