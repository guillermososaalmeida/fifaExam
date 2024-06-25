import { Observable, catchError, map, throwError } from 'rxjs';
import { Player } from '../../classes/Player.class';
import { IPlayer } from '../../models/player.model';
import { CardInfo } from '../../models/card-info.model';
import { IPlayerService } from '../../contracts/IPlayerService.contract';
import { Injectable, inject } from '@angular/core';
import { EncryptionService } from '../encryp-services/encryption.service';

@Injectable({
  providedIn: 'root',
})
export class PlayersService implements IPlayerService {
  private encryptionService = inject(EncryptionService);

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
    return this.encryptionService.decryptFile().pipe(
      map((decryptedData: IPlayer[]) => { 
        return decryptedData.map(decryptedData => new Player(decryptedData));
      }),
      catchError(error => {
        console.error('Error al obtener y procesar los datos desencriptados:', error);
        return throwError(() => 'Error al obtener y procesar los datos desencriptados');
      })
    );
  }
}
