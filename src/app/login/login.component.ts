import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  getName(){
    alert("function called from other module")
  }
  getData(val:string){
    console.warn(val);
  }
  displayval = '';
  getData2(val:string){
    console.warn(val);
    this.displayval =val;
  }

  count = 0;
  counter(type:string){
    type ==='add' ?this.count++:this.count--;
  }

}
