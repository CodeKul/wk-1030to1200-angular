import { Crd } from './../mx-crd/crd';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  nm = 'codekul.com'
  amt = 100
  typ = 'button'
  cls = 'btn btn-primary'
  anyThing : string = 'codekul is great'
  crd : Crd
  clkCrd : string

  constructor() {

    this.crd = new Crd()
    this.crd.imgUrl ='https://www.traccar.org/images/server/feature-server.svg'
    this.crd.ttl ='Server'
    this.crd.msg = `Traccar software provides high performance and stability on Windows, Linux or any other platform. The server can be self-hosted in the cloud or on-premise. We also provide a number of hosted options with professional support.`

  }

  ngOnInit() {
  }

  clickMe(ev: MouseEvent) {
    console.log('Clicked')
    console.log(ev)
  }

  onCardClick(crd : Crd) {
    console.log('event received')
    this.clkCrd = crd.ttl
  }
}
