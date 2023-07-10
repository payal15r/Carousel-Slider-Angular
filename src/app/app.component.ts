import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChildren('videoPlayer1') videoPlayer1!: QueryList<ElementRef>;
  @ViewChild('main') main!: ElementRef;
  
  title = 'slider';

  carouselItems = [
    {
      type:'video',
      url: '/assets/Summer.mp4'
    },
    {
      type:'image',
      url: '/assets/Capture1.png'
    },
    {
      type:'video',
      url: '/assets/video1.mp4'
    },
    {
      type:'video',
      url: '/assets/Golf.mp4'
    }
  ];
  ngAfterViewInit() {
    debugger
    this.playVideo();

    // this.videoPlayer1.nativeElement.addEventListener('ended', () => {
    // });
  }
  playVideo() {
    this.videoPlayer1.forEach((videoElement: ElementRef) => {
      const video=videoElement.nativeElement;
      video.muted=true;
      video.loop=true;
      if (video.ended || video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
   
  }
}
