import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Swiper } from 'swiper';
import { ScreenSizeService } from './shared/screen-size.service';



Swiper.use([Navigation, Pagination,Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'My-Portfolio';

  destroyed = new Subject<void>();
  currentScreenSize: string;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private screenSizeService: ScreenSizeService
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.screenSizeService.setScreenSize(this.currentScreenSize); // update service
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
