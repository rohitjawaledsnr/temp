import React from "react";

import {
  Column,
  Stack,
  Img,
  Button,
  Row,
  Text,
  Line,
  List,
  Input,
  TextArea,
} from "components";

const MybigleapHomepageUIRohitPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-productsans mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Column className="bg-gradient  lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] w-[100%]">
            <Stack className="lg:h-[518px] xl:h-[592px] 2xl:h-[666px] 3xl:h-[799px] w-[100%]">
              <Stack className="absolute lg:h-[518px] xl:h-[592px] 2xl:h-[666px] 3xl:h-[799px] w-[100%]">
                <Stack className="absolute lg:h-[518px] xl:h-[592px] 2xl:h-[666px] 3xl:h-[799px] w-[100%]">
                  <Stack className="absolute lg:h-[518px] xl:h-[592px] 2xl:h-[666px] 3xl:h-[799px] right-[0] w-[48%]">
                    <Img
                      src="images/img_ellipse4.png"
                      className="absolute lg:h-[505px] xl:h-[578px] 2xl:h-[650px] 3xl:h-[780px] inset-y-[0] my-[auto] right-[0] w-[86%]"
                      alt="EllipseFour"
                    />
                    <Column
                      className="absolute bg-cover bg-repeat bottom-[0] items-end left-[0] p-[1px] rounded-radius8 w-[81%]"
                      style={{
                        backgroundImage: "url('images/img_group8.png')",
                      }}
                    >
                      <Button
                        className="flex lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] items-center justify-center lg:mb-[245px] xl:mb-[281px] 2xl:mb-[316px] 3xl:mb-[379px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:w-[57px] xl:w-[65px] 2xl:w-[74px] 3xl:w-[88px]"
                        shape="icbRoundedBorder8"
                        size="lgIcn"
                        variant="icbOutlineBlack9003f"
                      >
                        <Img
                          src="images/img_vector.svg"
                          className="flex items-center justify-center"
                          alt="Vector"
                        />
                      </Button>
                    </Column>
                  </Stack>
                  <header className="absolute top-[0] w-[100%]">
                    <Stack className="3xl:h-[117px] lg:h-[76px] xl:h-[87px] 2xl:h-[98px] w-[100%]">
                      <Row className="absolute bg-white_A700 bottom-[3%] items-center justify-center lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs4 w-[100%]">
                        <Text className="cursor-pointer hover:font-bold font-bold font-productsans lg:ml-[501px] xl:ml-[573px] 2xl:ml-[645px] 3xl:ml-[774px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                          Home
                        </Text>
                        <Text className="cursor-pointer hover:font-bold font-normal font-productsansmedium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] hover:text-gray_900 text-gray_900_7f w-[auto]">
                          Library
                        </Text>
                        <Text className="cursor-pointer hover:font-bold font-normal font-productsansmedium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] hover:text-gray_900 text-gray_900_7f w-[auto]">
                          Testimonials
                        </Text>
                        <Text className="cursor-pointer hover:font-bold font-normal font-productsansmedium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] hover:text-gray_900 text-gray_900_7f w-[auto]">
                          About
                        </Text>
                        <Text className="cursor-pointer hover:font-bold font-normal font-productsansmedium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] hover:text-gray_900 text-gray_900_7f w-[auto]">
                          Contact
                        </Text>
                        <Button
                          className="font-bold font-manrope lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mr-[107px] xl:mr-[122px] 2xl:mr-[138px] 3xl:mr-[165px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[9%]"
                          variant="FillIndigoA700"
                        >
                          Study abroad
                        </Button>
                      </Row>
                      <Img
                        src="images/img_image2.png"
                        className="absolute bottom-[0] 3xl:h-[111px] lg:h-[72px] xl:h-[82px] 2xl:h-[93px] left-[15%] w-[9%]"
                        alt="imageTwo"
                      />
                    </Stack>
                  </header>
                  <Column className="absolute bottom-[9%] left-[11%] w-[32%]">
                    <Stack className="font-productsansmedium lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] w-[100%]">
                      <Text className="absolute font-normal lg:leading-[45px] xl:leading-[51px] 2xl:leading-[58px] 3xl:leading-[69px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 w-[100%]">
                        Comprehensive career counselling by expert
                      </Text>
                      <Img
                        src="images/img_vector4.svg"
                        className="absolute bottom-[22%] lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] right-[16%] w-[50%]"
                        alt="VectorFour"
                      />
                    </Stack>
                    <Text className="font-normal font-productsans lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[100%]">
                      Explore and Find out your Most Suitable Career Path Out of
                      20 Career Clusters, 160 + Career Paths and 3000+
                      Occupations
                    </Text>
                    <Button
                      className="font-bold font-manrope lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[47%]"
                      size="xl"
                      variant="FillIndigoA700"
                    >
                      Enroll now
                    </Button>
                  </Column>
                  <div className="absolute bg-orange_200 bottom-[12%] lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[43%] rounded-radius50 lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"></div>
                </Stack>
                <Column className="absolute bottom-[6%] right-[7%] w-[45%]">
                  <Button
                    className="flex 3xl:h-[100px] lg:h-[65px] xl:h-[74px] 2xl:h-[84px] items-center justify-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:w-[64px] xl:w-[73px] 2xl:w-[83px] 3xl:w-[99px]"
                    shape="icbRoundedBorder8"
                    size="mdIcn"
                    variant="icbOutlineGray7003f"
                  >
                    <Img
                      src="images/img_vector_white_A700.svg"
                      className="flex items-center justify-center"
                      alt="Vector One"
                    />
                  </Button>
                  <Column className="2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[80px] xl:mt-[92px] w-[100%]">
                    <Row className="justify-between w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                        shape="icbRoundedBorder5"
                        size="smIcn"
                        variant="icbOutlineBlack9003f1_2"
                      >
                        <Img
                          src="images/img_laptop.svg"
                          className="flex items-center justify-center"
                          alt="laptop"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                        shape="icbRoundedBorder5"
                        size="mdIcn"
                        variant="icbOutlineBlack9003f1_2"
                      >
                        <Img
                          src="images/img_close.svg"
                          className="flex items-center justify-center lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px]"
                          alt="close"
                        />
                      </Button>
                    </Row>
                    <Button
                      className="flex lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                      shape="icbRoundedBorder5"
                      size="smIcn"
                      variant="icbOutlineGray9003f"
                    >
                      <Img
                        src="images/img_arrowup.svg"
                        className="flex items-center justify-center"
                        alt="arrowup"
                      />
                    </Button>
                  </Column>
                </Column>
              </Stack>
              <Button
                className="absolute bottom-[34%] flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] inset-x-[0] items-center justify-center mx-[auto] lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                shape="icbRoundedBorder5"
                size="smIcn"
                variant="icbOutlineBlack9003f1_2"
              >
                <Img
                  src="images/img_globe.svg"
                  className="flex items-center justify-center"
                  alt="globe"
                />
              </Button>
              <Img
                src="images/img_cloud1.png"
                className="absolute 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[91px] right-[4%] top-[26%] w-[8%]"
                alt="CloudOne"
              />
            </Stack>
            <div className="bg-cyan_200 lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] 2xl:ml-[1042px] 3xl:ml-[1251px] lg:ml-[810px] xl:ml-[926px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius50 lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"></div>
            <Column className="items-center justify-end lg:ml-[577px] xl:ml-[660px] 2xl:ml-[743px] 3xl:ml-[892px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] outline outline-[0.5px] outline-gray_500 lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius95 w-[1%]">
              <div className="bg-indigo_A701 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
            </Column>
          </Column>
          <Column className="bg-white_A700 items-center justify-end 3xl:mt-[103px] lg:mt-[66px] xl:mt-[76px] 2xl:mt-[86px] 3xl:p-[106px] lg:p-[69px] xl:p-[79px] 2xl:p-[89px] w-[100%]">
            <Row className="font-productsans items-center justify-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[26%]">
              <Line className="bg-indigo_A700 h-[1px] w-[15%]" />
              <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-indigo_A700_e5 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 uppercase w-[auto]">
                Career library
              </Text>
              <Line className="bg-indigo_A700 h-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[15%]" />
            </Row>
            <Text className="font-normal font-productsansmedium lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_901 w-[auto]">
              Psychometric Career Assessments
            </Text>
            <Column className="font-inter items-center 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] w-[88%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[43px] xl:my-[49px] 2xl:my-[56px] 3xl:my-[67px] w-[100%]">
                  <Column className="bg-white_A700 items-center mt-[1px] outline outline-[0.5px] outline-indigo_A700 lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 shadow-bs5 w-[31%]">
                    <Button
                      className="flex items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[34%]"
                      shape="icbCircleBorder46"
                      size="xlIcn"
                    >
                      <Img
                        src="images/img_vector_white_A700.svg"
                        className="flex items-center justify-center"
                        alt="Vector Two"
                      />
                    </Button>
                    <Text className="font-normal font-productsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 text-center w-[99%]">
                      Career Analysis for 2nd to 7th class
                    </Text>
                    <Text className="font-inter font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900_7f text-center w-[82%]">
                      It will help you to find out Multiple Intelligence of the
                      Student
                    </Text>
                    <Button
                      className="font-manrope font-medium mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[46%]"
                      variant="FillBlue50"
                    >
                      Enroll
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 items-center mb-[1px] outline outline-[1px] outline-black_900_4c lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius10 w-[31%]">
                    <Button
                      className="flex 3xl:h-[111px] lg:h-[72px] xl:h-[82px] 2xl:h-[93px] items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius50 3xl:w-[110px] lg:w-[71px] xl:w-[81px] 2xl:w-[92px]"
                      size="2xlIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                        alt="location"
                      />
                    </Button>
                    <Text className="font-normal font-productsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 text-center w-[90%]">
                      Career Analysis for 8th, 9th & 10th Class
                    </Text>
                    <Text className="font-inter font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900_7f text-center w-[97%]">
                      It will help you to find out most suitable career path and
                      subjects
                    </Text>
                    <Button
                      className="font-manrope font-medium lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[47%]"
                      variant="OutlineBlack90033"
                    >
                      Enroll
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 items-center mb-[1px] outline outline-[1px] outline-black_900_4c lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius10 w-[31%]">
                    <Button
                      className="flex 3xl:h-[111px] lg:h-[72px] xl:h-[82px] 2xl:h-[93px] items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius50 3xl:w-[110px] lg:w-[71px] xl:w-[81px] 2xl:w-[92px]"
                      size="2xlIcn"
                    >
                      <Img
                        src="images/img_location_92X92.svg"
                        className="flex items-center justify-center lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px]"
                        alt="location One"
                      />
                    </Button>
                    <Column className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[97%]">
                      <Text className="font-normal font-productsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 text-center w-[100%]">
                        Career Analysis for 11th & 12th Class
                      </Text>
                      <Text className="font-inter font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900_7f text-center w-[100%]">
                        It will help you to find out most suitable career path
                        and career road map with...
                      </Text>
                      <Button
                        className="font-manrope font-medium lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[48%]"
                        variant="OutlineBlack90033"
                      >
                        Enroll
                      </Button>
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:my-[43px] xl:my-[49px] 2xl:my-[56px] 3xl:my-[67px] w-[100%]">
                  <Column className="bg-white_A700 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] outline outline-[1px] outline-black_900_4c lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[31%]">
                    <Button
                      className="flex 3xl:h-[111px] lg:h-[72px] xl:h-[82px] 2xl:h-[93px] items-center justify-center lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] rounded-radius50 3xl:w-[110px] lg:w-[71px] xl:w-[81px] 2xl:w-[92px]"
                      size="3xlIcn"
                    >
                      <Img
                        src="images/img_volume.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px]"
                        alt="volume"
                      />
                    </Button>
                    <Text className="font-normal font-productsans lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                      Engineering Branch Selector
                    </Text>
                    <Text className="font-inter font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900_7f text-center w-[81%]">
                      It will help you to select most suitable engineering
                      branch before engineering college admission.
                    </Text>
                    <Button
                      className="font-manrope font-medium lg:mb-[17px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[40%]"
                      variant="OutlineBlack90033"
                    >
                      Enroll
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 border border-indigo_A700 border-solid items-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius10 shadow-bs5 w-[31%]">
                    <Button
                      className="flex 3xl:h-[111px] lg:h-[72px] xl:h-[82px] 2xl:h-[93px] items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius50 3xl:w-[110px] lg:w-[71px] xl:w-[81px] 2xl:w-[92px]"
                      size="3xlIcn"
                    >
                      <Img
                        src="images/img_group41.svg"
                        className="flex items-center justify-center"
                        alt="GroupFortyOne"
                      />
                    </Button>
                    <Text className="font-normal font-productsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 text-center w-[82%]">
                      Secondary School (IB MYP/IGCSE)
                    </Text>
                    <Text className="font-inter font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900_7f w-[auto]">
                      Career Planning for Secondary School
                    </Text>
                    <Button
                      className="font-manrope font-medium lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[47%]"
                      variant="FillIndigoA700"
                    >
                      Enroll
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] outline outline-[1px] outline-black_900_4c lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius10 w-[31%]">
                    <Button
                      className="flex 3xl:h-[111px] lg:h-[72px] xl:h-[82px] 2xl:h-[93px] items-center justify-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius50 3xl:w-[110px] lg:w-[71px] xl:w-[81px] 2xl:w-[92px]"
                      size="3xlIcn"
                    >
                      <Img
                        src="images/img_group41.svg"
                        className="flex items-center justify-center"
                        alt="GroupThree"
                      />
                    </Button>
                    <Text className="font-normal font-productsans lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                      High school (IBDP/A-level)
                    </Text>
                    <Text className="font-inter font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900_7f w-[auto]">
                      Career Planning for High School
                    </Text>
                    <Button
                      className="font-manrope font-medium lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[45%]"
                      variant="OutlineBlack90033"
                    >
                      Enroll
                    </Button>
                  </Column>
                </Row>
              </List>
              <Button
                className="font-normal lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                size="md"
                variant="OutlineBlack9004c"
              >
                View more
              </Button>
            </Column>
          </Column>
        </Column>
        <Column className="items-end lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:pl-[132px] xl:pl-[151px] 2xl:pl-[170px] 3xl:pl-[204px] w-[100%]">
          <Text className="font-normal lg:mr-[464px] xl:mr-[531px] 2xl:mr-[597px] 3xl:mr-[716px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-indigo_A700_e5 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 uppercase w-[auto]">
            About us
          </Text>
          <Row className="justify-end lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
            <Img
              src="images/img_image2.png"
              className="lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[31%]"
              alt="imageTwo One"
            />
            <Stack className="lg:h-[439px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] lg:ml-[117px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] w-[57%]">
              <Img
                src="images/img_gradientcircle.png"
                className="absolute lg:h-[439px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] right-[0] w-[66%]"
                alt="gradientcircle"
              />
              <Text className="absolute font-normal font-productsansmedium leading-[normal] left-[1%] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-red_A200 top-[0] tracking-ls1 w-[69%]">
                We are an independent Career Guidance consultancy
              </Text>
              <Text className="absolute font-inter font-normal h-[max-content] inset-y-[0] leading-[172.95%] left-[0] my-[auto] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 tracking-ls1 w-[78%]">
                Guiding young parents select the right curriculum for their
                children (kindergarten onwards)
                <br />
                <br />
                Helping students right from Class VIII onwards understand their
                strengths and guiding them to a career that marries their
                interest, skills and aptitude along with the industry demand
                <br />
                <br />
                Helping professionals looking to re-calibrate their career path
              </Text>
            </Stack>
          </Row>
        </Column>
        <Column className="font-manrope items-center w-[100%]">
          <Column className="bg-gray_100 items-center lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] w-[100%]">
            <Row className="bg-red_A200 items-center justify-center lg:pl-[37px] xl:pl-[42px] 2xl:pl-[48px] 3xl:pl-[57px] rounded-radius16 w-[85%]">
              <Stack className="lg:h-[147px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[227px] w-[56%]">
                <Img
                  src="images/img_arrow.svg"
                  className="absolute lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[26%]"
                  alt="Arrow"
                />
                <Column className="absolute left-[0] rounded-radius16 w-[91%]">
                  <Text className="font-extrabold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[100%]">
                    Not sure about your perfect career path
                  </Text>
                  <Button
                    className="font-bold lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[33%]"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    Enroll now
                  </Button>
                </Column>
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[235px] xl:h-[269px] 2xl:h-[303px] 3xl:h-[363px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] lg:px-[17px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] w-[40%]"
                style={{ backgroundImage: "url('images/img_group13.png')" }}
              >
                <Img
                  src="images/img_group34.svg"
                  className="absolute lg:h-[199px] xl:h-[227px] 2xl:h-[256px] 3xl:h-[307px] inset-y-[0] left-[12%] my-[auto] w-[60%]"
                  alt="GroupThirtyFour"
                />
              </Stack>
            </Row>
          </Column>
        </Column>
        <Column className="font-inter items-end lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] lg:pl-[136px] xl:pl-[156px] 2xl:pl-[176px] 3xl:pl-[211px] w-[100%]">
          <Row className="items-center justify-end w-[100%]">
            <Text className="font-normal leading-[165.45%] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 tracking-ls1 w-[45%]">
              We actively work with our clients to help them make their big leap
              in the world of career and education.
              <br />
              <br />
              <br />
              <br />
              We believe in unleashing the true potential of students by
              providing sound career assessment that is intuitive and backed by
              sound scientific methods that have been tested over many years.
              <br />
              <br />
              <br />
              <br />
              All our services are personalized and conducted on a one-to-one
              basis, either online or physically as per the students individual
              requirement. Our comprehensive approach towards understanding our
              clients with empathy, complete analysis and full-fledged solution
              makes us a league apart.
            </Text>
            <Stack className="lg:h-[473px] xl:h-[541px] 2xl:h-[609px] 3xl:h-[731px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[92px] w-[45%]">
              <Stack
                className="absolute bg-cover bg-repeat lg:h-[473px] xl:h-[541px] 2xl:h-[609px] 3xl:h-[731px] lg:pl-[21px] xl:pl-[24px] 2xl:pl-[28px] 3xl:pl-[33px] right-[0] w-[81%]"
                style={{ backgroundImage: "url('images/img_group10.svg')" }}
              >
                <Img
                  src="images/img_vector3.png"
                  className="absolute lg:h-[452px] xl:h-[516px] 2xl:h-[581px] 3xl:h-[697px] right-[0] top-[0] w-[80%]"
                  alt="VectorThree"
                />
              </Stack>
              <Img
                src="images/img_image3.png"
                className="absolute lg:h-[196px] xl:h-[224px] 2xl:h-[252px] 3xl:h-[302px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[79%]"
                alt="imageThree"
              />
            </Stack>
          </Row>
        </Column>
        <Column className="items-center lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] w-[100%]">
          <Row className="bg-gray_50 justify-between lg:pr-[51px] xl:pr-[58px] 2xl:pr-[66px] 3xl:pr-[79px] w-[100%]">
            <Stack className="lg:h-[461px] xl:h-[527px] 2xl:h-[593px] 3xl:h-[711px] w-[36%]">
              <Img
                src="images/img_halfcircle4.svg"
                className="absolute bottom-[7%] lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] left-[0] w-[20%]"
                alt="HalfCircleFour"
              />
              <Stack className="absolute lg:h-[461px] xl:h-[527px] 2xl:h-[593px] 3xl:h-[711px] right-[0] w-[90%]">
                <Column className="absolute left-[16%] top-[0] w-[45%]">
                  <Img
                    src="images/img_halfcircle2.svg"
                    className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="HalfCircleTwo"
                  />
                  <Img
                    src="images/img_halfcircle3.svg"
                    className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]"
                    alt="HalfCircleThree"
                  />
                </Column>
                <Img
                  src="images/img_play.svg"
                  className="absolute 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[0] top-[0] 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="play"
                />
                <Img
                  src="images/img_personimage.png"
                  className="absolute bottom-[0] lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] right-[0] w-[77%]"
                  alt="PersonImage"
                />
              </Stack>
            </Stack>
            <Column className="lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[49%]">
              <Text className="font-normal font-productsans not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 w-[auto]">
                About Counsellor
              </Text>
              <Text className="font-inter font-normal leading-[135.69%] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[100%]">
                Our founder, Ms Varnika Agarwal, is an expert career mentor and
                training specialist. She is an empanelled Counselor at the
                National Career Services (NCS) with the Government of India. She
                is also a Certified Career Development Facilitator by
                Edumilestones, a certified Global Career Counselor from the
                University of California. An enthusiastic mentor, Varnika has
                helped numerous students and parents on solving their most
                complex career and parenting dilemmas.
                <br />
                <br />
                <br />
                <br />
                She has varied experience across industries like IT, Retail,
                Electronics, Education and Art. While working successfully in
                the corporate sector for 9 years across various roles was
                intellectually stimulating for her, she particularly enjoyed her
                role as a mentor. Varnika finds her passion for mentoring
                students soulfully fulfilling and enriching. She wants to impact
                the young minds achieve their potential with her empathetic
                touch, rich knowledge base and varied industry experience.
              </Text>
            </Column>
          </Row>
          <Row className="font-productsans items-center lg:mt-[131px] xl:mt-[150px] 2xl:mt-[169px] 3xl:mt-[202px] w-[23%]">
            <Line className="bg-indigo_A700 h-[1px] w-[15%]" />
            <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-indigo_A700_e5 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 uppercase w-[auto]">
              Testimonials
            </Text>
            <Line className="bg-indigo_A700 h-[1px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[15%]" />
          </Row>
          <Text className="font-normal font-productsansmedium lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_901 w-[auto]">
            Our clients speak
          </Text>
          <Row className="font-inter lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[89%]">
            <Column className="mt-[1px] w-[35%]">
              <Img
                src="images/img_oval.png"
                className="2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] lg:ml-[104px] xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] rounded-radius50 2xl:w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]"
                alt="Oval"
              />
              <Text className="font-normal font-productsansmedium xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[89px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 w-[auto]">
                Sumit Chopra
              </Text>
              <Img
                src="images/img_group49.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[100px] xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[27%]"
                alt="GroupFortyNine"
              />
              <Text className="font-inter font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_701 w-[85%]">
                Varnika is extremely well researched and knowledgeable about the
                evolving career opportunities and has a very structured process
                to identify the interests through her psychometric analysis. We
                have been seeking her counseling for our daughter for the last 4
                years and it has helped us immensely.
              </Text>
            </Column>
            <Column className="items-center mt-[1px] w-[34%]">
              <Column className="font-productsansmedium items-center w-[29%]">
                <Img
                  src="images/img_oval_110X110.png"
                  className="2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] rounded-radius50 2xl:w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]"
                  alt="Oval One"
                />
                <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 w-[auto]">
                  Deepali Sen
                </Text>
                <Img
                  src="images/img_group49.svg"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[95%]"
                  alt="GroupFifty"
                />
              </Column>
              <Text className="font-inter font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_701 w-[86%]">
                Had a detailed and objective discussion but my son’s career
                possibilities. In depth work done through tests and their
                assessment. Much needed customisation. Would recommend to all
                involved mothers
              </Text>
            </Column>
            <Column className="lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[31%]">
              <Img
                src="images/img_oval_1.png"
                className="2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] lg:ml-[114px] xl:ml-[130px] 2xl:ml-[147px] 3xl:ml-[176px] rounded-radius50 2xl:w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]"
                alt="Oval Two"
              />
              <Column className="font-productsansmedium items-center lg:ml-[106px] xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[31%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 w-[auto]">
                  Mohit Garg
                </Text>
                <Img
                  src="images/img_group49.svg"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]"
                  alt="GroupFifty One"
                />
              </Column>
              <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_701 w-[100%]">
                Thank you. It was really a good session and was really nice
                talking to you. Thank you for helping me find my true
                interest.....
              </Text>
              <Text className="font-normal lg:ml-[192px] xl:ml-[219px] 2xl:ml-[247px] 3xl:ml-[296px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-indigo_A201 w-[auto]">
                Read more
              </Text>
            </Column>
          </Row>
          <Button
            className="font-inter font-normal mt-[4px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[13%]"
            size="md"
            variant="OutlineBlack900331_2"
          >
            View more
          </Button>
          <Column className="bg-gray_100 font-manrope items-center xl:mt-[111px] 2xl:mt-[125px] 3xl:mt-[150px] lg:mt-[97px] lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] w-[100%]">
            <Row className="bg-red_A200 items-center justify-center lg:pl-[37px] xl:pl-[42px] 2xl:pl-[48px] 3xl:pl-[57px] rounded-radius16 w-[85%]">
              <Stack className="lg:h-[147px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[227px] w-[56%]">
                <Img
                  src="images/img_arrow.svg"
                  className="absolute lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[26%]"
                  alt="Arrow One"
                />
                <Column className="absolute left-[0] rounded-radius16 w-[91%]">
                  <Text className="font-extrabold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[100%]">
                    Not sure about your perfect career path
                  </Text>
                  <Button
                    className="font-bold lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[33%]"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    Enroll now
                  </Button>
                </Column>
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[235px] xl:h-[269px] 2xl:h-[303px] 3xl:h-[363px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] lg:px-[17px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] w-[40%]"
                style={{ backgroundImage: "url('images/img_group13.png')" }}
              >
                <Img
                  src="images/img_group34.svg"
                  className="absolute lg:h-[199px] xl:h-[227px] 2xl:h-[256px] 3xl:h-[307px] inset-y-[0] left-[12%] my-[auto] w-[60%]"
                  alt="GroupThirtyFour One"
                />
              </Stack>
            </Row>
          </Column>
        </Column>
        <Row className="font-inter w-[88%]">
          <Column className="items-center w-[55%]">
            <Stack className="lg:h-[182px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] w-[91%]">
              <Column
                className="absolute bg-cover bg-repeat font-productsans left-[0] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[84%]"
                style={{ backgroundImage: "url('images/img_group12.svg')" }}
              >
                <Text className="font-normal lg:mb-[115px] xl:mb-[131px] 2xl:mb-[148px] 3xl:mb-[177px] 2xl:ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-indigo_A700_e5 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 uppercase w-[auto]">
                  Contact
                </Text>
              </Column>
              <Text className="absolute bottom-[9%] font-inter font-normal leading-[135.69%] not-italic right-[8%] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_601 w-[70%]">
                Don’t feel hestitate, feel free to contact us anytime
              </Text>
              <Text className="absolute font-normal font-productsansmedium right-[0] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 top-[35%] w-[auto]">
                Any questions in mind?
              </Text>
            </Stack>
            <Column className="lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[44%]">
              <Row className="items-center ml-[1px] w-[82%]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  alt="call"
                />
                <Text className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  +91 9324174499
                </Text>
              </Row>
              <Row className="lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[9%]"
                  alt="checkmark"
                />
                <Text className="font-normal lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] mt-[2px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  varnika@mybigleap.in
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="xl:mt-[109px] 2xl:mt-[123px] 3xl:mt-[147px] lg:mt-[95px] w-[45%]">
            <Row className="font-productsanslight items-center justify-between w-[100%]">
              <Input
                className="font-normal p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_904 text-gray_904 w-[100%]"
                wrapClassName="w-[47%]"
                name="GroupSeven"
                placeholder="Rohit Jawale"
                variant="OutlineIndigoA702"
              ></Input>
              <Input
                className="font-normal p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_602 text-gray_602 w-[100%]"
                wrapClassName="w-[47%]"
                type="email"
                name="GroupFour"
                placeholder="E-mail"
              ></Input>
            </Row>
            <Input
              className="font-normal font-productsanslight p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_602 text-gray_602 w-[100%]"
              wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[15px] w-[100%] xl:mt-[17px]"
              name="GroupSix"
              placeholder="Subject"
              size="md"
            ></Input>
            <TextArea
              className="font-normal font-productsanslight lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_602 text-gray_602 w-[100%]"
              name="GroupFive"
              placeholder="Message"
            ></TextArea>
            <Button
              className="font-bold font-manrope lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[34%]"
              size="lg"
              variant="FillIndigoA401"
            >
              Submit
            </Button>
          </Column>
        </Row>
        <Column className="font-manrope items-center lg:mt-[121px] xl:mt-[138px] 2xl:mt-[156px] 3xl:mt-[187px] w-[100%]">
          <Column className="bg-gray_905 items-center justify-end lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
            <Img
              src="images/img_group55.svg"
              className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] mt-[3px] w-[9%]"
              alt="GroupFiftyFive"
            />
            <Row className="justify-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[37%]">
              <Text className="font-normal mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Library
              </Text>
              <Text className="font-normal mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Testimonials
              </Text>
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                About
              </Text>
              <Text className="font-normal mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Contact
              </Text>
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Help
              </Text>
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Privacy Policy
              </Text>
            </Row>
            <Column className="items-center lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[81%]">
              <Line className="bg-white_A700_6c h-[1.06px] w-[100%]" />
              <Row className="items-end justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text className="font-normal mb-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_300 w-[auto]">
                  © 2021 My Big Leap | Mumbai. All rights reserved
                </Text>
                <Img
                  src="images/img_sociallinks.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[13%]"
                  alt="SocialLinks"
                />
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default MybigleapHomepageUIRohitPage;
