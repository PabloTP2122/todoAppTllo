import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faWaveSquare, faBox, faAngleDown, faAngleUp, faGear, faUsers, faBorderAll, faHeart, } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faTrello = faTrello;
  faWaveSquare = faWaveSquare;
  faBox = faBox;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

}
