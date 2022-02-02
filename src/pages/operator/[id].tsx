import { useRouter } from "next/router";
import { NextPage } from "next";
import { OperatorForm, MainLayout } from "../../components";

const Payment: NextPage = () => {
  const router = useRouter();
  const id = router.query.id + "";

  return (
    <MainLayout>
      <OperatorForm name={id} />
    </MainLayout>
  );
};

export default Payment;
