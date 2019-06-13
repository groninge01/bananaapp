import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { INITIATE_TIME_HOP, InitiateTimeHop, TimeHopComplete } from './banana.actions';
import { RotService } from '../../rot.service';

@Injectable()
export class BananaEffects {
  constructor(private actions$: Actions, private rotService: RotService) {}

  @Effect()
  public initiateTimeHop$ = this.actions$.pipe(
    ofType(INITIATE_TIME_HOP),
    switchMap((action: InitiateTimeHop) =>
      this.rotService.rotBanana().pipe(
        map(color => new TimeHopComplete(color))
      ),
    ),
  );
}