import { Component, OnInit, inject } from '@angular/core';
import { PlayersService } from '../../services/player-services/player.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Player } from '../../classes/Player.class';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
  private playerService = inject(PlayersService);
  private sanitizer = inject(DomSanitizer);
  private pathId = window.location.href.split('details').pop();
  private id = Number(this.pathId?.[1]);

  player: Player = {} as Player;
  routerPage = `home/details/${this.id}%20`

  videosPlayer: { key: string; value: string }[] = [];

  ngOnInit(): void {
    this.playerService.getPlayerById(this.id).subscribe({
      next: (result: Player) => {
        this.player = result;
        this.videosPlayer = Object.entries(this.player.videos).map(([key, value]) => ({
          key: key.toString(),
          value: value.toString()
        }));
        console.log('Videos', this.videosPlayer);
      },
      error: (error) => {
        console.error('Error fetching videos:', error);
      }
    });
  }

  getVideoYoutube(link: string): SafeResourceUrl {
    if (link !== undefined && link.includes('v=')) {
      const videoPlayer = link.split('v=')[1];
      const videoUrl = `https://www.youtube.com/embed/${videoPlayer}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

}
