import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<any>();
    const token = request.cookies['jwt'];

    if (!token) {
      return false;
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: 'defaultSecret',
      });
      request['user'] = payload;
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
