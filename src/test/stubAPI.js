import _ from 'lodash';

class StubAPI {

    constructor() {
        this.books = [
          {
              'id':1,
              'title': 'The Wind In the Willows',
              'author': 'Kenneth Grahame',
              'genre': 'Childrens',
              'summary': 'A childrens novel by Kenneth Grahame, first published in 1908. The novel is notable for its mixture of mysticism, adventure, morality and camaraderie, and celebrated for its evocation of the nature of the Thames Valley',
              'status': 'available'
          },
          {
              'id':2,
              'title': 'Stalingrad',
              'author': 'Antony Beevor',
              'genre': 'Military History',
              'summary': 'Stalingrad is a narrative history written by Antony Beevor of the battle fought in and around the city of Stalingrad during World War II',
              'status': 'available'
          },
          {
              'id':3,
              'title': 'The Satanic Verses',
              'author': 'Salman Rushdie',
              'genre': 'Fiction',
              'summary': 'The Satanic Verses is Salman Rushdies fourth novel, first published in 1988 and inspired in part by the life of Muhammad',
              'status': 'available'
          },
          {
              'id':4,
              'title': 'Almost the Perfect Murder',
              'author': 'Paul Williams',
              'genre': 'Crime',
              'summary': 'An examination into the murder of Elaine O Hara and the subsequent trial of Graham Dywer',
              'status': 'available'
          },
          {
              'id':5,
              'title': 'The Second World War',
              'author': 'Antony Beevor',
              'genre': 'Military History',
              'summary': 'The Second World War is a narrative history of World War II by British historian Antony Beevor',
              'status': 'available'
          },
          {
              'id':6,
              'title': 'Circle of Friends',
              'author': 'Maeve Binchy',
              'genre': 'Fiction',
              'summary': 'Circle of Friends is a novel written in 1990 by Maeve Binchy. It is set in Dublin, as well as the fictitious town of Knockglen in rural Ireland during the 1950s',
              'status': 'available'
          },
          {
              'id':7,
              'title': 'Tara Road',
              'author': 'Maeve Binchy',
              'genre': 'Fiction',
              'summary': 'Tara Road is a novel by Maeve Binchy. It was chosen as an Oprahs Book Club selection in September 1999.',
              'status': 'available'
          },
          {
              'id':8,
              'title': 'A Week in Winter',
              'author': 'Maeve Binchy',
              'genre': 'Fiction',
              'summary': 'A Week in Winter is a novel by Maeve Binchy. It was published posthumously in 2012',
              'status': 'available'
          },
          {
              'id':9,
              'title': 'Badfellas',
              'author': 'Paul Williams',
              'genre': 'Crime',
              'summary': 'Offers an account of how organized crime evolved in Ireland over the decades.',
              'status': 'available'
          },
          {
              'id':10,
              'title': 'The Magic Faraway Tree',
              'author': 'Enid Blyton',
              'genre': 'Childrens',
              'summary': 'The Magic Faraway Tree is a childrens novel by Enid Blyton, first published in 1943.',
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
