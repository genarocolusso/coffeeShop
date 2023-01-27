import { Package, Timer, Coffee, ShoppingCart } from 'phosphor-react';
import HeroImage from '../../assets/heroimage.png'
import * as S from  './styles'; 
import { defaultTheme } from '../../styles/themes/default';

export const Hero = () => { 
   
return (
    <S.Container> 
         <S.Infos>
            <S.Title>
            Encontre o café perfeito para qualquer hora do dia
            </S.Title>
            <S.Description>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </S.Description>
            <S.GoodList>
            <S.ListItem>
              <S.Icon color={'yellowDark'}>  
              <ShoppingCart  size={22} weight="fill"/> 
              </S.Icon> 
              Compra simples e segura
                </S.ListItem>
                <S.ListItem>
                <S.Icon color={'baseText'}> 
                <Package size={22}  weight="fill" /> 
                </S.Icon>
                Embalagem mantém o café intacto
                </S.ListItem>
                <S.ListItem>
                <S.Icon color={'yellow'}>
                <Timer   size={22}  weight="fill" />
                </S.Icon>
                  Entrega rápida e rastreada
                </S.ListItem>
                <S.ListItem>
                <S.Icon color={'purple'}>
                <Coffee  size={22}  weight="fill" />   
                    </S.Icon>
                     O café chega fresquinho até você
                </S.ListItem>
            </S.GoodList>
         </S.Infos>
         <S.HeroImage>
            <img src={HeroImage}/>
         </S.HeroImage>
    </S.Container>
)

};