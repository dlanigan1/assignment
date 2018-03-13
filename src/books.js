import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProp = {
  mode: 'dbclick'
};
const selectRowProp = {
  mode: 'radio',
  bgColor: 'yellow', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: true,  // enable hide selection column.
  clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
};

function onAfterInsertRow(row) {
  let newRowStr = '';

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
  alert('The new row is:\n ' + newRowStr);
}

const options = {
  afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
  afterDeleteRow: onAfterDeleteRow  // A hook after deleting rows
};

function onAfterDeleteRow(rowKeys) {
  alert('you deleted row: ' + rowKeys);
}

class Books extends React.Component {
    componentWillMount() {
    }
    render() {
        let books = api.getAll() ;

        return (
          <div>
            <h1>List of Books ({books.length})</h1>
            <p>double click on a cell to edit</p>
            <BootstrapTable data={books} striped={true} hover={true} selectRow={ selectRowProp } deleteRow={ true } insertRow={ true } options={ options }>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="author" dataAlign="center" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );

    }
}

export default withRouter(Books);
