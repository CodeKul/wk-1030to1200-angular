import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {
  
  thmb = '../../assets/donation.svg'
  full = '../../assets/gift.svg'

  constructor() { }

  ngOnInit() {
  }

}
