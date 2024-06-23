import { Component, OnInit } from '@angular/core';
import { IPlayerService } from '../../contracts/IPlayerService.contract';
import { PlayersService } from '../../services/player-services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [{ provide: IPlayerService, useClass: PlayersService }],
})
export class HomeComponent implements OnInit {
  constructor(private playerService: IPlayerService) {}

  ngOnInit(): void {
    this.playerService.getFilePlayers().subscribe((players) => {
      console.log('players', players);
    });
  }
}
