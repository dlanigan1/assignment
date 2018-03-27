import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProp = {
  mode: 'dbclick',
  blurToSave: true,
  afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};


function onAfterSaveCell(row, cellName, cellValue) {

  let opts =   {
        "id":row['id'],
        "title": row['title'],
        "author": row['author'],
        "genre": row['genre'],
        "summary": row['summary'],
        "status": row['status']
    };

  console.log('Posting request to JSON file.');
  fetch(`http://localhost:8080/books/${row['id']}`, {
    "method": 'put',
    "headers": {"Accept": "application/json","Content-Type":"application/json"},
    "body": JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('Modified Book:', data.title);
  });

}

class EditBooks extends React.Component {
    componentWillMount() {
    }

    render() {
      let books = api.getAllBooks() ;
      let genreTypes = api.getAllGenreTypes() ;

        return (
          <div>
            <h1>Edit a Book</h1>
            <p align='center'>double click a cell to edit</p>
            <BootstrapTable data={books} striped={true} hover={true} search={ true } cellEdit={ cellEditProp } >
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
