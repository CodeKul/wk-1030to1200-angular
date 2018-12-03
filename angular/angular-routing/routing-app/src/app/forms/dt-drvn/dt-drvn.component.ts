import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dt-drvn',
  templateUrl: './dt-drvn.component.html',
  styleUrls: ['./dt-drvn.component.css']
})
export class DtDrvnComponent implements OnInit {

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // web call for pulling data from server in the case of EDIT

    this.fg = this.fb.group({
      usNm: this.fb.control('', Validators.compose([Validators.required, this.startFromA])),
      pass: ['', Validators.required, this.checkUsNm],
      eml: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  mySub() {
    console.log(this.fg)
    console.log(this.fg.value)
  }

  startFromA(ctrl: AbstractControl): ValidationErrors | null {
    if (ctrl.value.charAt(0) === 'A') {
      return null
    }
    return {
      isA: 'It should start from A'
    }
  }

  checkUsNm(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    return Observable.create(
      sub => {
        setTimeout(() => {
          if (ctrl.value === 'Android') {
            sub.next(null)
          } else {
            sub.next({
              isAndroid: 'Your user name should be Android'
            })
          }
          sub.complete()
        }, 2000)
      }
    )
  }
}
