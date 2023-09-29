import { IconType } from "react-icons";
import { GoHome ,GoMail} from "react-icons/go";
import { PiUsersThreeLight, PiNotebookThin } from "react-icons/pi";
import {
  BsCalendarCheck,
  BsChevronRight,
  BsShare,
  BsTag,
} from "react-icons/bs";
import { AiOutlineHeart, AiOutlineFileText } from "react-icons/ai";
import { BiUserCheck, BiUserX, BiUserVoice } from "react-icons/bi";

export type LinkItemProps = {
  name: string;
  icon: IconType;
};
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: GoHome },
  { name: "User", icon: PiUsersThreeLight },
  { name: "Calender", icon: BsCalendarCheck },
  { name: "Share", icon: BsShare },
  { name: "File", icon: AiOutlineFileText },
  { name: "Docs", icon: PiNotebookThin },
  { name: "Favourite", icon: AiOutlineHeart },
  { name: "button", icon: BsChevronRight },
];
const CallToActionItems: Array<LinkItemProps> = [
  { name: "Tag", icon: BsTag },
  { name: "User close", icon: BiUserX },
  { name: "User Check", icon: BiUserCheck },
  { name: "User voice", icon: BiUserVoice },
  { name: "mail", icon: GoMail },
];

const FilterItemData:Array<LinkItemProps>=[
  { name: "Personal Information", icon: AiOutlineFileText },
  { name: "Education", icon: GoHome },
  { name: "Work Experience", icon: AiOutlineFileText },
  { name: "Activity Filter", icon: AiOutlineFileText}

]
export { LinkItems, CallToActionItems,FilterItemData };
