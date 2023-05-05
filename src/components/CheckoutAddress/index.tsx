import { useForm, SubmitHandler } from "react-hook-form";
import { MapPinLine } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styles";
import { useEffect } from "react";

type Inputs = {
  zipcode: string;
  street: string;
  number: string;
  number2?: string;
  district: string;
  city: string;
  state: string;
};

const schema = z.object({
  zipcode: z.string().min(1, { message: "Required" }),
  street: z.string().min(1, { message: "Required" }),
  number: z.string().min(1, { message: "Required" }),
  number2: z.string().min(1, { message: "Required" }),
  district: z.string().min(1, { message: "Required" }),
  city: z.string().min(1, { message: "Required" }),
  state: z.string().min(1, { message: "Required" }),
});

export const CheckoutAddress = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <S.Inputbox maxWidth={200} placeholder="CEP" {...register("zipcode")} />

        <S.Inputbox placeholder="Rua" {...register("street")} />
        <S.InputWrapper>
          <S.Inputbox
            maxWidth={200}
            placeholder="Número"
            {...register("number")}
          />
          <S.Inputbox placeholder="Complemento" {...register("number2")} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Inputbox
            maxWidth={200}
            placeholder="Bairro"
            {...register("district")}
          />

          <S.Inputbox placeholder="Cidade" {...register("city")} />
          <S.Inputbox maxWidth={60} placeholder="UF" {...register("state")} />
        </S.InputWrapper>
      </S.Form>
    </S.Container>
  );
};
