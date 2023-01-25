import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Checkout } from './pages/checkout';
import { LayoutComponent } from './components/LayoutComponent';

export function Router() {

  return(
    <LayoutComponent> 
      <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/checkout"   element={<Checkout/>} /> 
      <Route path="*" element={<div>404</div>} />

    </Routes>
    </LayoutComponent>
  )
}