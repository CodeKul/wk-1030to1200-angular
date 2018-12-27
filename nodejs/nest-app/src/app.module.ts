import { BookProvider } from './book/book-provider';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';

@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [AppService, BookProvider],
})
export class AppModule {}
