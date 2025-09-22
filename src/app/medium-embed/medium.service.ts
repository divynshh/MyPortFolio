import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface MediumItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  content: string;
  categories:[string]
}

@Injectable({
  providedIn: 'root'
})

export class MediumService {

  private rssToJsonApiBaseUrl = 'https://api.rss2json.com/v1/api.json';
  private mediumRssUrl = 'https://medium.com/feed/@divyansh28071997'; 

  constructor(private http: HttpClient) { }

  getPosts(): Observable<MediumItem[]> {
    const url = `${this.rssToJsonApiBaseUrl}?rss_url=${encodeURIComponent(this.mediumRssUrl)}`;
  
    return this.http.get<any>(url).pipe(
      map(response => {
        if (response && response.items) {
          return response.items.map((item: any) => {
            const imageMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
            return {
              title: item.title,
              link: item.link,
              categories: item.categories,
              content: item.content,
              description: item.description,
              pubDate: item.pubDate,
              image: imageMatch ? imageMatch[1] : null // ✅ extract first image if available
            };
          });
        } else {
          return [];
        }
      })
    );
  }
  
}