import { CheckoutAddress } from "../CheckoutAddress";
import { CheckoutPayment } from "../CheckoutPayment";
import { CheckoutCartContainer } from "../CheckoutCartContainer";
import * as S from "./styles";

export const CheckoutContainer = () => {
  return (
    <S.Container>
      <S.CheckoutForms>
        <CheckoutAddress />
        <CheckoutPayment />
      </S.CheckoutForms>
      <CheckoutCartContainer />
    </S.Container>
  );
};
