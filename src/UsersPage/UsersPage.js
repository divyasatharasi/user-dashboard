import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

function UsersPage() {
    const users = useSelector(state => state.users.users);
    const columns = [
        {
          name: 'id',
          selector: 'id',
        },
        {
          name: 'name',
          selector: 'name',
          sortable: true,
        },
        {
          name: 'username',
          selector: 'username',
          sortable: true,
        },
        {
          name: 'email',
          selector: 'email',
          sortable: true,
        },
        {
          name: 'address',
          selector: 'address',
          sortable: true,
          cell: row => <div><div>{row.address.street}</div><div>{row.address.suite}</div><div>{row.address.city}</div><div>{row.address.zipcode}</div></div>,
        },
          {
            name: 'phone',
            selector: 'phone',
            sortable: true,
          },
          {
            name: 'website',
            selector: 'website',
            sortable: true,
          },
          {
            name: 'company',
            selector: 'company',
            sortable: true,
            cell: row => <div><div>{row.company.name}</div><div>{row.company.catchPhrase}</div><div>{row.company.bs}</div></div>,
          }
      ];

    return (
        <div>{
            users.length > 0 ? <DataTable
                title="Users"
                columns={columns}
                data={users}
                highlightOnHover={true}
                /> : 'No details'
                }
                </div>
    );
}

export { UsersPage };