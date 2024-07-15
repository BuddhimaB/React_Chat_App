import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter([{
  path:'/',
  element: <div>This is Home!</div>
},

{
  path:'/register',
  element: <Register/>
},
{
  path:'/register',
  element: <Login/>
}
]);


function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
