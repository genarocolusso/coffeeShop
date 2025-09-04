import { Money, CreditCard, Bank, Receipt } from "phosphor-react";
import { useForm, SubmitHandler, UseFormRegister, UseFormHandleSubmit, FormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutAddress } from "../CheckoutAddress";
import { CheckoutPayment } from "../CheckoutPayment";
import { CheckoutCartContainer } from "../CheckoutCartContainer";
import * as S from "./styles";
import { z } from "zod";
import { useCart } from "../../context";
import { useState } from "react";
export type Inputs = {
  zipcode: string;
  street: string;
  number: string;
  number2?: string; // opcional
  district: string;
  city: string;
  state: string;
};
export const paymentMethods = [
  { name: "Cartão de crédito", icon: <Money /> },
  { name: "Cartão de débito", icon: <Bank /> },
  { name: "Dinheiro", icon: <CreditCard /> },
];
const schema = z.object({
  zipcode: z.string().min(1, { message: "CEP é obrigatório" }),
  street: z.string().min(10, { message: "Rua é obrigatória" }),
  number: z.string().min(1, { message: "Número é obrigatório" }),
  number2: z.string().optional(), // agora é opcional
  district: z.string().min(1, { message: "Bairro é obrigatório" }),
  city: z.string().min(1, { message: "Cidade é obrigatória" }),
  state: z.string().min(1, { message: "UF é obrigatória" }),
});

export const CheckoutContainer = () => {
  const { state } = useCart();
  const [paymentMethodidx, setPaymentMethod] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const payload = {
      ...data,
      cart: [...state.items],
      totalPrice: state.totalPrice,
      paymentMethod: paymentMethods[paymentMethodidx].name,
    };
    console.log(payload);
  };

  return (
    <S.Container>
      <S.CheckoutForms>
        <CheckoutAddress errors={errors} handleSubmit={handleSubmit} register={register} onSubmit={onSubmit} />
        <CheckoutPayment paymentMethodidx={paymentMethodidx} setPaymentMethod={setPaymentMethod} />
      </S.CheckoutForms>
      <CheckoutCartContainer onSubmit={onSubmit} handleSubmit={handleSubmit} />
    </S.Container>
  );
};
