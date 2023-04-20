import { BadRequestException, Injectable, Patch } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosService {

  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {

  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required')
    }
    const newTodo = new this.todoModel(createTodoDto)
    const result = newTodo.save({})
    return result
  }

  async findAll() {
    const result = await this.todoModel.find({})
    return result
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }
  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoModel.findOneAndUpdate(
      { _id: id },
      updateTodoDto,
    )
    return todo
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
