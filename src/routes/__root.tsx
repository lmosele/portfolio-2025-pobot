import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '../App.css';
import { useSnapshot } from 'valtio';
import { state } from '../state';
import { useEffect } from 'react';

const sections = ["Intro", "Bio", "Projects", "Ask Me Anything"];

const Root = () => {
    const snap = useSnapshot(state, { sync: true })

    useEffect(() => {
        document.documentElement.className = state.darkmode ? 'dark-mode' : '';
    }, [snap.darkmode])

    return (<div className="app" >
        {/* Navigation bubbles */}
        <div className="navigation">
            <Link to="/">Home</Link>

            {sections.map((section, index) => (
                <button
                    key={index}
                    onClick={() => state.currentSection = index}
                    className={snap.currentSection === index ? 'active' : ''}
                >
                    {section}
                </button>
            ))}
            <button onClick={() => {
                state.darkmode = !state.darkmode;
                document.documentElement.classList.toggle('dark-mode', state.darkmode);
            }}>dark mode</button>
            <Link to="/about">About {snap.currentSection}</Link>
        </div>
        <Outlet />
    </div >)
}

export const Route = createRootRoute({
    component: Root
})