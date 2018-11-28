import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dt-drvn',
  templateUrl: './dt-drvn.component.html',
  styleUrls: ['./dt-drvn.component.css']
})
export class DtDrvnComponent implements OnInit {

  fg : FormGroup

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    // web call for pulling data from server in the case of EDIT

    this.fg = this.fb.group({
      usNm : this.fb.control('', Validators.required),
      pass : ['', Validators.required],
      eml : ['', Validators.compose([Validators.required, Validators.email]) ]
    })
  }

  mySub(){
    console.log(this.fg)
    console.log(this.fg.value)
  }
}
