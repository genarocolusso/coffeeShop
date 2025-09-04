import { useForm, SubmitHandler, UseFormRegister, UseFormHandleSubmit, FormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPinLine } from "phosphor-react";
import * as z from "zod";
import * as S from "./styles";

type Inputs = {
  zipcode: string;
  street: string;
  number: string;
  number2?: string; // opcional
  district: string;
  city: string;
  state: string;
};

interface CheckoutAddressProps {
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  errors: FormState<Inputs>["errors"];
  onSubmit: SubmitHandler<Inputs>;
}

export const CheckoutAddress = ({ register, errors }: CheckoutAddressProps) => {
  return (
    <S.Container>
      <S.headingInfos>
        <S.MapPin>
          <MapPinLine />
        </S.MapPin>
        <S.HeadFormText>
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </S.HeadFormText>
      </S.headingInfos>

      <S.Form id="address-form">
        <S.InputBox>
          <S.Inputbox maxWidth={200} placeholder="CEP" {...register("zipcode")} />
          {errors.zipcode && <span>{errors.zipcode.message}</span>}
        </S.InputBox>

        <S.InputBox>
          <S.Inputbox placeholder="Rua" {...register("street")} />
          {errors.street && <span>{errors.street.message}</span>}
        </S.InputBox>

        <S.InputWrapper>
          <S.InputBox>
            <S.Inputbox maxWidth={200} placeholder="Número" {...register("number")} />
            {errors.number && <span>{errors.number.message}</span>}
          </S.InputBox>

          <S.InputBox>
            <S.Inputbox placeholder="Complemento" {...register("number2")} />
            {/* sem erro pq é opcional */}
          </S.InputBox>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputBox>
            <S.Inputbox maxWidth={200} placeholder="Bairro" {...register("district")} />
            {errors.district && <span>{errors.district.message}</span>}
          </S.InputBox>

          <S.InputBox>
            <S.Inputbox placeholder="Cidade" {...register("city")} />
            {errors.city && <span>{errors.city.message}</span>}
          </S.InputBox>

          <S.InputBox>
            <S.Inputbox maxWidth={60} placeholder="UF" {...register("state")} />
            {errors.state && <span>{errors.state.message}</span>}
          </S.InputBox>
        </S.InputWrapper>
      </S.Form>
    </S.Container>
  );
};
