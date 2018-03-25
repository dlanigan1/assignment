import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import request from 'superagent' ;

const statusTypes =  ['available','unavailable'];
const genreTypes =  ['Crime','Childrens','Military History','Fiction'];

const selectRowProp = {
  mode: 'radio',
  bgColor: 'yellow',
  hideSelectColumn: true,
  onSelect: onRowSelect,
  clickToSelect: true
};

function onRowSelect(row, isSelected, e) {
//  let rowStr = '';

//  for (const prop in row) {
//    rowStr += prop + ': "' + row[prop] + '",';
//  }
//  console.log(e);
//  alert(`is selected: ${isSelected}, ${rowStr}`);
//  alert(`row id = ${row["id"]} `);

//  this.props.history.push(`/books/${row["id"]}`);
}
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
            <h1>Add or Delete a Book</h1>
            <p>select a row and click the delete button to delete</p>
            <BootstrapTable data={books} striped={true} hover={true} search={ true } selectRow={ selectRowProp } deleteRow={ true } insertRow={ true } options={ options }>
                <TableHeaderColumn dataField="id" isKey={true} searchable={ false } dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="author" dataAlign="center" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="genre" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: genreTypes } } }>Genre</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: statusTypes } } }>Status</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );

    }
}

export default withRouter(Books);
