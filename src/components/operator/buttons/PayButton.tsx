import styled from 'styled-components'
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const PayButton = ( {id}: any ) => {
    const router = useRouter();
    const toPay = () => router.push('/operator/' + id);

    return (
        <Button variant="contained" onClick={toPay}>PAY</Button>
    )
}

export default PayButton
