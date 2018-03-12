import _ from 'lodash';

class StubAPI {

    constructor() {
        this.books = [
          {
              'id':1,
              'title': 'Book 1',
              'author': 'david lanigan',
              'status': 'available'
          },
          {
              'id':2,
              'title': 'Book 2',
              'author': 'john murphy',
              'status': 'available'
          },
          {
              'id':3,
              'title': 'Book 3',
              'author': 'jackie wilson',
              'status': 'available'
          },
          {
              'id':4,
              'title': 'Book 4',
              'author': 'johnny rotten',
              'status': 'available'
          },
          {
              'id':5,
              'title': 'Book 5',
              'author': 'johnny rotten',
              'status': 'available'
          },
          {
              'id':6,
              'title': 'Book 6',
              'author': 'mavis beacon',
              'status': 'available'
          },
          {
              'id':7,
              'title': 'Book 7',
              'author': 'travis yule',
              'status': 'available'
          },
          {
              'id':8,
              'title': 'Book 8',
              'author': 'chewie lewie',
              'status': 'available'
          },
          {
              'id':9,
              'title': 'Book 9',
              'author': 'todd unchious',
              'status': 'available'
          },
          {
              'id':10,
              'title': 'Book 10',
              'author': 'maeve gibbons',
              'status': 'available'
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
