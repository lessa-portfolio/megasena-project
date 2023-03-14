import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSequence: number[] = [];

  newSequence(): void {
    this.currentSequence = this.generateRandomSequence();
  }

  generateRandomSequence(amount = 6, min = 0, max = 60): number[] {
    let generatedNumbers: number[] = [];
    
    for(let i = 0; i < amount; i++) {
      let currentValue = this.generateRandomNumbers(min, max);
      
      // gera novos valores enquanto não sair um valor único
      while(generatedNumbers.includes(currentValue)) {
        currentValue = this.generateRandomNumbers(min, max);
      }

      generatedNumbers.push(currentValue);
    }

    // retorna o array gerado em ordem crescente
    return generatedNumbers.sort((a,b) => a - b);
  }

  generateRandomNumbers(min = 0, max = 60): number {
    const num = Math.random() * (max - min) + min + 1;
    return Math.trunc(num);
  }
}