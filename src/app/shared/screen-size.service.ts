import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScreenSizeService {
  private screenSizeSource = new BehaviorSubject<string>('Unknown');
  screenSize$ = this.screenSizeSource.asObservable();

  setScreenSize(size: string) {
    this.screenSizeSource.next(size);
  }
}
