import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Home/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>{}
      </div>
    
  );
}

export default App;
