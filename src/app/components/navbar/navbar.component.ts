import { Component } from '@angular/core';
import { faBell, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faSearch = faSearch;

}
