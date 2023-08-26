/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';

import Logo from '../../../../public/oritaken_logo.png';

type SpHeaderProps = {
  hide?: boolean;
};

export const SpHeader = ({ hide }: SpHeaderProps) => {
  const router = useRouter();

  return (
    <div
      className={`fixed z-[999] h-[9vh] w-full translate-y-0 border-[0.6px] border-b-slate-300 bg-white transition-transform will-change-transform ${
        hide ? 'translate-y-[-150%]' : 'translate-y-[0]'
      }`}
    >
      <img
        onClick={() => router.push('/')}
        src={Logo.src}
        alt="ロゴ"
        className={`${hide ? 'hidden' : 'h-[8vh] w-[32vw]'}`}
      ></img>
    </div>
  );
};
