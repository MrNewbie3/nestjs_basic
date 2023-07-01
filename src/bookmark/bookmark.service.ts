import { Delete, Get, Injectable, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { bookmarkDto, editBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  getBookMarks(userId: number) {
    console.log(userId);
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  getBookMarkById(userId: number, bookmarkId: number) {}

  createBookmark(userId: number, dto: bookmarkDto) {}

  EditBookMarkById(userId: number, bookmarkId: number, dto: editBookmarkDto) {}

  DeleteBookMarkById(userId: number, bookmarkId: number) {}
}
