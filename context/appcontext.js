import { createContext, useContext, useState } from "react";

const AppContext = createContext()


export const Provider = ({children}) => {

const [started, setStarted] = useState(false)


const data = {
    started,
    setStarted
}
    return(
        <AppContext.Provider value={data}>
        {
            children
        }
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}