import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup,Validators,FormArray,FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regForm:FormGroup;
  notAllowed = ["Dheeraj","Sharma"];
  constructor(private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm =this.fb.group({
      details : new FormGroup({
        name : new FormControl(null,[Validators.required,this.notAllowedMethod.bind(this)]),
        email : new FormControl(null,Validators.compose([Validators.required,Validators.email])),
      }),
      password : new FormControl(null),
      hobbies : new FormArray([
        new FormControl(null),
      ])
    })
  }
  submit(){
    console.log(this.regForm)
    console.log(this.regForm.get('hobbies')['controls'])
  }
  addHobbies(){
    (<FormArray>this.regForm.get('hobbies')).push(new FormControl(null,Validators.required))
  }
//custom validators
notAllowedMethod(control:FormControl){
  if(this.notAllowed.indexOf(control.value) !== -1)
  {
    return {errorCode: "true"}
  }
  return null;
}

}
