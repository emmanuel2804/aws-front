import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../services/database.services";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers:[DatabaseService]
})
export class FormsComponent implements OnInit {

  public new_lastName;
  public new_firstName;
  public new_email;
  public new_comments;

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  createPerson(lastName, firstName, email, comments, option) {

    let lastname  = { lastName : lastName };
    let firstname = { firstName: firstName };
    let Email     = { email    : email };
    let Comments  = { comments : comments };
    let Option    = { options  : option };

    console.log(lastName, firstName, Email, Comments);

    this.database.createPerson(lastname, firstname, Email, Comments, Option);
  }
}