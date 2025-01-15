import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, RoundedBox } from '@react-three/drei'
import { StyledButton, StyledH2 } from './Styled'
import { Link, useNavigate } from '@tanstack/react-router'

function Cards({ seed, ...props }) {
    const group = useRef();

    const navigate = useNavigate()

    const handleClick = (destination: string) => navigate({ to: destination, search: true })

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // borrowed from three js docs
        // group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / seed, 0.1);
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / seed, 0.1);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / (seed / 10))) / 2, 0.1);
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <RoundedBox
                args={[6, 10, 0.2]} // Width, height, depth
                radius={0.02} // Border radius
            >
                <meshStandardMaterial color="#eee" />
            </RoundedBox>
            <Html position={[0, 0, 0.2]} transform >
                <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                    <StyledH2>Sprout Social</StyledH2>
                    <StyledButton onClick={() => handleClick('sprout')}>See More</StyledButton>
                    {/* <Link to="/sprout">Sprout Social</Link> */}
                </div>
            </Html>
        </group>
    );
}

export default Cards;