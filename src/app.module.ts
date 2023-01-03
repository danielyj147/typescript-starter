import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
// Reference https://www.youtube.com/watch?v=3JminDpCJNE&t=15009s

@Module({
  imports: [BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
