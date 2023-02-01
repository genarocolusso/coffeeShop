import { Package, Timer, Coffee, ShoppingCart } from 'phosphor-react'; 
import * as S from  './styles'; 
import { CoffeeComponent } from '../CoffeeComponent';
 import CoffeListItems from '../../mock/coffee.json'
export const CoffeeList = () => { 
   
return (
    <S.Container> 
      <S.CoffeeListGrid> 
        { CoffeListItems.coffeeList && 
        CoffeListItems.coffeeList.map((item) => (
          <CoffeeComponent key={item.name} coffee={item} />
))
}
           
      </S.CoffeeListGrid>
    </S.Container>
)

};