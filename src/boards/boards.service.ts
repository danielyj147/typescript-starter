import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

// provider - services get imported to a controller
// process or get data then gives it to controller
// handling data

@Injectable()
export class BoardsService {
  // What gets returend -- incremented by createBoard
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(), // creating unique id's
      // ...createBoardDto, //alternative
      title, // !!! no need to write title: title, becasue both have the same name
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  // for Get() operation
  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }
  // for Delete() operation
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}
