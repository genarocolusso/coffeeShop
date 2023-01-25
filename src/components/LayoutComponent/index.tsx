type LayoutPropsType = {
    children: React.ReactNode;

}

export const LayoutComponent = ({children}: LayoutPropsType) => { 
return (
    <div>
        <div>Header</div>
        {children}
    </div>
)

};