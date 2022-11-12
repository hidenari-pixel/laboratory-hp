import { useEffect, useState } from 'react';

import { Footer } from '../Footer';
import { FloatingActionButton } from './FloatingActionButton';
import { SpHeader } from './Header';

type LayoutProps = {
  children: JSX.Element;
};

export const SpLayout = ({ children }: LayoutProps) => {
  const [hide, setHide] = useState<boolean>(false);
  let lastY = 0;

  const scrollHideHeader = () => {
    setHide(window.scrollY > 150 && window.scrollY > lastY);
    lastY = window.scrollY;
  };

  // 下にスクロールした時 → ヘッダー消す
  // 上にスクロールした時 → ヘッダー表示
  useEffect(() => {
    window.addEventListener('scroll', scrollHideHeader);
    return () => {
      window.removeEventListener('scroll', scrollHideHeader);
    };
  }, []);

  return (
    <div className="h-full w-full font-noto text-gray-600 pc:hidden">
      <SpHeader hide={hide} />
      {children}
      <FloatingActionButton />
      <Footer />
    </div>
  );
};
