import { Package, Timer, Coffee, ShoppingCart } from 'phosphor-react'; 
 
import * as S from  './styles'; 

interface Coffee   {
    img : string;
    name: string;
    description: string;
    tag: string[];
    price: number;
}

type CoffeeComponentProps = {
    coffee: Coffee;
}

export const CoffeeComponent = ({coffee} : CoffeeComponentProps) => { 
   
return (
    <S.Container>
    <img src={coffee.img}/>
        
    <div>{coffee.name}</div>
     <div>{coffee.description}</div>
     {coffee.tag.map(tag => <div>{tag}</div>)}
     
    </S.Container>
)

};