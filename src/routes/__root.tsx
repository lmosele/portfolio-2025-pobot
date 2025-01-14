import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../App.css';

const sections = ["Intro", "Bio", "Projects", "Ask Me Anything"];


export const Route = createRootRoute({
    component: () => (
        <div className="app" >
            {/* Navigation bubbles */}
            <div className="navigation">
                {sections.map((section, index) => (
                    <button
                        key={index}
                    // onClick={() => scrollToSection(index)}
                    // className={currentSection === index ? 'active' : ''}
                    >
                        {section}
                    </button>
                ))}
                <button onClick={() => document.documentElement.classList.toggle('dark-mode')}>dark mode</button>
                <Link to="/about">About</Link>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </div >
    ),
})