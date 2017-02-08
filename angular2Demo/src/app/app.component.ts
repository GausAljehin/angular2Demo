import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <a routerLink= "/">Pocetna</a><br/>
  <a routerLink= "/about">O Nama</a>
  <hr />
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  
}
