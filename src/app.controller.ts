import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  @Get()
  getHome(@Res() res) {
    res.render('index', { title: 'Home' });
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected(@Res() res) {
    res.render('protected', {
      title: 'Protected',
      message: 'This route is protected',
    });
  }
}
