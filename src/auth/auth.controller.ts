import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Req() req: Request) {
    // здесь проверяем пароль и тд
    return this.authService.login(req.socket.remoteAddress);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/refresh')
  async refresh(@Req() req: Request) {
    return this.authService.login(req.socket.remoteAddress);
  }
}
