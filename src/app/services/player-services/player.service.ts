import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Player } from '../../classes/Player.class';
import { IPlayer } from '../../models/player.model';

export class PlayersService {
  private httpClient = inject(HttpClient);

  getFilePlayers(): Observable<Player[]> {
    const path = '../../assets/players.json';
    return this.httpClient.get<IPlayer[]>(path).pipe(
      map((response: IPlayer[]) => {
        return response.map((player) => new Player(player));
      }),
      catchError((error) => {
        console.error('Error fetching players data', error);
        return throwError(() => new Error('Error fetching players data'));
      }),
    );
  }
}
