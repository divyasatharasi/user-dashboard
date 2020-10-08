import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

import { history } from '../_helpers';
function BlogsPage() {
    const posts = useSelector(state => state.posts.posts);
    const columns = [
        {
          name: 'userId',
          selector: 'userId'
        },
        {
          name: 'id',
          selector: 'id',
          sortable: true
        },
        {
          name: 'title',
          selector: 'title',
          sortable: true,
          wrap: true
        },
        {
          name: 'body',
          selector: 'body',
          sortable: true,
          wrap: true
        }
      ];
    function onRowClicked(row) {
      const rowId = row.id;
        let blog = posts.find(post => post.id === rowId);
        const from  = { pathname: `/blogs/${rowId}`, blog };
        history.push(from);
    }
    return (
        <div>
            {
            posts.length > 0 ? <DataTable
                title="Posts"
                highlightOnHover={true}
                columns={columns}
                data={posts}
                pagination={true}
                onRowClicked={onRowClicked}
                /> : 'No details'
                }
        </div>
    );
}

export { BlogsPage };