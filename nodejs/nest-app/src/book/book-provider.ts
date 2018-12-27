import { Book } from './book';
import { Injectable } from '@nestjs/common';
import { timer } from 'rxjs';

@Injectable()
export class BookProvider {

    private readonly books : Array<Book> = new Array()

    newBook(bk : Book) : Array<Book> {
        this.books.push(bk)
        return this.books
    }
}
