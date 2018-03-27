import _ from 'lodash';
import {books} from  './db.json'
import {statusTypes} from  './db.json'
import {genreTypes} from  './db.json'

class StubAPI {

    constructor() {
        this.statusTypes =  statusTypes;
        this.genreTypes =  genreTypes;
        this.books = books;
    }

    getAllBooks() {
        return this.books ;
    }

    getAllGenreTypes() {
        return this.genreTypes ;
    }

    getAllStatusTypes() {
        return this.statusTypes ;
    }

    findBook(key){
      let index = _.findIndex(this.books,
          (book) => book.id === key
      );
      if (index !== -1) {
            return this.books[index];
      }
      return "" ;

    }
}

export default (new StubAPI() );
