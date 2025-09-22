import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-embed',
  templateUrl: './medium-embed.component.html',
  styleUrls: ['./medium-embed.component.scss']
})
export class MediumEmbedComponent {
@Input() post: any;
  imageUrl: string = '';

  ngOnInit(): void {
    this.imageUrl = this.extractImageUrl(this.post.content);
  }

  private extractImageUrl(html: string): string {
    if (!html) return 'https://via.placeholder.com/400x200?text=No+Image';
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : 'https://via.placeholder.com/400x200?text=No+Image';
  }

  openPost(link:any): void {
    window.open(link, '_blank');
  }
}