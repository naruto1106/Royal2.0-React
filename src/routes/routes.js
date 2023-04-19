import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import keys from 'utils/keys';

const Data = React.lazy(() => import('../screens/Data'));
const Page = React.lazy(() => import('../screens/Page'));

const AddMember = React.lazy(() => import('../components/members/AddMember'));
const HistoryMember = React.lazy(() =>
  import('../components/members/HistoryMember')
);
const SettingsMember = React.lazy(() =>
  import('../components/members/SettingsMember')
);
const SearchMember = React.lazy(() =>
  import('../components/members/SearchMember')
);
const CsvMember = React.lazy(() => import('../components/members/CsvMember'));
const ListMember = React.lazy(() => import('../components/members/ListMember'));

const AddTransaction = React.lazy(() =>
  import('../screens/transactions/AddTransaction')
);
const HistoryTransaction = React.lazy(() =>
  import('../screens/transactions/HistoryTransaction')
);
const ListTransaction = React.lazy(() =>
  import('../screens/transactions/ListTransaction')
);
const SearchTransaction = React.lazy(() =>
  import('../screens/transactions/SearchTransaction')
);
const ImportTransaction = React.lazy(() =>
  import('../screens/transactions/ImportTransaction')
);
const ViewTransaction = React.lazy(() =>
  import('../screens/transactions/ViewTransaction')
);

const RedirectToViewList = () => {
  let { module_name } = useParams();

  if (module_name) {
    return (
      <Navigate
        to={`/data/${module_name}/${keys.DATA_VIEW_LIST_ACTION}`}
        replace
      />
    );
  } else {
    return <Navigate to="/" replace />;
  }
};

export const getRoutes = (
  currentModule = 'Data',
  currentDataID = '',
  currentPage = ''
) => {
  return [
    { path: '/home', exact: true, name: 'Home' }, // Just for breadcrumb & Home feel
    {
      path: `/data/:module_name`,
      exact: true,
      name:
        window.location.pathname.split('/').pop() === 'add' ? currentModule : ''
    }, // Just for breadcrumb
    {
      path: `/data/:module_name/${keys.DATA_ADD_ACTION}`,
      exact: true,
      name: 'Create'
    }, // Just for breadcrumb
    {
      path: '/data/:module_name/:action/:id',
      name: `${currentDataID}`,
      component: Data
    },
    {
      // If user put the module_name without specifying action then redirect to /viewlist
      path: `/data/:module_name`,
      exact: true,
      name: currentModule,
      component: RedirectToViewList
    },
    {
      // If user go to /view without 'id' then redirect to /viewlist
      path: `/data/:module_name/${keys.DATA_VIEW_ACTION}`,
      name: currentModule,
      component: RedirectToViewList
    },
    {
      // If user go to /edit without 'id' then redirect to /viewlist
      path: `/data/:module_name/${keys.DATA_EDIT_ACTION}`,
      name: currentModule,
      component: RedirectToViewList
    },
    {
      path: '/data/:module_name/:action',
      name: currentModule,
      component: Data
    },
    { path: '/:routeKey', name: currentPage, component: Page }
  ];
};

export const getAllMembers = () => {
  return [
    {
      path: '/datamanager/bb_loyal2_members/add',
      exact: true,
      name: 'Add Member',
      component: AddMember
    },
    {
      path: '/datamanager/bb_loyal2_members/history',
      exact: true,
      name: 'History',
      component: HistoryMember
    },
    {
      path: '/datamanager/bb_loyal2_members/settings',
      exact: true,
      name: 'Settings',
      component: SettingsMember
    },
    {
      path: '/datamanager/bb_loyal2_members/list',
      exact: true,
      name: 'List',
      component: ListMember
    },
    {
      path: '/datamanager/bb_loyal2_members/search',
      exact: true,
      name: 'Search',
      component: SearchMember
    },
    {
      path: '/datamanager/bb_loyal2_members/csv',
      exact: true,
      name: 'Csv',
      component: CsvMember
    }
  ];
};
export const getAllTransactions = () => {
  return [
    {
      path: '/transactions/add',
      exact: true,
      name: 'Add Transaction',
      component: AddTransaction
    },
    {
      path: '/transactions/history',
      exact: true,
      name: 'History Transaction',
      component: HistoryTransaction
    },
    {
      path: '/transactions/view',
      exact: true,
      name: 'View',
      component: ViewTransaction
    },
    {
      path: '/transactions/list',
      exact: true,
      name: 'List Transaction',
      component: ListTransaction
    },
    {
      path: '/transactions/search',
      exact: true,
      name: 'Search Transaction',
      component: SearchTransaction
    },
    {
      path: '/transactions/import',
      exact: true,
      name: 'Import Transaction',
      component: ImportTransaction
    }
  ];
};
