import {
  Flex,
  Container,
  Text,
  Stack,
  Box,
  Card,
  Tabs,
  TabPanels,
  TabPanel,
  CardBody,
  Image,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MyCard from "./MyCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Articles() {
  const [tabIndex, setTabIndex] = useState(0);

  const articleData = [
    [
      {
        src: "./images/article1.png",
        heading: "Grilled Tomatoes at Home",
        body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        src: "./images/article2.png",
        heading: "Snacks for Travel",
        body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        src: "./images/article3.png",
        heading: "Post-workout Recipes",
        body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
    ],
    [
      {
        src: "./images/article4.png",
        heading: "How To Grill Corn",
        body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        src: "./images/article5.png",
        heading: "Crunchwrap Supreme",
        body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        src: "./images/article6.png",
        heading: "Broccoli Cheese Soup",
        body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
    ],
  ];

  return (
    <Flex
      width={["375px", "1440px"]}
      height={["1927px", "995px"]}
      align={"center"}
      justify={"center"}
      fontStyle={"normal"}
    >
      <Flex
        justify={"space-between"}
        direction={"column"}
        align={["center", "start"]}
        width={["271px", "1224px"]}
        height={["1649px", "679px"]}
      >
        <Text
          fontFamily={"Source Sans Pro"}
          fontWeight={"600"}
          fontSize={["28px", "56px"]}
          lineHeight={["54px", "42px"]}
          letterSpacing={"0.04em"}
          color={"#0E2368"}
        >
          Latest Articles
        </Text>
        <Box mt={["23px", "83px"]}>
          <Tabs index={tabIndex}>
            <TabPanels>
              {articleData.map((tabpanel) => {
                return (
                  <TabPanel p={"0"}>
                    <Flex
                      direction={["column", "row"]}
                      justify={"space-between"}
                      align={"center"}
                      width={["271px", "1224px"]}
                      height={["1571px", "554px"]}
                    >
                      {tabpanel.map((obj) => {
                        return <MyCard src={obj.src} heading={obj.heading} />;
                      })}
                    </Flex>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </Box>
        <Flex
          width={["271px", "1440px"]}
          justify={["center"]}
          align={["center"]}
          mt={["66px", "64px"]}
        >
          <Flex
            width={["90px", "114px"]}
            justify={"space-between"}
            align={"center"}
            color={"#424961"}
          >
            <IconButton
              border={"1px solid #AFAFAF"}
              borderRadius={"5px"}
              width={["25px", "28px"]}
              height={["25px", "28px"]}
              aria-label="Call Sage"
              fontSize={["24px ", "30px"]}
              icon={<ChevronLeftIcon />}
              onClick={() =>
                setTabIndex((tabIndex) =>
                  tabIndex > 0 ? tabIndex - 1 : tabIndex
                )
              }
            />
            <Text
              width={["25px","30px"]}
              height={"28px"}
              fontFamily={"Source Sans Pro"}
              fontWeight={"400"}
              fontSize={["16px", "22px"]}
              lineHeight={"27px"}
              align={"center"}
            >
              {tabIndex + 1}/{articleData.length}
            </Text>
            <IconButton
              border={"1px solid #AFAFAF"}
              borderRadius={"5px"}
              width={["25px", "28px"]}
              height={["25px", "28px"]}
              aria-label="Call Sage"
              fontSize={["24px ", "30px"]}
              icon={<ChevronRightIcon />}
              onClick={() =>
                setTabIndex((tabIndex) =>
                  tabIndex < articleData.length - 1 ? tabIndex + 1 : tabIndex
                )
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Articles;
