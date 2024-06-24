import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from '../../services/player-services/player.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
  private router = inject(Router);
  private playerService = inject(PlayersService);
  private sanitizer = inject(DomSanitizer);

  private pathId = window.location.href.split('details').pop();
  private id = Number(this.pathId?.[1]);
  videos: string[] = [];

  ngOnInit(): void {
    this.playerService.getVideosById(this.id).subscribe(
      (videos: string[]) => {
        this.videos = videos;
        console.log('videos', this.videos);

      },
      (error) => {
        console.error('Error fetching videos:', error);
      });
  }

  getVideoYoutube(link: string): SafeResourceUrl {
    const playerVideo = link.split('-v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${playerVideo}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

}
