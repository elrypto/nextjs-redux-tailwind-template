import React from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  type?: string;
  centerTitle?: boolean;
}

export const Page: React.FC<Props> = ({ children, title, type, centerTitle, className }: Props) => {
  const styles = type === 'blank' ? 'm-8 p-6 text-gray-700' : 'm-8 p-6 bg-white text-gray-700 rounded-lg shadow';

  return (
    <div className={`${styles} ${className}`}>
      {title && <h1 className={`pb-6 font-semibold text-xl ${centerTitle && 'text-center'}`}>{title}</h1>}
      {children}
    </div >
  )
}