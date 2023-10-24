import {createContext, useContext, useState} from "react";
const CounterContext = createContext()

export const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <CounterContext.Provider value={{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('useCounter должен использоваться с CounterProvider')
    }
    return context
}
