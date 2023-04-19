import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  getName() {
    alert('function called from other module');
  }
  getData(val: string) {
    console.warn(val);
  }
  displayval = '';
  getData2(val: string) {
    console.warn(val);
    this.displayval = val;
  }

  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  name = 'mehul';
  disable = false;
  show = false;
  showwithparameter = 'yes';

  // color = 'yelldow';

  user = ['mehul', 'dhaval', 'ankit', 'zaid'];
  usersDetails = [
    {
      name: 'mehul',
      email: 'mehul@g.com',
      phone: '987654321',
      socialAccount: ['facebook', 'insta', 'gmail'],
    },
    {
      name: 'dhaval',
      email: 'dhaval@g.com',
      phone: '1234679',
      socialAccount: ['dfacebook', 'dinsta', 'dgmail'],
    },
    {
      name: 'ankit',
      email: 'ankit@g.com',
      phone: '456981310',
      socialAccount: ['afacebook', 'ainsta', 'agmail'],
    },
    {
      name: 'zaid',
      email: 'zaid@g.com',
      phone: '96385520741',
      socialAccount: ['zfacebook', 'zinsta', 'zgmail'],
    },
  ];

  color = 'green';
  bgcolor = 'yellow';
  updateColor() {
    (this.color = 'yellow'), (this.bgcolor = 'green');
  }

  userData: any = {};
  getdatafromform(data: NgForm) {
    console.log(data);
    this.userData = data;
  }

  display = true;
  toggel() {
    this.display = !this.display;
  }

  todolist:any[]=[];
  addTask(item:String){
    this.todolist.push({id:this.todolist.length,name:item});
    console.log(this.todolist);
  }
  removeTask(id:string){
    console.log(id);
    this.todolist = this.todolist.filter(item=>item.id!==id);

  }
data=10;
updateChild(){
  this.data = Math.floor(Math.random()*10)
}
userDetails=[
  {name:'mehul', email:'mehul123@gmail.com'},
  {name:'rahul', email:'rahul123@gmail.com'},
  {name:'dhaval', email:'dhaval123@gmail.com'},
  {name:'nilstark', email:'nilstark123@gmail.com'},
]

}
