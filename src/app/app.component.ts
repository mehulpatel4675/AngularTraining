import { Component } from '@angular/core';

@Component({
  selector: 'AngularStart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  getName(){
    alert("function called")
  }

}
