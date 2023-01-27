import { Header } from "../Header";
import * as S from  './styles';

type LayoutPropsType = {
    children: React.ReactNode;
}

export const LayoutComponent = ({children}: LayoutPropsType) => { 
return ( 
    <S.Container>
        <Header/>
        {children}
    </S.Container>
)

};