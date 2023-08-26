import { Box } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  pageCount: number;
  itemsPerPage: number;
  itemCount: number;
  setItemOffset: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({
  pageCount,
  itemsPerPage,
  itemCount,
  setItemOffset,
}: PaginationProps) => {
  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % itemCount;
    setItemOffset(newOffset);
  };

  return (
    <Box className="w-full pt-10">
      <ReactPaginate
        className="flex w-full justify-around"
        activeClassName="bg-slate-300 rounded-full w-[1.8rem] h-[1.8rem] text-center "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        breakLabel="..."
        previousLabel="< "
        nextLabel=" >"
      />
    </Box>
  );
};
