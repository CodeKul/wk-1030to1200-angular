import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tmp-drvn',
  templateUrl: './tmp-drvn.component.html',
  styleUrls: ['./tmp-drvn.component.css']
})
export class TmpDrvnComponent implements OnInit {

  emlPt = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

  constructor() { }

  ngOnInit() {
  }

  mySub(mrFrm : NgForm) {
    console.log('Submitted')
    console.log(mrFrm)
    console.log(mrFrm.controls['email'].value)
    console.log(mrFrm.value)
  }
}
