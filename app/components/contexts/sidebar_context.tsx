'use client'
import React, { createContext, ReactNode, useState } from 'react'

interface Props {
    children?: ReactNode | ReactNode[];
}

const SidebarContext = createContext({
    isOpen: true,
    toggleMenu: ()=>{},
});

const SidebarProvider = ({ children } : Props) => {
    const [isOpen, setOpen] = useState(true);

    const toggleMenu = () => {
        setOpen(prev => !prev)
    }

    return (
        <SidebarContext.Provider value={{ isOpen, toggleMenu }}>
            {children}
        </SidebarContext.Provider>
    );
}

export { SidebarContext, SidebarProvider };