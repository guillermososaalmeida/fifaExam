import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardInfo } from '../models/card-info.model';

@Injectable()
export abstract class IPlayerService {
  public abstract getCardInfo(): Observable<CardInfo[]>;
}
