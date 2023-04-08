import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

type PageCardProps = {
  img: StaticImageData;
  title: string;
  description: string | ReactNode;
  path: string;
};

/* eslint-disable @next/next/no-img-element */
const PageCard = ({ img, title, description, path }: PageCardProps) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow transition-all hover:scale-[101%]">
      <Link href={path}>
        <a>
          <img
            loading="lazy"
            className="h-[240px] w-full overflow-hidden rounded-t-lg object-cover object-center hover:opacity-80"
            src={img.src}
            alt=""
          />
        </a>
      </Link>
      <div className="p-5">
        <Link href={path}>
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
          </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link href={path}>
          <a className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Read more
            <AiOutlineArrowRight className="ml-2" size={18} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(PageCard);
