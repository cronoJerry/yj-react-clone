import {
  Box,
  HStack,
  Image,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
function Layout({ children }) {
  return (
    <VStack w={'full'} border={'1px'} boxSizing="border-box">
      {/* header */}
      <VStack w={'inherit'} position={'relative'}>
        <Box w={'600px'} position={'absolute'} right={'30px'}>
          <UnorderedList
            w={'full'}
            display={'flex'}
            justifyContent={'space-between'}
            style={{ listStyle: 'none' }}
          >
            <ListItem>설문조사</ListItem>
            <ListItem>NCS평가</ListItem>
            <ListItem>시험응시</ListItem>
            <ListItem>회원가입</ListItem>
            <ListItem>로그인</ListItem>
            <ListItem>아이디/비밀번호찾기</ListItem>
            <ListItem>사이트맵</ListItem>
          </UnorderedList>
        </Box>
        <HStack
          w={'full'}
          justifyContent={'space-around'}
          position={'absolute'}
          py={'50px'}
        >
          <Box>
            <Image
              w="252px"
              src="http://www.yjjob.or.kr/data/menu/LOGO_YeLXBdBAIJzpw03o5xy01667921598.png"
            />
          </Box>
          <Box w={'full'} maxW={'1200px'}>
            <UnorderedList
              w={'inherit'}
              display={'flex'}
              justifyContent={'space-around'}
              style={{ listStyle: 'none' }}
              fontWeight={'700'}
            >
              <ListItem>모집과정</ListItem>
              <ListItem>입학상담</ListItem>
              <ListItem>과정소개</ListItem>
              <ListItem>취업센터</ListItem>
              <ListItem>커뮤니티</ListItem>
              <ListItem>학교소개</ListItem>
            </UnorderedList>
          </Box>
        </HStack>
      </VStack>

      {/* main */}
      {children}
      {/* footer */}
      <Box>footer</Box>
    </VStack>
  );
}

export default Layout;

