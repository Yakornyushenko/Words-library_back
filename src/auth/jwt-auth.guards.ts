import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class JwtAuthGuards implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return undefined;
  }

}