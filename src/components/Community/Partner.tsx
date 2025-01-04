import { Button, Flex, Text } from "@chakra-ui/react"

const Partner = () => {
  return (
    <>
      <Flex
        width={{ base: "100%", md: "600px", xl: "800px" }}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#FF3D00"}
        mt={"50px"}
        mb={"80px"}
        mx={"auto"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"column"}
          py={"20px"}
          gap={"20px"}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text
              fontFamily={"Poppins"}
              fontSize={{ base: "25px", md: "32px" }}
              fontWeight={700}
              color={"#FFFFFF"}
              textAlign={"center"}
            >
              Partner with Us
            </Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"column"}
            gap={"10px"}
          >
            <Flex maxW={{ base: "350px", md: "600px" }}>
              <Text
                fontFamily={"Poppins"}
                fontSize={{ base: "13px", md: "15px" }}
                fontWeight={500}
                color={"#FFFFFF"}
                textAlign={"center"}
              >
                Make a difference with us! Partner to celebrate diversity,
                empower communities, and create lasting opportunities.
              </Text>
            </Flex>
            <Flex>
              <Button
                variant={"none"}
                width={{ base: "150px", md: "170px" }}
                height={{ base: "35px", md: "40px" }}
                bgColor={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={400}
                fontSize={{ base: "14px", md: "16px" }}
                color={"#FFFFFF"}
              >
                Become a Partner
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Partner
