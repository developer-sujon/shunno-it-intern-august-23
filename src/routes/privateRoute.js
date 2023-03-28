//External Lib Import
import { lazy, Suspense } from 'react';

//Internal Lib Import
import LazyLoader from '../components/LazyLoader';

const Home = lazy(() => import('../screens/private/Home'));
const Dashboard = lazy(() => import('../screens/private/Dashboard'));
const Category = lazy(() => import('../screens/private/Category/Category'));
const Role = lazy(() => import('../screens/private/Role/Role'));
const Priority = lazy(() => import('../screens/private/Priority/Priority'));
const Notification = lazy(() => import('../screens/private/Notification/Notification'));
const Department = lazy(() => import('../screens/private/Department/Department'));
const Agent = lazy(() => import('../screens/private/Agent/Agent'));
const Support = lazy(() => import('../screens/private/Support/Support'));

const CreateUpdateCategory = lazy(() => import('../screens/private/Category/CreateUpdateCategory'));
const CreateUpdateRole = lazy(() => import('../screens/private/Role/CreateUpdateRole'));
const CreateUpdateNotification = lazy(() => import('../screens/private/Notification/CreateUpdateNotification'));
const CreateUpdatePriority = lazy(() => import('../screens/private/Priority/CreateUpdatePriority'));
const CreateUpdateDepartment = lazy(() => import('../screens/private/Department/CreateUpdateDepartment'));
const CreateUpdateAgent = lazy(() => import('../screens/private/Agent/CreateUpdateAgent'));
const CreateUpdateSupport = lazy(() => import('../screens/private/Support/CreateUpdateSupport'));
const ReplySupport = lazy(() => import('../screens/private/Support/ReplySupport'));

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<LazyLoader />}>{children}</Suspense>;
};

const privateRoutes = [
  {
    path: '/',
    element: (
      <LazyLoading>
        <Home />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/departments',
    element: (
      <LazyLoading>
        <Department />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/department-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateDepartment />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/categories',
    element: (
      <LazyLoading>
        <Category />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/category-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateCategory />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/priority',
    element: (
      <LazyLoading>
        <Priority />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/priority-create-update',
    element: (
      <LazyLoading>
        <CreateUpdatePriority />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/department',
    element: (
      <LazyLoading>
        <Department />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/department-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateDepartment />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/agents',
    element: (
      <LazyLoading>
        <Agent />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/agent-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateAgent />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/notification',
    element: (
      <LazyLoading>
        <Notification />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/notification-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateNotification />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/role',
    element: (
      <LazyLoading>
        <Role />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/role-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateRole />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: '/dashboard',
    element: (
      <LazyLoading>
        <Dashboard />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: 'supports',
    element: (
      <LazyLoading>
        <Support />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: 'support-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateSupport />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
  {
    path: 'support-reply',
    element: (
      <LazyLoading>
        <ReplySupport />
      </LazyLoading>
    ),
    roles: ['all'],
    accessPermission: null,
  },
];

export default privateRoutes;
