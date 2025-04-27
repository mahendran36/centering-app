import { Component } from '@angular/core';
import { SHARED_COMPONENTS } from './shared/modules/components';
import { RouterModule } from '@angular/router';
import {
  home,
  heart,
  star,
  person,
  menu,
  settings,
  logOut,
  notifications,
  cart,
  search,
  close,
  checkmark,
  trash,
  add,
  remove,
  arrowBack,
  arrowForward,
  calendar,
  camera,
  chatbubble,
  cloud,
  download,
  location,
  lockClosed,
  lockOpen,
  time,
  warning,
  chevronDownOutline,
  create,
  chevronForward,
  cube,
  chevronBackOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true, // Add this line to enable standalone component declaratio
  styleUrls: ['app.component.scss'],
  imports: [SHARED_COMPONENTS, RouterModule]
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Materials', url: '/materials', icon: 'cube' },
    { title: 'Orders', url: '/orders', icon: 'cart' }
  ];

  constructor() {
    addIcons({
      home: home,
      heart: heart,
      star: star,
      person: person,
      menu: menu,
      settings: settings,
      logOut: logOut,
      notifications: notifications,
      cart: cart,
      search: search,
      close: close,
      checkmark: checkmark,
      trash: trash,
      add: add,
      remove: remove,
      arrowBack: arrowBack,
      arrowForward: arrowForward,
      calendar: calendar,
      camera: camera,
      chatbubble: chatbubble,
      cloud: cloud,
      download: download,
      location: location,
      lockClosed: lockClosed,
      lockOpen: lockOpen,
      time: time,
      warning: warning,
      chevronDownOutline: chevronDownOutline,
      create: create,
      chevronForward: chevronForward,
      cube: cube,
      chevronBackOutline: chevronBackOutline
      
    });
  }
}
