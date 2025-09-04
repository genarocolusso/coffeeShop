import { Receipt } from "phosphor-react";
import * as S from "./styles";
import { useState } from "react";
import { paymentMethods } from "../CheckoutContainer";

interface CheckoutPaymentProps {
  paymentMethodidx: number;
  setPaymentMethod: (i: number) => void;
}
export const CheckoutPayment = ({ paymentMethodidx, setPaymentMethod }: CheckoutPaymentProps) => {
  const isSelected = (i: number) => paymentMethods[paymentMethodidx].name == paymentMethods[i].name;
  return (
    <S.Container>
      <S.headingInfos>
        <S.HIcon>
          <Receipt />
        </S.HIcon>
        <S.HeadFormText>
          <h1>Pagamento</h1>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </S.HeadFormText>
      </S.headingInfos>
      <S.MethodsContainer>
        {paymentMethods.map((paymentMethod, idx) => (
          <S.PaymentMethodCard key={idx} selected={isSelected(idx)} onClick={() => setPaymentMethod(idx)}>
            {paymentMethod.icon}
            <S.PaymentTitle> {paymentMethod.name} </S.PaymentTitle>
          </S.PaymentMethodCard>
        ))}
      </S.MethodsContainer>
    </S.Container>
  );
};
