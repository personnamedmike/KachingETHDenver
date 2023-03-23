import {
  Box,
  Button,
  GridItem,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "../context/FormContext";
import React from "react";
import { FaDiscord, FaGoogle } from "react-icons/fa";

/**
 * @remarks - this component lets user review the transaction before sending
 * @returns - review form that displays the amount, asset, and username of the transaction
 */
const ReviewTransfer = () => {
  const {
    isActiveGoogle,
    isActiveDiscord,
    amount,
    asset,
    username,
    setRenderTxPage,
    setRenderReviewPage,
  } = useFormContext();

  const handleCancel = () => {
    setRenderReviewPage(false);
    setRenderTxPage(true);
  };

  const handleSendTx = () => {
    setRenderReviewPage(false);
  };

  return (
    <>
      <Box fontWeight="extrabold" fontSize="5rem">
        <HStack
          color="formBlueDark"
          fontSize={["4rem", "5rem"]}
          justifyContent="space-between"
        >
          <Box>
            <Text color="formBlueDark" opacity={0.5}>
              Send
            </Text>
          </Box>
          <Button
            variant="none"
            opacity={0.5}
            fontSize={["4rem", "5rem"]}
            color="cancelOrange"
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>
        </HStack>
        <SimpleGrid columns={1} spacing={0} mb={"1rem"}>
          <GridItem>
            <Text color="formGreen">{amount}</Text>
          </GridItem>
          <GridItem my={-2}>
            <Box>
              <Text color="assetOrange">{asset}</Text>
            </Box>
          </GridItem>
          <GridItem my={-2}>
            <HStack justifyContent="start" px="0.5rem">
              <Box mr={"1rem"}>
                <Text color="loginGray">To</Text>
              </Box>
              <Box textAlign="center" placeSelf="center">
                {/* vector bg image*/}
                <Image
                  src={"social-bg-dark.svg"}
                  alt=""
                  ml="0.15rem"
                  w="4rem"
                  color="black"
                />
                <Box position="absolute" mt="-3.15rem" ml="1rem">
                  {/* discord logo */}
                  {isActiveDiscord ? (
                    <FaDiscord color="white" size="2.25rem" />
                  ) : (
                    <FaGoogle color="white" size="2.25rem" />
                  )}
                </Box>
              </Box>
            </HStack>
          </GridItem>
          <GridItem my={-2}>
            <Text color="formLightBlue">{username}</Text>
          </GridItem>
          <GridItem>
            <Box mx="-1.5rem" mt="2rem">
              <Link href="/confirmation">
                <Button onClick={() => handleSendTx()} variant="formGreen">
                  Send!
                </Button>
              </Link>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ReviewTransfer;