import React from 'react';
import './css/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/home/Home';
import NewPermit from './views/permits/NewPermit';
import Permits from './views/permits/Permits';
import Expenses from './views/expenses/Expenses';
import NewExpense from './views/expenses/NewExpense';
import NewEmployee from './views/employees/NewEmployee';
import Employees from './views/employees/Employees';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calisanlar",
    element: <Employees />,
  },
  {
    path: "/izinler",
    element: <Permits />,
  },
  {
    path: "/harcamalar",
    element: <Expenses />,
  },
  {
    path: "/yeni-harcama",
    element: <NewExpense />,
  },
  {
    path: "/yeni-calisan",
    element: <NewEmployee />,
  },
  {
    path: "/yeni-izin",
    element: <NewPermit />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;