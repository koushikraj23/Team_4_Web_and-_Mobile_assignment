import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class UpdateUserResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService,) { }

  resolve(route: ActivatedRouteSnapshot) {

    return this.firebaseService.getUser();
  }
}
