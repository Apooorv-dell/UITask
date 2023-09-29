import {Box} from "@chakra-ui/react"
import CandidateFilter from './CandidateFilter';
import CandidateList from "./CandidateList";



const CanddidateBorad = () => {

  return (
<>
<Box m='16px'>
<CandidateFilter />
<CandidateList  />
</Box>
</>
  )
}

export default CanddidateBorad