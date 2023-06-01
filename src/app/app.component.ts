import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  leftdice = '../assets/img/dice2.png';
  rightdice = '../assets/img/dice1.png';
  dice1 = 1;
  dice2 = 2;

  dropDice(): void {
    this.dice1 = Math.round(Math.random() * 5) + 1;
    this.dice2 = Math.round(Math.random() * 5) + 1;
    this.leftdice = '../assets/img/dice' + this.dice1 + '.png';
    this.rightdice = '../assets/img/dice' + this.dice2 + '.png';
  }
}
