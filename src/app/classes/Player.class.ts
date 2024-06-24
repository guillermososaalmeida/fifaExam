import { Person } from '../models/person.model';
import { IPlayer } from '../models/player.model';
import { Stats } from '../models/stats.model';
import { Videos } from '../models/videos.model';

export class Player implements IPlayer {
  person: Person;
  stats: Stats;
  number: number;
  debut: string;
  position: string;
  starter: boolean;
  comment: string;
  img_url: string;
  videos: Videos[];

  constructor(player: IPlayer) {
    this.person = player.person;
    this.stats = player.stats;
    this.number = player.number;
    this.debut = player.debut;
    this.position = player.position;
    this.starter = player.starter;
    this.comment = player.comment;
    this.img_url = player.img_url;
    this.videos = player.videos;
  }
}
