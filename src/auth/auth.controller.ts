import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  getLoginPage(@Res() res) {
    res.render('login');
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res() res) {
    const { access_token } = await this.authService.login(req.user);
    res.cookie('jwt', access_token, { httpOnly: true });
    return res.redirect('/protected');
  }

  @Get('logout')
  logout(@Res() res) {
    res.clearCookie('jwt');
    return res.redirect('login');
  }
}
