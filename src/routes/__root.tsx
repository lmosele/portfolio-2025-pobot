import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { useSnapshot } from 'valtio';
import { state } from '../state';
import { useEffect } from 'react';
import { Camera, GitHub, Grid } from 'react-feather';

import '../App.css';
import { IconHBDes } from '../assets/react-icons';
import styled from 'styled-components';


// const sections = ["Intro", "Bio", "Projects", "Ask Me Anything"];

// const Root = () => {
//     const snap = useSnapshot(state, { sync: true })

//     useEffect(() => {
//         document.documentElement.className = state.darkmode ? 'dark-mode' : '';
//     }, [snap.darkmode])

//     return (<div className="app" >
//         {/* Navigation bubbles */}
//         <div className="navigation">
//             <Link to="/">Home</Link>

//             {sections.map((section, index) => (
//                 <button
//                     key={index}
//                     onClick={() => state.currentSection = index}
//                     className={snap.currentSection === index ? 'active' : ''}
//                 >
//                     {section}
//                 </button>
//             ))}
//             <button onClick={() => {
//                 state.darkmode = !state.darkmode;
//                 document.documentElement.classList.toggle('dark-mode', state.darkmode);
//             }}>dark mode</button>
//             <Link to="/about">About {snap.currentSection}</Link>
//         </div>
//         <Outlet />
//     </div >)
// }

// export const Route = createRootRoute({
//     component: Root
// })

const NavButton = styled(Link)`
    &:hover {
        background-color: --;
    }
`


const sections = ["Intro", "Bio", "Projects", "Ask Me Anything"];

const Root = () => {
    const snap = useSnapshot(state, { sync: true })

    useEffect(() => {
        document.documentElement.className = state.darkmode ? 'dark-mode' : '';
    }, [snap.darkmode])

    return (<div className='container'>
        <header>
            <button className='logo-container'>
                <IconHBDes />
            </button>
        </header>

        <aside>
            <NavButton to="/" className='side-nav-link' activeProps={{ className: 'side-nav-link-active' }}><Grid /></NavButton>
            <NavButton to="/about" className='side-nav-link' activeProps={{ className: 'side-nav-link-active' }}><GitHub /></NavButton>
        </aside>

        <main>
            <Outlet />
        </main>
    </div>)
}

export const Route = createRootRoute({
    component: Root
})