import {
  Flex,
  HStack,
  Checkbox,
  Text,
  Box,
  Badge,
  Divider,
  Button,
} from "@chakra-ui/react";


const CandidateFilter = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} padding={"1rem"} bg={"white"}>
        <Box display={"flex"}>
          <Checkbox borderRadius={"2px"}></Checkbox>
          <Text ml="32px" alignSelf="center" color="#1D4ED8">
            256 Candidate
          </Text>
        </Box>
        <HStack>
          <Text color="#1D4ED8" bg={'white'} as={Button}>
            Qualifed
          </Text>
          <Divider orientation="vertical" />
          <Box as={Button} bg={"white"}>
            <Text>Task</Text>
            <Badge padding={"5px"} borderRadius={"100%"} marginLeft={"10px"}>
              26
            </Badge>
          </Box>
          <Divider orientation="vertical" />
          <Box as={Button} bg={"white"}>
            <Text>Disqualifed</Text>
            <Badge padding={"5px"} borderRadius={"100%"} marginLeft={"10px"}>
              70
            </Badge>
          </Box>
        </HStack>
      </Flex>
    </>
  );
};

export default CandidateFilter;
