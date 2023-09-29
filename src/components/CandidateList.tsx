import {
  Stack,
  Card,
  CardBody,
  Text,
  Heading,
  Image,
  Checkbox,
  Box
} from "@chakra-ui/react";

import data from "../SampleData/candidate.json";
import HashTagList from "./HashTagList";
import SkillBadge from "./SkillBadge";



const CandidateList = () => {

  return (
    <>
      <Box overflow={'scroll'} h={'900px'}>
          {data.map((c) => (
            <Card
              key={c.id}
              my={"8px"}
              padding={"16px"}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
            >
              <Checkbox   ></Checkbox>
              <Image
                ml={"24px"}
                mt={"3rem"}
                objectFit="cover"
                borderRadius={"100%"}
                boxSize={"100px"}
                src={c.ImageUrl}
                alt="AS"
              />
              <Stack ml={"24px"}>
                <CardBody>
                  <Heading size="md">{c.name}</Heading>
                  <Text py={"8px"} fontWeight={"medium"}>
                    Rihya , USA
                  </Text>
                  <Text>
                    {c.degree} - {c.university} ({c.yearOfStarting}-
                    {c.yearOfPassing})
                  </Text>
                  <HashTagList tagArray={c.tagArray} />
                  <SkillBadge badgeList={c.skill} />
                </CardBody>
              </Stack>
            </Card>
          ))}
      </Box>
    </>
  );
};

export default CandidateList;
