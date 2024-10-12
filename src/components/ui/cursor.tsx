import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [clicking, setClicking] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);

  // Handle cursor movement and mouse events
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => {
      setClicking(true);
    };

    const handleMouseUp = () => {
      setClicking(false);
    };

    const handleMouseOverLink = () => {
      setHovering(true);
    };

    const handleMouseOutLink = () => {
      setHovering(false);
    };

    // Attach mouse event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Handle hover events on links and buttons
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', handleMouseOverLink);
      el.addEventListener('mouseout', handleMouseOutLink);
    });

    return () => {
      // Cleanup event listeners on unmount
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOverLink);
        el.removeEventListener('mouseout', handleMouseOutLink);
      });
    };
  }, []);

  // Inline styles for the custom cursor
  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    width: '10px', // Change size as needed
    height: '10px', // Change size as needed
    borderRadius: '50%',
    backgroundColor: clicking
      ? 'rgb(26, 117, 49,0.5)'
      : hovering
      ? 'rgb(26, 117, 49,0.5)'
      : 'rgb(239, 232, 14,0.5)',
    pointerEvents: 'none', // Prevents cursor from interfering with mouse events
    transition: 'transform 0.2s, background-color 0.6s',
    transform: `translate(-50%, -50%) scale(${clicking ? 2 : 1})`,
    zIndex: 9999, // Ensure it is above other elements
  };

  return <div style={{ ...cursorStyle, left: position.x, top: position.y }} />;
};

export default CustomCursor;
