import operators from '../storage/OperatorStorage'
import OperatorContainer from '../containers/OperatorContainer'
import styled from 'styled-components'

const BoxStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

const OperatorList = () => {
    return (
        <BoxStyled>

            {
                operators.map((curr_op) => <OperatorContainer 
                id={curr_op.id} 
                op_name={curr_op.op_name}
                img_url={curr_op.img_url}
                key = {curr_op.op_name}/>)
            }

        </BoxStyled>
    )
}

export default OperatorList
