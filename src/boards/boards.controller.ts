import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    // !!! Body in this context means the HTTP request body, which is in JSON format
    // Try postman to test this Post method.
    @Body() createBoardDto: CreateBoardDto,
  ): Board {
    // @Body('title') ==> title, @Body('description') ==> description
    return this.boardsService.createBoard(createBoardDto);
  }

  // The request that we will send: http://localhost:3002/boards/?id=f519a0a0-8c16-11ed-a5c0-7f2d35791055
  // !!! if you have multitple params, then use "&" in your request url
  // ex) localhost:3002/boards/?id=12&title=134
  // !!! For multiple params, just use "@Param() params: string[]" as opposed to "@Param('id') id: string", no string inside ()
  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}
