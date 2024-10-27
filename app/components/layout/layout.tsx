import React, { ReactNode } from 'react'
import Header from '@/app/components/header/header'
import Sidebar from '@/app/components/sidebar/sidebar'
import { SidebarProvider } from '../contexts/sidebar_context';

interface Props {
  children?: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className='flex flex-col justify-start h-screen w-full overflow-hidden'>
        <Header></Header>
        <div className='flex flex-row justify-start h-full w-full overflow-hidden'>
          <Sidebar>{children}</Sidebar>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Layout
