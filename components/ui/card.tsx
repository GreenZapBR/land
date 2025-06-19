import React from 'react';

export function Card({ children, className = "" }: any) {
  return <div className={`rounded-xl bg-[#121212] p-4 shadow ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}
