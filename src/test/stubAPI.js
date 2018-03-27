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

    delete(k) {
        let elements = _.remove(this.books,
            (book) => book.title === k
        );
        return elements;
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
    add(n,a,p) {
        let len = this.books.length ;
        let newLen = this.books.push({
            title: n, author : a, available: p }) ;
        return newLen > len ;
    }

    update(key,n,a,p) {
        let index = _.findIndex(this.books,
            (book) => book.title === key
        );
        if (index !== -1) {
            this.books.splice(index, 1,
                {title: n, author: a, available: p});
            return true ;
        }
        return false ;
    }
}

export default (new StubAPI() );
