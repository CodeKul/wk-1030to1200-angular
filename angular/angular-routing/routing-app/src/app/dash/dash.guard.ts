import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): boolean {
      console.log(next)
      console.log(state)

      if(next.params['usNm'] != 'android') {
        return false
      } 
      return true
  }
}
