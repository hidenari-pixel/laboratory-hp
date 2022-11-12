/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';

import Logo from '../../../public/oritaken_logo.png';

export const createCurrentPageTabStyle = (page: string, currentPage: string) => {
  return `cursor-pointer ${
    page === currentPage
      ? 'text-white px-2 bg-sky-600 rounded-md'
      : 'text-sky-600 hover:text-sky-300'
  }`;
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
          <li onClick={() => router.push('/')} className={createCurrentPageTabStyle('/', page)}>
            HOME
          </li>
          <li
            onClick={() => router.push('/member')}
            className={createCurrentPageTabStyle('/member', page)}
          >
            MEMBER
          </li>
          <li
            onClick={() => router.push('/news')}
            className={createCurrentPageTabStyle('/news', page)}
          >
            NEWS
          </li>
          <li
            onClick={() => router.push('/research')}
            className={createCurrentPageTabStyle('/research', page)}
          >
            RESEARCH
          </li>
          <li
            onClick={() => router.push('/contact')}
            className={createCurrentPageTabStyle('/contact', page)}
          >
            CONTACT
          </li>
          <li
            onClick={() => router.push('/questions')}
            className={createCurrentPageTabStyle('/questions', page)}
          >
            QUESTIONS
          </li>
          <li
            onClick={() => router.push('/join')}
            className={createCurrentPageTabStyle('/join', page)}
          >
            JOIN
          </li>
        </ul>
      </nav>
    </div>
  );
};
