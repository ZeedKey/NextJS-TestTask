import operators from '../storage/OperatorStorage'
import OperatorContainer from '../containers/OperatorContainer'
import Box from '@mui/material/Box'

const OperatorList = () => {
    return (
        <Box sx={BoxStyle}>

            {
                //Generates the list of operators
                operators.map((curr_op) => <OperatorContainer props={curr_op} />)
            }

        </Box>

    )
}
const BoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
}
export default OperatorList
