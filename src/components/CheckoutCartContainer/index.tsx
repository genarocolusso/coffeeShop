import { Minus, Plus, Trash } from "phosphor-react";

import * as S from "./styles";
import { useCart } from "../../context";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { Inputs } from "../CheckoutContainer";

interface checkoutCartContainer {
  handleSubmit: UseFormHandleSubmit<Inputs>;
  onSubmit: SubmitHandler<Inputs>;
}
export const CheckoutCartContainer = ({ handleSubmit, onSubmit }: checkoutCartContainer) => {
  const { dispatch, state } = useCart();
  const Items = state.items;

  return (
    <S.Container>
      <S.CheckoutItemList>
        {Items.map((item) => (
          <S.CheckoutItem key={item.name}>
            <S.CheckoutItemImage src={item.img} />
            <S.CheckoutItemActionDetails>
              <S.CheckoutItemTitle>{item.name}</S.CheckoutItemTitle>
              <S.CheckoutItemActions>
                <S.CoffeeAddInput>
                  <S.CoffeeAddInputButtons
                    onClick={() =>
                      dispatch({
                        payload: { item: item.name },
                        type: "decrement",
                      })
                    }
                  >
                    <Minus size={16} weight="fill" />
                  </S.CoffeeAddInputButtons>
                  <S.CoffeeQuantity>{item.quantity}</S.CoffeeQuantity>
                  <S.CoffeeAddInputButtons
                    onClick={() =>
                      dispatch({
                        payload: {
                          item: {
                            img: item.img,
                            name: item.name,
                            description: item.description,
                            quantity: 1,
                            price: item.price,
                          },
                        },
                        type: "increment",
                      })
                    }
                  >
                    <Plus size={16} weight="fill" />
                  </S.CoffeeAddInputButtons>
                </S.CoffeeAddInput>
                <S.ItemRemove
                  onClick={() =>
                    dispatch({
                      payload: { item: item.name },
                      type: "remove",
                    })
                  }
                >
                  <Trash /> REMOVER
                </S.ItemRemove>
              </S.CheckoutItemActions>
            </S.CheckoutItemActionDetails>
            <S.ItemPrice>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </S.ItemPrice>
          </S.CheckoutItem>
        ))}
      </S.CheckoutItemList>

      <S.CheckoutDetails>
        <S.Detail>
          <S.DetailTitle>Total de itens</S.DetailTitle>
          <S.DetailPrice>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(state.totalPrice)}
          </S.DetailPrice>
        </S.Detail>
        <S.Detail>
          <S.DetailTitle>Entrega</S.DetailTitle>
          <S.DetailPrice>$9.00</S.DetailPrice>
        </S.Detail>
        <S.DetailTotal>
          <S.DetailTitle>Total</S.DetailTitle>
          <S.DetailPrice>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(state.totalPrice + 9)}
          </S.DetailPrice>
        </S.DetailTotal>
        <S.DetailConfirm onClick={handleSubmit(onSubmit)}>Confirmar Pedido</S.DetailConfirm>
      </S.CheckoutDetails>
    </S.Container>
  );
};
