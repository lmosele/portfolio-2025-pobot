import { useState, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: scroll;
`;

const Panel = styled.div`
  position: absolute;
  width: 500px;
  color: white;
  min-height: 50vh;
  height: 500px;
  max-height: 70vh;
  margin: 0 auto;
  margin-top: 30px;
  opacity: 0.6;
  border-radius: 6px 0 6px 6px;
  background: var(--core-container-color);
  border: 1px solid var(--hubspot-secondary-color);
  transition: width 0.5s ease-in-out;
  &.expanded {
    width: 90%;
    max-width: 1024px;
    transition: width 0.5s ease-in-out;
  }
  &.isFocused {
    transition: opacity 0.3s ease-in;
    opacity: 1;
    z-index: 1000;
  }
  @media only screen and (max-width: 624px) {
    width: 80%;
  }
`;

const Close = styled.div`
  clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 12px;
  padding: 5px 0 5px 8px;
  content: "";
  width: 80px;
  background-color: rgba(244, 162, 97, 0.6);
  z-index: -10;
  opacity: 0.3;
  transition: all 0.2s ease-in;
  &:hover {
    cursor: pointer;
    opacity: 1;
    background-color: rgba(244, 162, 97, 0.7);
    transition: all 0.2s ease-in;
  }
`;

const Handle = styled.div`
  clip-path: polygon(80% 0%, 100% 0, 100% 80%, 80% 100%);
  position: absolute;
  top: 0;
  right: -30px;
  content: "";
  width: 140px;
  height: 100px;
  background-color: rgba(244, 162, 97, 0.6);
  z-index: -10;
  transition: all 0.2s ease-in;
  &:active {
    cursor: move;
  }
  &:hover {
    cursor: grab;
    height: 110px;
    background-color: rgba(244, 162, 97, 0.7);
    transition: all 0.2s ease-in;
    &:after {
      content: "Click me to drag"; /* Tooltip text */
      position: absolute;
      white-space: nowrap; /* Ensures the tooltip text does not wrap */
      width: auto;
      bottom: 100%; /* Position the tooltip above the element */
      left: 50%; /* Start the tooltip in the center of the element */
      transform: translateX(
        -50%
      ); /* Center the tooltip exactly above the element */
      background-color: black; /* Background color of the tooltip */
      color: white; /* Text color */
      text-align: center;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      visibility: hidden; /* Hide tooltip by default */
      opacity: 0;
      transition: opacity 0.3s, visibility 0.3s;
    }
  }
`;

const Floater = ({
    children,
    id,
    onClose,
    dismissable = true,
}) => {

    useEffect(() => {
        const UI = document.getElementById(id);
        const draggable = new window.PlainDraggable(UI, {
            handle: document.querySelector(`#handle-${id}`),
        });
    }, []);

    const handleClose = () => {
        onClose(id);
    };

    return (
        <Panel id={id}>
           
            <Handle id={`handle-${id}`} draggable="true" title="Move Panel" />
            {dismissable && (
                <Close onClick={handleClose} title="Close Panel">
                    Dismiss
                </Close>
            )}

            <Container>{children}</Container>
        </Panel>
    );
};

export default Floater;