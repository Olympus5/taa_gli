import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  mapUrl: string;
  @Input() enterprise: string;

  constructor() { }

  ngOnInit() {
  }

  getMap() {

  }
}
