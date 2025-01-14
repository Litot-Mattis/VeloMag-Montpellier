import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Favorites', url: '/folder/Favorites', icon: 'star' },
    { title: 'Map', url: '/folder/Map', icon: 'map' },
    { title: 'List of all bikes', url: '/folder/All Bikes', icon: 'bicycle' },
    { title: 'Report bikes problem', url: '/folder/Bike Report', icon: 'alert-circle' },
    { title: 'Contact', url: '/folder/Contact', icon: 'mail' },
  ];
  currentRoute: string;

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
        } else {
          console.error('Unknown event type: ' + event);
        }
      });
  }

  getMaxEdgeStart(): number {
    if (this.currentRoute === '/folder/Map') {
      return 0;
    } else {
      return 10000;
    }
  }

}
