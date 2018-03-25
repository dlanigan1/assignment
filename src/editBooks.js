import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import request from 'superagent' ;

const genreTypes =  ['Crime','Childrens','Military History','Fiction'];

const cellEditProp = {
  mode: 'dbclick',
  blurToSave: true
};

class EditBooks extends React.Component {
    componentWillMount() {
    }

    render() {
        let books = api.getAll() ;

        return (
          <div>
            <h1>Edit a Book</h1>
            <p align='center'>double click a cell to edit</p>
            <BootstrapTable data={books} striped={true} hover={true} search={ true } cellEdit={ cellEditProp }>
                <TableHeaderColumn dataField="title" width='250' isKey={true} dataAlign="left" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="author" width='150' dataAlign="left" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="genre" width='150' dataAlign="left" dataSort={true} editable={ { type: 'select', options: { values: genreTypes } } }>Genre</TableHeaderColumn>
                <TableHeaderColumn dataField="summary" dataAlign="left" dataSort={true}>Summary</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );

    }
}

export default withRouter(EditBooks);
