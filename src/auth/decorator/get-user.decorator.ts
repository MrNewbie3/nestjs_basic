import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);

// export const GetUID = createParamDecorator(
//   (data: string | undefined, ctx: Request) => {
//     const req = ctx;
//     return { req };
//   },
// );
