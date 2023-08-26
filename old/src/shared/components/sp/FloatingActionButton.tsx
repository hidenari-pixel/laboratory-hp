/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  StackDivider,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const selectedMenuStyle = 'h-full w-full rounded-md bg-slate-600 text-white py-1 text-center';

const isCurrentPage = (page: string, which: string) => {
  if (page === which) {
    return selectedMenuStyle;
  } else if (which === '/') {
    return '';
  }
  return page.match(which) !== null ? selectedMenuStyle : '';
};

export const FloatingActionButton = () => {
  const router = useRouter();
  const page = router.asPath;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <button
        onClick={onToggle}
        className="fixed bottom-[4vh] right-[6vw] z-50 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600 p-0 shadow transition duration-200 ease-in focus:outline-none active:shadow-lg"
      >
        {isOpen ? (
          <AiOutlineClose className="text-white" size={30} />
        ) : (
          <AiOutlineMenu className="text-white" size={30} />
        )}
      </button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent className="z-30 flex flex-col items-center justify-center bg-slate-100">
          <DrawerBody>
            <VStack
              className="w-[50vw] text-lg"
              divider={<StackDivider borderColor="gray.200" />}
              spacing={10}
            >
              <Box onClick={() => router.push('/')} className={isCurrentPage(page, '/')}>
                ホーム
              </Box>
              <Box
                onClick={() => router.push('/member')}
                className={isCurrentPage(page, '/member')}
              >
                メンバー
              </Box>
              <Box
                onClick={() => router.push('/research')}
                className={isCurrentPage(page, 'research')}
              >
                研究
              </Box>
              <Box onClick={() => router.push('/news')} className={isCurrentPage(page, 'news')}>
                ニュース
              </Box>
              <Box onClick={() => router.push('/join')} className={isCurrentPage(page, '/join')}>
                研究室配属
              </Box>
              <Box
                onClick={() => router.push('/contact')}
                className={isCurrentPage(page, 'contact')}
              >
                アクセス
              </Box>
              <Box
                onClick={() => router.push('/questions')}
                className={isCurrentPage(page, '/questions')}
              >
                よくある質問
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
