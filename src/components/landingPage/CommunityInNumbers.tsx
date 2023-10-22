import { css } from "@ss/css";
import { HStack, styled, VStack } from "@ss/jsx";
import Image from "next/image";

import Willow from "@/assets/landing-page/willow.svg";

const Wrapper = styled("section", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF7EF",
    borderTop: "20px solid #F48B01",
    borderBottom: "20px solid #F48B01",
    width: "100%",
    color: "#000",
  },
});

const NumberHeader = styled("h4", {
  base: {
    color: "#f48b01",
    fontSize: 40,
    fontWeight: 700,
  },
});

const NumberText = styled("p", {
  base: {
    mt: "-16px",
  },
});

const CommunityInNumbersPage = () => {
  return (
    <Wrapper>
      <VStack gap="0" h="100%">
        <h2 className={css({ mt: "50px" })}>Community In Numbers</h2>
        <p className={css({ mt: "11px" })}>Some text about this section.</p>
        <HStack
          w="100vw"
          h="100%"
          mt="51px"
          mb="92px"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Image src={Willow} alt="Willow" height="383" />
          <VStack alignItems="space-between" h="100%" alignSelf="stretch">
            <VStack gap="0">
              <NumberHeader>12345</NumberHeader>
              <NumberText>Some text about this section</NumberText>
            </VStack>
            <VStack gap="0">
              <NumberHeader>12345</NumberHeader>
              <NumberText>Some text about this section</NumberText>
            </VStack>
            <VStack gap="0">
              <NumberHeader>12345</NumberHeader>
              <NumberText>Some text about this section</NumberText>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Wrapper>
  );
};

export default CommunityInNumbersPage;
