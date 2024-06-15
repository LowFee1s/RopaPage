import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductsView from './view/ProductsView.jsx'

import './App.css'
import MenuNavegationView from './components/MenuNavegationView.jsx'
import CartPage from './components/CartView.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden bg-slate-500/10">
        <MenuNavegationView />
        <ProductsView />
      </div>
    </>
  )
}

export default App
