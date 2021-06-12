import React, { createContext, useState, useContext } from 'react'

interface PopUpContext {
    isOpen: boolean
    openPopUp(): void
    closePopUp(): void
}

const PopUpContext = createContext<PopUpContext>({} as PopUpContext)

const PopUpProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openPopUp = () => {
        setIsOpen(true)
    }

    const closePopUp = () => {
        setIsOpen(false)
    }

    return(
        <PopUpContext.Provider value={{ isOpen, openPopUp, closePopUp }}>
            {children}
        </PopUpContext.Provider>
    )
}

function useHelpPopUp(): PopUpContext  {
    const context = useContext(PopUpContext)
    return context
}

export { PopUpProvider, useHelpPopUp }
