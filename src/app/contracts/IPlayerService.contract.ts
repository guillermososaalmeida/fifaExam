import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../classes/Player.class';

@Injectable()
export abstract class IPlayerService {
  public abstract getFilePlayers(): Observable<Player[]>;
}
