/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';

import Logo from '../../../public/oritaken_logo.png';

const selectedMenuStyle = 'cursor-pointer text-white px-2 bg-sky-600 rounded-md';
const unSelectedMenuStyle = 'cursor-pointer text-sky-600 hover:text-sky-300';

const isCurrentPage = (page: string, which: string) => {
  if (page === which) {
    return selectedMenuStyle;
  } else if (which === '/') {
    return unSelectedMenuStyle;
  }
  return page.match(which) !== null ? selectedMenuStyle : unSelectedMenuStyle;
};

export const Header = () => {
  const router = useRouter();
  const page = router.asPath;

  return (
    <div className="pc:{flex w-full flex-col justify-around} bg-white">
      <div className="my-3 h-full">
        <img
          onClick={() => router.push('/')}
          src={Logo.src}
          alt="ロゴ"
          className="h-[10vh] max-h-[15vh] min-w-[250px] max-w-[250px] cursor-pointer"
        ></img>
      </div>
      <div className="w-full border-b"></div>
      <nav className="py-4">
        <ul className="mx-auto flex w-3/4 justify-around">
          <li onClick={() => router.push('/')} className={isCurrentPage(page, '/')}>
            HOME
          </li>
          <li onClick={() => router.push('/member')} className={isCurrentPage(page, '/member')}>
            MEMBER
          </li>
          <li onClick={() => router.push('/news')} className={isCurrentPage(page, 'news')}>
            NEWS
          </li>
          <li onClick={() => router.push('/research')} className={isCurrentPage(page, 'research')}>
            RESEARCH
          </li>
          <li onClick={() => router.push('/contact')} className={isCurrentPage(page, 'contact')}>
            CONTACT
          </li>
          <li
            onClick={() => router.push('/questions')}
            className={isCurrentPage(page, '/questions')}
          >
            QUESTIONS
          </li>
          <li onClick={() => router.push('/join')} className={isCurrentPage(page, '/join')}>
            JOIN
          </li>
        </ul>
      </nav>
    </div>
  );
};
