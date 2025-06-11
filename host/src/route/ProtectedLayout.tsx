import { useState } from 'react';
import Header from '../component/access-bar/Header';
import MenuBar from '../component/access-bar/MenuBar';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    return (
        <div className="main-container">
            <MenuBar isVisible={sidebarVisible} />
            
            <main className="content">
                <Header onHamburgerClick={()=>setSidebarVisible(!sidebarVisible)}/>
                <Outlet/>
            </main>
        </div>
  );
};

export default ProtectedLayout;
