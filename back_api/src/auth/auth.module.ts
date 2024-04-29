import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [UsersModule, PassportModule,
            JwtModule.register({
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '60s' },
            })],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}