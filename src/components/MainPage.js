import React from "react";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

function MainPage() {
  return (
    <Flex
      width={["375px", "1440px"]}
      height={["852px", "839px"]}
      justify={"space-between"}
      direction={["column-reverse", "row"]}
      fontStyle={"normal"}
    >
      <Box
        ps={["0px", "100px"]}
        width={["375px", "688px"]}
        height={["426px", "804px"]}
        display={["flex", "block"]}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          w={"107px"}
          h={"83px"}
          mt={"33px"}
          src="./images/brand.png"
          alt="logo"
          display={["none", "block"]}
        />
        <Flex
          width={["240px", "345px"]}
          height={["259px", "392px"]}
          mt={["0px", "111px"]}
          direction={"column"}
          justify={"space-between"}
          align={["center", "start"]}
          textAlign={["center", "left"]}
        >
          <Text
            color={"#0E2368"}
            fontFamily={"Source Sans Pro"}
            fontWeight={"700"}
            fontSize={["38px", "62px"]}
            lineHeight={["46px", "69px"]}
          >
            Discover the{" "}
            <Text display={"inline"} color={"#E23744"}>
              Best
            </Text>{" "}
            Food and Drinks
          </Text>
          <Text
            color={"#444957"}
            fontFamily={"Open Sans"}
            fontWeight={"400"}
            fontSize={["11px", "16.4447px"]}
            lineHeight={["18px", "27px"]}
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <Button
            py={["12px", "14px"]}
            px={["30px", "34px"]}
            width={["120px", "190px"]}
            height={["40px", "63px"]}
            backgroundColor={"#E23744"}
            borderRadius={["30px", "34px"]}
            fontFamily={"Open Sans"}
            fontWeight={"700"}
            fontSize={["12.2664px", "18px"]}
            lineHeight={["32px", "36px"]}
            letterSpacing={"0.01em"}
            color={"#FFFFFF"}
            border={"0"}
          >
            Explore Now!
          </Button>
        </Flex>
      </Box>
      <Box>
        <Image
          width={["378px", "735px"]}
          height={["413px", "804px"]}
          src={"./images/pizza.png"}
          borderRadius={["0px 0px 0px 102.35px", "0px 0px 0px 198.902px"]}
        />
        <Image
          pos={"absolute"}
          width={["375px", "752px"]}
          height={["426px", "839px"]}
          left={["0px", "688px"]}
          top={["0px", "0px"]}
          src={"./images/redBack.png"}
        />
        <Button
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={["4px", "3px"]}
          px={["33px", "26px"]}
          gap={["13px", "10px"]}
          pos={"absolute"}
          width={["88px", "122px"]}
          height={["31px", "42px"]}
          left={["268.5px", "1177px"]}
          top={["18px", "32px"]}
          border={"1px solid #FFFFFF"}
          borderRadius={["27px", "21px"]}
          backgroundColor={"transparent"}
          fontFamily={"Source Sans Pro"}
          fontWeight={"600"}
          fontSize={["11px", "16px"]}
          lineHeight={["46px", "36px"]}
          letterSpacing={"0.03em"}
          color={"#FFFFFF"}
        >
          Get In Touch
        </Button>
      </Box>
    </Flex>
  );
}

export default MainPage;
