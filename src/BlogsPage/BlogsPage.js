import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../_helpers';

const DataTable = require('react-data-components').DataTable;

function BlogsPage() {
    const posts = useSelector(state => state.posts.posts);
    const users = useSelector(state => state.users.users);
    const allPosts = posts.map((item, i) => {
      const index = users.findIndex(user => user.id === item.userId);
      return Object.assign({}, item, {name: users[index].name,username: users[index].username})
    });
    const columns = [
        {
          title: 'ID',
          prop: 'id'
        },
        {
          title: 'Name',
          prop: 'name'
        },
        {
          title: 'User Name',
          prop: 'username'
        },
        {
          title: 'Title',
          prop: 'title'
        },
        {
          title: 'Body',
          prop: 'body'
        }
      ];
    function onRowClicked(row) {
      const rowId = row.id;
        let blog = posts.find(post => post.id === rowId);
        const from  = { pathname: `/blogs/${rowId}`, blog };
        history.push(from);
    }
    
    function buildRowOptions(row) {
      return {
        onClick: onRowClicked.bind({}, row)
      };
    }
    return (
        <div>
            {
            posts.length > 0 ? <DataTable
                keys="id"
                columns={columns}
                initialData={allPosts}
                initialPageLength={10}
                initialSortBy={{ prop: 'city', order: 'descending' }}
                buildRowOptions={buildRowOptions}
            /> : 'No details'
                }
        </div>
    );
}

export { BlogsPage };