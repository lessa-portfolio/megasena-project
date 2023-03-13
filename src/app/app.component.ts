import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'megasena-project';
  currentSequence: number[] = [];

  newSequence():void {
    this.currentSequence = this.generateRandomSequence(6);
    console.log(this.currentSequence);
  }

  generateRandomSequence(amount = 6, min = 0, max = 60): number[] {

    let generatedNumbers: number[] = [];

    if (amount < 0) throw console.error('Não é possível gerar uma quantidade negativa de número em uma sequencia');
    if (amount > max - min) throw console.error('Não há opções suficiente entre o valor mínimo e máximo');
    if (min > max) throw console.error('o valor mínimo não pode ser menor que o valor máximo');
    
    for(let i = 0; i < amount; i++) {
      
      let currentValue = this.generateRandomNumbers(min, max);
      
      while(generatedNumbers.includes(currentValue)) {
        currentValue = this.generateRandomNumbers(min, max);
      }

      generatedNumbers.push(currentValue);
    }

    return generatedNumbers;
  }

  generateRandomNumbers(min = 0, max = 60): number {
    const num = Math.random() * (max - min) + min;
    return Math.trunc(num);
  }
}