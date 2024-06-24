import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Player } from '../../classes/Player.class';
import { IPlayer } from '../../models/player.model';
import { CardInfo } from '../../models/card-info.model';
import { IPlayerService } from '../../contracts/IPlayerService.contract';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayersService implements IPlayerService {
  private httpClient = inject(HttpClient);

  getCardInfo(): Observable<CardInfo[]> {
    return this.getFilePlayers().pipe(
      map((players) => {
        return players.map(
          (player) =>
            ({
              id: player.person.id,
              name: player.person.name,
              img_url: player.img_url,
            }) as CardInfo,
        );
      }),
    );
  }

  getPlayerById(id: number): Observable<Player> {
    return this.getFilePlayers().pipe(
      map((players) => {
        const player = players.find((p) => p.person.id === id);
        if (!player) {
          throw new Error('Player not found');
        }
        return player;
      }),
    );
  }

  private getFilePlayers(): Observable<Player[]> {
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
