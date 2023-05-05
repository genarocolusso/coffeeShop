import { Coffee, Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import * as S from "./styles";
import { useCart } from "../../context";

interface Coffee {
  img: string;
  name: string;
  description: string;
  tag: string[];
  price: number;
}

type CoffeeComponentProps = {
  coffee: Coffee;
};

export const CoffeeComponent = ({ coffee }: CoffeeComponentProps) => {
  const { dispatch, state } = useCart();
  const findCoffeeOnState = state.items.find(
    (item) => item.name === coffee.name
  );

  return (
    <S.Container>
      <S.ImageCoffee>
        <img src={coffee.img} />
      </S.ImageCoffee>
      <S.CoffeeTagWrapper>
        {coffee.tag.map((tag) => (
          <S.CoffeeTag key={tag}>{tag}</S.CoffeeTag>
        ))}
      </S.CoffeeTagWrapper>
      <S.CoffeeTitle>{coffee.name}</S.CoffeeTitle>
      <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>
      <S.CoffeePriceActions>
        <S.CoffeePrice>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(coffee.price)}
        </S.CoffeePrice>
        <S.CoffeeActions>
          <S.CoffeeAddInput>
            <S.CoffeeAddInputButtons
              onClick={() =>
                dispatch({
                  payload: { item: coffee.name },
                  type: "decrement",
                })
              }
            >
              <Minus size={16} weight="fill" />
            </S.CoffeeAddInputButtons>
            <S.CoffeeQuantity>
              {findCoffeeOnState ? findCoffeeOnState.quantity : 0}
            </S.CoffeeQuantity>
            <S.CoffeeAddInputButtons
              onClick={() =>
                dispatch({
                  payload: {
                    item: {
                      img: coffee.img,
                      name: coffee.name,
                      description: coffee.description,
                      quantity: 1,
                      price: coffee.price,
                    },
                  },
                  type: "increment",
                })
              }
            >
              <Plus size={16} weight="fill" />
            </S.CoffeeAddInputButtons>
          </S.CoffeeAddInput>
          <S.AddCart>
            <ShoppingCartSimple size={24} weight="fill" />
          </S.AddCart>
        </S.CoffeeActions>
      </S.CoffeePriceActions>
    </S.Container>
  );
};
