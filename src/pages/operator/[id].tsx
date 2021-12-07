import styled from 'styled-components'
import { useRouter } from 'next/router';
import operators from '../../components/operator/storage/OperatorStorage';
import OperatorForm from '../../components/operator/forms/OperatorForm';
import Footer from '../../components/footer/Footer';

const Payment = () => {
    const router = useRouter();

    const id = Number(router.query.id);
    const opName = operators[id-1].op_name;

    return (
        <>
            <OperatorForm opName={opName}/>
            <Footer/>
        </>
    )
}

export default Payment
