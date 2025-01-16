import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { useSnapshot } from 'valtio';
import { state } from '../state';
import { useEffect } from 'react';
import { GitHub, Grid, Home, User, Zap } from 'react-feather';

import '../App.css';
import { IconHBDes } from '../assets/react-icons';
import { LinksRow, NavbarLinks, Separator } from '../components/Styled';
import DarkModeToggle from '../components/DarkmodeToggle';
import Chat from '../components/Chat';


const Root = () => {
    const snap = useSnapshot(state, { sync: true })

    useEffect(() => {
        document.documentElement.className = state.darkmode ? 'dark-mode' : '';
    }, [snap.darkmode])

    const handlePobot = () => {
        state.chatOpen = true
    }

    return (<div className='container'>
        <header>
            <Link className='logo-container' to="/">
                <IconHBDes />
            </Link>
            <LinksRow>
                <NavbarLinks as='button' onClick={handlePobot}><Zap size={'16px'} />Pobot</NavbarLinks>
                <Separator />
                <DarkModeToggle initialState={snap.darkmode} onToggle={() => {
                    state.darkmode = !state.darkmode;
                    document.documentElement.classList.toggle('dark-mode', state.darkmode);
                }} />
            </LinksRow>
        </header>

        <aside>
            <NavbarLinks aria-label="Home" to="/" activeProps={{ className: 'active' }}><Home /></NavbarLinks>
            <NavbarLinks aria-label="About Page" to="/about" activeProps={{ className: 'active' }}><User /></NavbarLinks>
            <NavbarLinks aria-label="Portfolio Page" to="/portfolio" activeProps={{ className: 'active' }}><Grid /></NavbarLinks>
            <NavbarLinks aria-label="Github Link" as="a" target="_blank" href='https://www.github.com/lmosele' className='side-nav-link'><GitHub /></NavbarLinks>
        </aside>

        <main>
            <Outlet />
            <Chat />
        </main>

    </div>)
}

export const Route = createRootRoute({
    component: Root
})