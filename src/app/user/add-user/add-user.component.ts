import {Component} from '@angular/core';
import {User} from "../../Models/user";
import {UserService} from "../../Core/Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private us: UserService, private route: Router) {

  }

  user?: User


  add(u: User) {
    u.idCustomer = 10
    u.picture = "https://bootdey.com/img/Content/avatar/avatar5.png"
    this.us.addUser(u).subscribe(
      () => {
        alert('done'),
          this.route.navigate(['users'])
      }
    )
  }

}
