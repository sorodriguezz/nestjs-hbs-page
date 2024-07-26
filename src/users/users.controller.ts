import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected() {
    return 'This route is protected';
  }
}
