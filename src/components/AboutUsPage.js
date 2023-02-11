import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function AboutUsPage() {
  return (
    <Flex
      width={["375px", "1440px"]}
      height={["516px", "653px"]}
      backgroundColor={"#FFFFFF;"}
      justify={"center"}
      align={"end"}
      background={[
        "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);",
        "transparent",
      ]}
    >
      <Flex
        width={["375px", "1440px"]}
        height={["516px", "467px"]}
        justify={"space-evenly"}
        align={"center"}
        background={[
          "transparent",
          "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);",
        ]}
      >
        <Image
          width={"384px"}
          height={"468px"}
          src={"./images/aboutUsPic.png"}
          display={["none", "block"]}
        />
        <Flex
          height={["235px", "254px"]}
          width={["275px", "447px"]}
          fontStyle={"normal"}
          direction={"column"}
          justify={"space-between"}
          align={["center", "start"]}
          textAlign={["center", "left"]}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"600"}
            fontSize={["26px", "45px"]}
            color={"#0E2368"}
            lineHeight={["35px", "27px"]}
          >
            About Us
          </Text>
          <Text
            fontFamily={"Open Sans"}
            fontWeight={"400"}
            fontSize={["11px", "15px"]}
            color={"#444957"}
            lineHeight={["21px", "27px"]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <Button
            height={["25px", "42px"]}
            width={["96px", "132px"]}
            py={["4px", "3px"]}
            px={["33px", "26px"]}
            gap={["13px", "10px"]}
            backgroundColor={"#E23744"}
            borderRadius={["27px", "21px"]}
            fontFamily={"Source Sans Pro"}
            fontWeight={"600"}
            fontSize={["11px", "16px"]}
            lineHeight={["46px", "36px"]}
            letterSpacing={"0.03em"}
            color={"#FFFFFF"}
            border={"0px"}
          >
            Read More
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutUsPage;
