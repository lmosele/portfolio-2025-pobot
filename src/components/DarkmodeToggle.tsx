import React, { useState } from 'react'
import { Moon, Sun } from 'react-feather'
import styled from 'styled-components'

const ToggleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`
const ToggleButton = styled.button`
  width: 40px;
  height: 25px;
  border-radius: 15.5px;
  position: relative;
  transition: background-color 0.3s ease;
  background-color: #F57722; // need to figure out why vars dont work here

  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease; 
    transform: translateX(0);

  }
  &.dark-mode {
    background-color: rgb(80, 110, 144);
    &::after {
      transform: translateX(20px);
    }
  }
`


export default function DarkModeToggle({ initialState = false, onToggle }) {
  const [isOn, setIsOn] = useState(initialState)

  const handleToggle = () => {
    const newState = !isOn
    setIsOn(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  return (
    <ToggleWrapper>
      {isOn ? <Moon /> : <Sun />}
      <ToggleButton
        aria-label='Dark Mode Toggle'
        className={isOn ? 'dark-mode' : ''}
        onClick={handleToggle}
        role="switch"
        aria-checked={isOn}
      />
    </ToggleWrapper>
  )
}

