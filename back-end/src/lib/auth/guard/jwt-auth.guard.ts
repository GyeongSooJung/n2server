import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * 로그인된 사용자 인증 가드
 */

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * 인증 전략을 수행하기 전에 호출 (1/4)
   * @param context
   * @returns
   */
  // canActivate(context: ExecutionContext) {
  //     console.log("*** canActivate in JwtAuthGuard (1/4)")
  //     return super.canActivate(context);
  // }
  /**
   * 인증 전략 수행 후에 호출 (4/4)
   * @param err
   * @param user
   * @param info
   * @returns
   */
  // handleRequest(err, user, info) {
  //     console.log("*** handleRequest in JwtAuthGuard (4/4)")
  //     console.log(user);
  //     if (err || !user) {
  //         throw err || new UnauthorizedException();
  //     }
  //     return user;
  // }
}
