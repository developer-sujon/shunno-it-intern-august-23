//External Lib Import
import { lazy, Suspense } from 'react';

//Internal Lib Import
import LazyLoader from '../components/LazyLoader';
const Login = lazy(() => import('../screens/Login'));
const NotAccess = lazy(() => import('../screens/NotAccess'));
const Error = lazy(() => import('../screens/Error'));
const CustomerTicket = lazy(() => import('../screens/private/Ticket/CustomerTicket.jsx'));
const CreateCustomerTicket = lazy(() => import('../screens/private/Ticket/CreateCustomerTicket'));
const SearchTicket = lazy(() => import('../screens/private/Ticket/SearchTicket'));
const TicketSingleList = lazy(() => import('../screens/private/Ticket/TicketSingleList'));

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<LazyLoader />}>{children}</Suspense>;
};

const publicRoutes = [
  {
    path: 'login',
    element: (
      <LazyLoading>
        <Login />
      </LazyLoading>
    ),
  },
  {
    path: 'not-access',
    element: (
      <LazyLoading>
        <NotAccess />
      </LazyLoading>
    ),
  },
  {
    path: 'support-ticket/create',
    element: (
      <LazyLoading>
        <CreateCustomerTicket />
      </LazyLoading>
    ),
  },
  {
    path: 'support-ticket/tickets/:token',
    element: (
      <LazyLoading>
        <CustomerTicket />
      </LazyLoading>
    ),
  },
  {
    path: 'support-ticket/search',
    element: (
      <LazyLoading>
        <SearchTicket />
      </LazyLoading>
    ),
  },
  {
    path: 'support-ticket/list',
    element: (
      <LazyLoading>
        <TicketSingleList />
      </LazyLoading>
    ),
  },
  {
    path: '*',
    element: (
      <LazyLoading>
        <Error />
      </LazyLoading>
    ),
  },
];

export default publicRoutes;
