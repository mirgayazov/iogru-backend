import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, JwtService, JwtStrategy],
  controllers: [AuthController],
  imports: [JwtModule.register({})],
  exports: [AuthService],
})
export class AuthModule {}
