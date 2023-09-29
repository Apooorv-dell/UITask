import {Box} from "@chakra-ui/react"
import FilterHeader from "./FilterHeader"
import FilterItem from "./FilterItem"


const Filter = () => {
  return (
     <>
     <Box marginY={'32px'} ml={'50px'} mr={'32px'} >
         <FilterHeader/>
         <FilterItem/>
     </Box>
     </>
  )
}

export default Filter