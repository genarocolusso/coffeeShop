import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../assets/Logo.png' 
import * as S from  './styles';

export const Header = () => { 
return (
    <S.Container>
        <img src={Logo} alt="logo" /> 
        <S.Account>
            <S.City><MapPin  size={22} weight="fill"  /> Porto Alegre, RS</S.City>
            <S.Cart><ShoppingCart size={22}  weight="fill" /> </S.Cart>
        </S.Account>
    </S.Container>
)

};