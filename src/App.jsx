import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselSecond = [
  {
    src: 'http://www.yjjob.or.kr/data/banner/VLYrO046sG1SRNO3NPx9_1684384304.png',
    alt: '스마트 패션디자인&소품',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/XEjyeUFVB4Wmv7NOv84V_1682899922.png',
    alt: '정보처리산업기사',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/Yc6V1KgC7bLwuLmDNrLd_1685066459.png',
    alt: '전시설계 및 시각콘텐츠',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/gz9wuZ3gVHLnzMMdKhxp_1685428360.png',
    alt: 'ERP정보관리사 Master',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/iszuylLzUvMbuc0uu1vY_1685500295.png',
    alt: '공조/에너지 산업기사 취득과정',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/lkxoS8Ef4iMyDfso043G_1685685399.png',
    alt: '빅데이터분석&UI구현',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/2dkbgs5RwJ65QUuEEPuB_1683849884.png',
    alt: '전기공사 및 관리자',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/5SYgL9xR4TeoNOLt7zkz_1682900167.png',
    alt: 'CAD/CAM 3D기계설계',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/018PEgjFCAx1ySeGyOOt_1678080743.png',
    alt: '특수용접',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/387kP4W1Y37KG6l7EEmP_1685085516.png',
    alt: 'VR/AR 기술기반의 실감형콘텐츠 제작',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/AQEMtk47QAKvcTZDzbn4_1683853860.png',
    alt: '조경산업기사',
  },
  {
    src: 'http://www.yjjob.or.kr/data/banner/G7rypUPqyhKVn5jP1KGe_1685066167.png',
    alt: '전산회계',
  },
];

const Menu = [
  '전체과정',
  'IT/SW',
  '전기PLC',
  '기계설계',
  '디자인',
  '용접',
  '공조냉동',
  '조경/중장비',
  '가구/공예',
  '경영회계',
  '패션봉제',
  '인테리어',
];
const array = ['', '', '', '', '', ''];
const pofol = [
  '디자인',
  'IT/SW',
  '기계설계',
  '용접/공조',
  '패션디자인',
  '가구/공예',
];
function App() {
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
      <VStack py={'100px'}>
        {/* carousel1 */}
        <Carousel autoPlay={true} showStatus={false} showThumbs={false}>
          <div>
            <img
              src="http://www.yjjob.or.kr/data/banner/4sd1y6TJNdryXhsBt3RX_1621569286.png"
              alt="취업특별과정"
            />
          </div>
          <div>
            <img
              src="http://www.yjjob.or.kr/data/banner/GvccM6PeDIqb8GLk0pjT_1685493562.png"
              alt="취업특별과정"
            />
          </div>
          <div>
            <img
              src="http://www.yjjob.or.kr/data/banner/IvIQueNYDIHhxMVRIBj0_1631066096.png"
              alt="취업특별과정"
            />
          </div>
          <div>
            <img
              src="http://www.yjjob.or.kr/data/banner/PvRLHcQBpxjDuitW9xdN_1636419240.png"
              alt="취업특별과정"
            />
          </div>
        </Carousel>
        {/* tap & carousel */}
        <Tabs variant={'soft-rounded'} maxW={'1200px'}>
          <TabList display={'grid'} gridTemplateColumns={'repeat(6,1fr)'}>
            {Menu.map((i) => (
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>{i}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Menu.map(() => (
              <TabPanel>
                <Carousel
                  centerMode={true}
                  centerSlidePercentage={25}
                  autoPlay={true}
                  interval={1000}
                  showThumbs={false}
                >
                  {carouselSecond.map((item, i) => (
                    <div key={i}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        style={{ width: 'full' }}
                      />
                    </div>
                  ))}
                </Carousel>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        {/* 구직자/직장인 */}
        <Tabs>
          <TabList display={'flex'} justifyContent={'center'}>
            <Tab>
              <Text fontSize={'20px'} fontWeight={700}>
                구직자를 위한 교육
              </Text>
            </Tab>
            <Tab>
              <Text fontSize={'20px'} fontWeight={700}>
                직장인을 위한 교육
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Image src="./img/board1.png" />
            </TabPanel>
            <TabPanel>
              <Image src="/img/board2.png" />
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* 입학상담 취업센터 */}
        <Box w={'1200px'}>
          <HStack
            w={'inherit'}
            justifyContent={'space-around'}
            alignItems={'flex-start'}
          >
            <VStack w={'50%'}>
              <Box
                w={'full'}
                display={'flex'}
                justifyContent={'space-between'}
                fontSize={'18px'}
                fontWeight={700}
                py={4}
              >
                입학상담<span style={{ color: 'blue' }}>+</span>
              </Box>
              {array.map(() => (
                <Box
                  w={'full'}
                  display={'flex'}
                  justifyContent={'space-between'}
                  py={0.5}
                >
                  k digital traning VR/AR 유니티 c#관련 국비지
                  <span style={{ color: 'gray' }}>23.06.01</span>
                </Box>
              ))}
            </VStack>
            <VStack w={'50%'}>
              <Box
                w={'full'}
                display={'flex'}
                justifyContent={'space-between'}
                fontSize={'18px'}
                fontWeight={700}
                py={4}
              >
                취업센터<span style={{ color: 'blue' }}>+</span>
              </Box>
              {array.map(() => (
                <Box
                  w={'full'}
                  display={'flex'}
                  justifyContent={'space-between'}
                  py={0.5}
                >
                  입사지원서 양식_중장년층
                  <span style={{ color: 'gray' }}>23.06.01</span>
                </Box>
              ))}
            </VStack>
          </HStack>
        </Box>
        {/* 취업후기 & 홍보영상 */}
        <HStack my={'50px'}>
          <VStack>
            <Text fontWeight={700} fontSize={'20px'}>
              취업후기
            </Text>
            <Box borderTop={'1px solid lightgray'} py={'6px'}>
              <Image src="http://www.yjjob.or.kr/images/main_epilogue.png" />
            </Box>
          </VStack>
          <VStack>
            <Text fontWeight={700} fontSize={'20px'}>
              홍보영상
            </Text>
            <Box borderTop={'1px solid lightgray'} py={'6px'}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SklOfbDKQOM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </VStack>
        </HStack>
        {/* portfolio */}
        <Text fontWeight={700} fontSize={'20px'}>
          포트폴리오
        </Text>
        <Tabs maxW={'1200px'}>
          <TabList w={'full'} display={'flex'} justifyContent={'space-around'}>
            {pofol.map((key) => (
              <Tab
                padding={'20px 60px'}
                border={'1px solid lightgray'}
                boxSizing={'border-box'}
                _hover={{
                  borderBottom: '5px solid blue',
                }}
              >
                <Text fontSize={'20px'} fontWeight={700}>
                  {key}
                </Text>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {pofol.map(() => (
              <TabPanel>
                <Grid templateColumns={'repeat(3,1fr)'} gap={4}>
                  <GridItem>
                    <Image src="http://www.yjjob.or.kr/images/main/design_11.png" />
                  </GridItem>
                  <GridItem>
                    <Image src="http://www.yjjob.or.kr/images/main/design_22.png" />
                  </GridItem>
                  <GridItem>
                    <Image src="http://www.yjjob.or.kr/images/main/desi-3.png" />
                  </GridItem>
                  <GridItem>
                    <Image src="http://www.yjjob.or.kr/images/main/design_44.png" />
                  </GridItem>
                  <GridItem>
                    <Image src="http://www.yjjob.or.kr/images/main/design-5.png" />
                  </GridItem>
                  <GridItem>
                    <Image src="http://www.yjjob.or.kr/images/main/design-6.png" />
                  </GridItem>
                </Grid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        {/* 교육시설 협력업체 소개 등 */}
        <HStack
          w={'full'}
          border={'1px solid lightgray'}
          justifyContent={'space-around'}
        >
          <HStack>
            <Image src="http://www.yjjob.or.kr/images/main_banner1.png" />
            <VStack spacing={0}>
              <Text w={'full'} textAlign={'left'} fontWeight={700}>
                교육 시설
              </Text>
              <Text lineHeight={'16px'} color={'gray.600'}>
                최고의 시설과
                <br />
                최신 장비들을 한눈에
              </Text>
            </VStack>
          </HStack>

          <HStack>
            <Image src="http://www.yjjob.or.kr/images/main_banner2.png" />
            <VStack spacing={0}>
              <Text w={'full'} textAlign={'left'} fontWeight={700}>
                산학관(취업)
                <br />
                협력업체 소개
              </Text>
            </VStack>
          </HStack>

          <HStack>
            <Image src="http://www.yjjob.or.kr/images/main_banner3.png" />
            <VStack spacing={0}>
              <Text w={'full'} textAlign={'left'} fontWeight={700}>
                구인공고등록
              </Text>
              <Text lineHeight={'16px'} color={'gray.600'}>
                인재모집을 위한
                <br />
                구인공고 등록
              </Text>
            </VStack>
          </HStack>

          <HStack>
            <Image src="http://www.yjjob.or.kr/images/main_banner4.png" />
            <VStack spacing={0}>
              <Text w={'full'} textAlign={'left'} fontWeight={700}>
                YJ재능 기부봉사단
                <br /> 소개
              </Text>
            </VStack>
          </HStack>
        </HStack>
        {/* 신입생 입학상담 문의 */}
        <HStack w={'full'} border={'1px solid lightgray'} bg={'lightgray'}>
          <Box w={'30%'} fontWeight={700} margin={'10px 40px 20px 40px'}>
            <Text>신입생 입학상담문의</Text>
            <Text color={'blue'}>053-983-8877</Text>
          </Box>
          <VStack>
            <Text></Text>
            <HStack></HStack>
            <Text></Text>
          </VStack>
        </HStack>
      </VStack>
      {/* footer */}
      <Box>footer</Box>
    </VStack>
  );
}

export default App;

