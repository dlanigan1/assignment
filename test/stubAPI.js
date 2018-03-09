import _ from 'lodash';

class StubAPI {

    constructor() {
        this.books = [
          {
              'title': 'Book 1',
              'author': 'david lanigan',
              'available': true
          },
          {
              'title': 'Book 2',
              'author': 'john murphy',
              'available': true
          },
          {
              'title': 'Book 3',
              'author': 'jackie wilson',
              'available': true
          },
          {
              'title': 'Book 4',
              'author': 'johnny rotten',
              'available': true
          },
          {
              'title': 'Book 5',
              'author': 'johnny rotten',
              'available': true
          },
          {
              'title': 'Book 6',
              'author': 'mavis beacon',
              'available': true
          },
          {
              'title': 'Book 7',
              'author': 'travis yule',
              'available': true
          },
          {
              'title': 'Book 9',
              'author': 'chewie lewie',
              'available': true
          },
          {
              'title': 'Book 10',
              'author': 'todd unchious',
              'available': true
          },
          {
              'title': 'Book 11',
              'author': 'maeve gibbons',
              'available': true
          },

        ] ;
    }

    delete(k) {
        let elements = _.remove(this.books,
            (book) => book.title === k
        );
        return elements;
    }
    getAll() {
        return this.books ;
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
