import { BookProvider } from './book-provider';
import { Controller, Post, Body, Get, Req, Res } from '@nestjs/common';
import { Book } from './book';
import { BookDto } from './book-dt';

@Controller('book')
export class BookController {
    constructor(
        private readonly bookProvider: BookProvider
    ) { }

    @Get('myBook')
    myBook(@Req() req: any, @Res() res: any) {
        return 'hi'
    }
}
