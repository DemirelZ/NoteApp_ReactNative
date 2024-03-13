import { useState } from "react";
import MyContext from "."


const Provider = ({children})=>{

    const [notes, setNotes] = useState([
        {
          id: 1,
          title: 'Design Engineer',
          description: 'Bu birinci notun açıklaması',
          date: '12.25 PM',
        },
        {
          id: 2,
          title: 'FrontEnd Engineer',
          description: 'Bu ikinci notun açıklaması',
          date: '12.25 PM',
        },
        {
          id: 3,
          title: 'Data Engineer',
          description: 'Bu üçüncü notun açıklaması',
          date: '12.25 PM',
        },
        {
          id: 4,
          title: 'Tester',
          description: 'Bu dördüncü notun açıklaması',
          date: '12.25 PM',
        },
        {
          id: 5,
          title: 'Designer',
          description: 'Bu dördüncü notun açıklaması',
          date: '12.25 PM',
        },
        {
          id: 6,
          title: 'Client',
          description: 'Bu dördüncü notun açıklaması',
          date: '12.25 PM',
        },
      ])

    const [count, setCount] = useState(0)

    const changeIncrease=()=>{
        setCount(count + 1)
    }

    const changeDecrease=()=>{
        setCount(count - 1)
    }




    return(
        <MyContext.Provider value={{count, changeDecrease, changeIncrease, notes, setNotes}}>
            {children}
        </MyContext.Provider>
    )

}

export default Provider;