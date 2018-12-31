import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
	burgerMenuToggle: boolean = false;

	toggleBurgerMenu(){
		return this.burgerMenuToggle = !this.burgerMenuToggle;
	}



}
