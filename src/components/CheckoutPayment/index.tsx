import { Money, CreditCard, Bank, Receipt } from "phosphor-react";
import * as S from "./styles";
import { useState } from "react";

const paymentMethods = [
  { name: "Cartão de crédito", icon: <Money /> },
  { name: "Cartão de débito", icon: <Bank /> },
  { name: "Dinheiro", icon: <CreditCard /> },
];

export const CheckoutPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  const isSelected = (i: number) =>
    paymentMethod.name == paymentMethods[i].name;
  return (
    <S.Container>
      <S.headingInfos>
        <S.HIcon>
          <Receipt />
        </S.HIcon>
        <S.HeadFormText>
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </S.HeadFormText>
      </S.headingInfos>
      <S.MethodsContainer>
        {paymentMethods.map((paymentMethod, idx) => (
          <S.PaymentMethodCard
            key={idx}
            selected={isSelected(idx)}
            onClick={() => setPaymentMethod(paymentMethods[idx])}
          >
            {paymentMethod.icon}
            <S.PaymentTitle> {paymentMethod.name} </S.PaymentTitle>
          </S.PaymentMethodCard>
        ))}
      </S.MethodsContainer>
    </S.Container>
  );
};
