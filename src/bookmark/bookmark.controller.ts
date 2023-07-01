import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JWTGuard } from '../../src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from '../../src/auth/decorator';
import { bookmarkDto, editBookmarkDto } from './dto';

@UseGuards(JWTGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarks: BookmarkService) {}
  @Get()
  getBookMarks(@GetUser('id') userId: number) {
    return this.bookmarks.getBookMarks(userId);
  }

  @Post()
  createBookmark(@GetUser('id') userId: number, @Body() dto: bookmarkDto) {
    return this.bookmarks.createBookmark(userId, dto);
  }

  @Get(':id')
  getBookMarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarks.getBookMarkById(userId, bookmarkId);
  }

  @Patch(':id')
  EditBookMarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() dto: editBookmarkDto,
  ) {
    return this.bookmarks.EditBookMarkById(userId, bookmarkId, dto);
  }

  @Delete(':id')
  DeleteBookMarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarks.DeleteBookMarkById(userId, bookmarkId);
  }
}
