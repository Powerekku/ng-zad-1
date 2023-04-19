import { Component } from '@angular/core';

@Component({
  selector: 'wiazSch',
  templateUrl: './wiazania-schwurtz.component.html',
  styleUrls: ['./wiazania-schwurtz.component.css']
})
export class WiazaniaSchwurtzComponent {

  //interpolacja
  tytul = "przykład interpolacji";

  //property binding
  prop = "przyklad property bindingu";

  //two-way binding
  txt2way = '';
  button = true;
  showClick = '';

  //event binding
  onClick(event: Event){
    this.showClick = "👍";
    this.button = false;
  }
}
