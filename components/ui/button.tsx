import React from 'react';

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`rounded px-4 py-2 font-medium transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
