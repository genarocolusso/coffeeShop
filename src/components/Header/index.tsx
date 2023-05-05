import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <img src={Logo} alt="logo" />{" "}
      </Link>
      <S.Account>
        <S.City>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </S.City>
        <Link to="/checkout">
          <S.Cart>
            <ShoppingCart size={22} weight="fill" />{" "}
          </S.Cart>
        </Link>
      </S.Account>
    </S.Container>
  );
};
