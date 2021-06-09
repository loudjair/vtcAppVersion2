import { Component, OnInit } from '@angular/core';
import {faCar, faHome, faRoad} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCar = faCar;
  faRoad = faRoad;
  faHome = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
