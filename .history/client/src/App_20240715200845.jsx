import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter([]);


function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
