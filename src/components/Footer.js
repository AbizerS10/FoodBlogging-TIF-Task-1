import { Box, Flex, Image, Text, Icon, IconButton } from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <Flex
      width={["375px", "1440px"]}
      height={["588px", "362px"]}
      direction={["column", "row"]}
      align={"center"}
      justify={"space-evenly"}
      fontStyle={"normal"}
      bgColor={"#F8F8F8"}
      fontFamily={"Source Sans Pro"}
      fontWeight={"400"}
      fontSize={["8.76px", "14.6559px"]}
      lineHeight={["12px", "23px"]}
      color={"#646874"}
    >
      <Image
        width={["74px", "161px"]}
        height={["58px", "125px"]}
        src={"./images/brand.png"}
        alt="logo"
      />
      <Flex
        width={["294px", "232px"]}
        height={["116px", "186px"]}
        direction={"column"}
        justify={"space-between"}
      >
        <Text
          fontWeight={"600"}
          fontSize={["15.771px", "18.8433px"]}
          lineHeight={["35px", "27px"]}
          letterSpacing={["0.03em", "0.02em"]}
          color={"#0E2368"}
        >
          Contact Us
        </Text>
        <Text>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </Text>
        <Text>example2020@gmail.com</Text>
        <Text>(904) 443-0343</Text>
      </Flex>

      <Flex
        direction={"column"}
        width={["294px", "87px"]}
        height={["129px", "186px"]}
        justify={"space-between"}
        align={"start"}
      >
        <Text
          fontWeight={"600"}
          fontSize={["15.771px", "18.8433px"]}
          lineHeight={["35px", "27px"]}
          letterSpacing={["0.03em", "0.02em"]}
          color={"#0E2368"}
        >
          More
        </Text>
        <Text>About Us</Text>
        <Text>Products</Text>
        <Text>Carrer</Text>
        <Text>Contact Us</Text>
      </Flex>
      <Flex
        direction={["column-reverse","column"]}
        justify={["center", "space-between"]}
        align={["center","end"]}
        width={"197px"}
        height={["109px", "186px"]}
      >
        <Box width={["80px", "129px"]}>
          <Text
            fontWeight={"400"}
            fontSize={"18.8433px"}
            lineHeight={"27px"}
            display={["none", "block"]}
            letterSpacing={"0.03em"}
            color={"#0E2368"}
          >
            Social Links
          </Text>
          <Flex mt={"10px"} justify={"space-between"}>
            <IconButton
              as={GrInstagram}
              width={["12px", "21px"]}
              height={["12px", "21px"]}
              color={"#0E2368"}
            />
            <IconButton
              as={BsTwitter}
              width={["12px", "21px"]}
              height={["12px", "21px"]}
              color={"#0E2368"}
            />
            <IconButton
              as={FaFacebookF}
              width={["12px", "21px"]}
              height={["12px", "21px"]}
              color={"#0E2368"}
            />
          </Flex>
        </Box>
        <Text fontFamily={["Roboto", "Source Sans Pro"]}>
          © 2022 Food Truck Example
        </Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
