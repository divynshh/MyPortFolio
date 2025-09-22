import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() screenSize: string;
  @Input() mp4Src: string;
  @Input() webmSrc: string;
  @Input() m4vSrc: string;

  safeMp4Src: SafeResourceUrl;
  safeWebmSrc: SafeResourceUrl;
  safeM4vSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeMp4Src = this.sanitizer.bypassSecurityTrustResourceUrl(this.mp4Src);
    this.safeWebmSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.webmSrc);
    this.safeM4vSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.m4vSrc);
  }
}
