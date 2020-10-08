import React from 'react';
import { useSelector } from 'react-redux';

const DataTable = require('react-data-components').DataTable;

function UsersPage() {
    const users = useSelector(state => state.users.users);
    const renderAddress = (val, row) => (<div><div>{row.address.street}</div><div>{row.address.suite}</div><div>{row.address.city}</div><div>{row.address.zipcode}</div></div>);
    const renderComapny = (val, row) => (<div><div>{row.company.name}</div><div>{row.company.catchPhrase}</div><div>{row.company.bs}</div></div>);
    const columns = [
        {
          title: 'ID',
          prop: 'id',
        },
        {
          title: 'Name',
          prop: 'name',
        },
        {
          title: 'User Name',
          prop: 'username',
        },
        {
          title: 'Email',
          prop: 'email',
        },
        {
          title: 'Address',
          prop: 'address',
          render: renderAddress
        },
          {
            title: 'Phone',
            prop: 'phone',
          },
          {
            title: 'Website',
            prop: 'website',
          },
          {
            title: 'Company',
            prop: 'company',
            render: renderComapny
          }
      ];
    return (
        <div>{
            users.length > 0 ? <DataTable
            keys="id"
            columns={columns}
            initialData={users}
            initialPageLength={5}
        /> : 'No details'
                }
                </div>
    );
}

export { UsersPage };