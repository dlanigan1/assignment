import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProp = {
  mode: 'dbclick'
};

class Books extends React.Component {
    componentWillMount() {
    }
    render() {
        let books = api.getAll() ;

        return (
          <BootstrapTable data={books} striped={true} hover={true} cellEdit={ cellEditProp }>
              <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField="title" dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
              <TableHeaderColumn dataField="author" dataAlign="center" dataSort={true}>Author</TableHeaderColumn>
              <TableHeaderColumn dataField="status" dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
          </BootstrapTable>
        );

    }
}

export default withRouter(Books);
