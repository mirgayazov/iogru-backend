import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(ip: string) {
    const payload = { ip };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
        expiresIn: '15m',
      }),
    };
  }
}
