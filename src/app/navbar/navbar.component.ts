import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 bgcolor = 'red';

constructor() { }
  

  ngOnInit(): void {
  }

  changeColor(name:any){
    this.bgcolor = name;
  }
}
