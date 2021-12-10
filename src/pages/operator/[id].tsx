import { useRouter } from 'next/router'
import operators from '../../components/operator/OperatorStorage'
import OperatorForm from '../../components/operator/OperatorForm'
import Footer from '../../components/Footer'

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
