import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { useSnapshot } from 'valtio';
import { state } from '../state';
import { useEffect } from 'react';
import { GitHub, Grid, User, Zap } from 'react-feather';

import '../App.css';
import { IconHBDes } from '../assets/react-icons';
import styled from 'styled-components';
import { LinksRow, NavbarLinks, NavButton, Separator } from '../components/Styled';
import DarkModeToggle from '../components/DarkmodeToggle';




const Root = () => {
    const snap = useSnapshot(state, { sync: true })

    useEffect(() => {
        document.documentElement.className = state.darkmode ? 'dark-mode' : '';
    }, [snap.darkmode])

    return (<div className='container'>
        <header>
            <Link className='logo-container' to="/">
                <IconHBDes />
            </Link>
            <LinksRow>
                <NavbarLinks as='button'><Zap size={'16px'} />Pobot</NavbarLinks>
                <Separator />
                <DarkModeToggle initialState={snap.darkmode} onToggle={() => {
                    state.darkmode = !state.darkmode;
                    document.documentElement.classList.toggle('dark-mode', state.darkmode);
                }} />
            </LinksRow>
        </header>

        <aside>
            <NavbarLinks to="/" activeProps={{ className: 'active' }}><Grid /></NavbarLinks>
            <NavbarLinks to="/about" activeProps={{ className: 'active' }}><User /></NavbarLinks>
            <NavbarLinks as="a" target="_blank" href='https://www.github.com/lmosele' className='side-nav-link'><GitHub /></NavbarLinks>
        </aside>

        <main>
            <Outlet />
        </main>
    </div>)
}

export const Route = createRootRoute({
    component: Root
})