import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserServiceService} from '../user-service.service';
import {IUser} from '../iuser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  // @ts-ignore
  newUserForm: FormGroup;

  constructor(
    private userS: UserServiceService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      name: [null],
      numberPhone: [null],
      email: [null]
    });
  }

  // tslint:disable-next-line:typedef
  createNewUser() {
    let newU: IUser;
    newU = this.newUserForm.value;
    this.userS.create(newU).subscribe(() => {
      alert('Them moi thanh cong');
    }, error => {alert("Xin chao");});
  }

}
