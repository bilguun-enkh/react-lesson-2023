import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:
    [TodosModule,
      MongooseModule.forRoot('mongodb+srv://bilguun-enkh:Aquacry321109!12@mernstackpineconedb.mwhgdhi.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
