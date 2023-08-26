import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full w-full min-w-[1080px] font-noto text-gray-600 sp:hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
