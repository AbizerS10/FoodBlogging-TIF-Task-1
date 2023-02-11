import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function MyCard({ src, heading }) {
  return (
    <Card
      width={["271px", "381px"]}
      height={["484px", "554px"]}
      p={["16px", "27px"]}
      border={[
        "0.876168px solid #373737",
        "1.37039px solid rgba(147, 162, 211, 0.38)",
      ]}
      borderRadius={["26.7725px", "20.937px"]}
    >
      <CardBody p={"0"}>
        <Image p={["17px", "0"]} src={src} alt={heading} borderRadius="lg" />
        <Stack
          mt={["22px", "34.5px"]}
          align={["center", "start"]}
          spacing={["3", "7"]}
        >
          <Heading
            fontFamily={"Poppins"}
            fontWeight={"700"}
            fontSize={["16px", "21px"]}
            lineHeight={["35px", "27px"]}
            color={"#0E2368"}
            letterSpacing={["0.05em", "0"]}
          >
            {heading}
          </Heading>
          <Text
            width={["213px", "295px"]}
            height={["106px", "81px"]}
            fontFamily={["Source Sans Pro", "Open Sans"]}
            fontWeight={"400"}
            fontSize={["12px", "15px"]}
            lineHeight={["22px", "27px"]}
            letterSpacing={["-0.01em", "-0.02em"]}
            color={"#444957"}
            textOverflow={"revert-layer"}
            noOfLines={["5", "3"]}
          >
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley....
          </Text>
        </Stack>
        <Button
          py={["4px", "3px"]}
          px={["33px", "26px"]}
          gap={["13px", "10px"]}
          width={["118px", "131px"]}
          height={["26px", "42px"]}
          display={["block", "inline-block"]}
          border={["2px solid #424961", "1px solid #424961"]}
          borderRadius={["27px", "21px"]}
          fontFamily={"Source Sans Pro"}
          fontWeight={"600"}
          fontSize={["11px", "16.4447px"]}
          letterSpacing={"0.03em"}
          color={"#424961"}
          bgColor={"#FFFFFF"}
          mt={["36px", "30.4px"]}
          mx={"auto"}
        >
          Read More
        </Button>
      </CardBody>
    </Card>
  );
}

export default MyCard;
