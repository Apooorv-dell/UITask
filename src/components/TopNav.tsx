import { Flex } from "@chakra-ui/react";
import CallToAction from "./CallToAction";
import DropDown from "./DropDown";
import Header from "./Header";
import { useState } from "react";
import { MenuType } from "../util/MenuData";

const TopNav = () => {
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<MenuType | null>(null);
  return (
    <>
      <Flex marginY={"32px"} ml={'50px'} justifyContent={"space-between"}  >
        <Header title="London Intership Program" text="London" />
        <DropDown
          onSelectedOpportunity={(opportunity) =>
            setSelectedOpportunity(opportunity)
          }
          selectedOpportunity={selectedOpportunity}
        />
        <CallToAction />
      </Flex>
    </>
  );
};

export default TopNav;
