'use client'
// components/ScrollButton.tsx
// import React from 'react';
import { Button } from '@/components/ui/button';

interface ScrollButtonProps {
  scrollAmount: number;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollAmount }) => {
  const scrollToPosition = () => {
    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToPosition}      
    >
      Try some questions
    </Button>
  );
};

export default ScrollButton;
