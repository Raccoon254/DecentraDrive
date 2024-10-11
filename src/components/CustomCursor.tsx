import { useEffect, useState, useRef } from 'react';
import './cursor.css';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);

  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const smoothPositionRef = useRef({ x: 0, y: 0 });
  const scrollOffsetRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorPositionRef.current = {
        x: e.clientX,
        y: e.clientY + scrollOffsetRef.current,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY; 
      cursorPositionRef.current.y += window.scrollY - scrollOffsetRef.current;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smoothly animate cursor position
  useEffect(() => {
    const updatePosition = () => {
      smoothPositionRef.current = {
        x: smoothPositionRef.current.x + (cursorPositionRef.current.x - smoothPositionRef.current.x) * 0.1,
        y: smoothPositionRef.current.y + (cursorPositionRef.current.y - smoothPositionRef.current.y) * 0.1,
      };

      setPosition({
        x: smoothPositionRef.current.x,
        y: smoothPositionRef.current.y,
      });

      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(updatePosition);
    };
  }, []);

  // Manage hover state for interactive elements
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('.interactive, .text-interactive');

    const addHoverClass = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('text-interactive')) {
        setTextHovered(true);
      } else {
        setHovered(true);
      }
    };

    const removeHoverClass = () => {
      setHovered(false);
      setTextHovered(false);
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${hovered ? 'hovered' : ''} ${textHovered ? 'text-hover' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;