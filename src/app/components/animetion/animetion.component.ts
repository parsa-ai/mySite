import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animetion',
  standalone: true,
  imports: [],
  templateUrl: './animetion.component.html',
  styleUrl: './animetion.component.scss'
})
export class AnimetionComponent implements OnInit{

  @Input() targetString: string = '';
  displayText: string = '';
  ngOnInit(): void {
    this.startAnimation();  
  }

  startAnimation() {
    let result = '';
    let index = 0;
    const animate = () => {
      if (index < this.targetString.length) {
        setTimeout(animate, 120); 
        result += this.targetString[index];
        this.displayText = result;
        index++;
      }
    };
    animate(); 
  }
  

  // // Function to start the animation
  // startAnimation() {
  //   let index = 0;
  //   let result = '';

  //   const animate = () => {
  //     if (index < this.targetString.length) {
  //       let randomChar = this.getRandomChar();

  //       // Keep generating a random character until it matches the target character
  //       if (randomChar.toLowerCase() === this.targetString[index].toLowerCase()) {
  //         result += this.targetString[index];
  //         index++;
  //       } else {
  //         this.displayText = result + randomChar;
  //       }
        
  //       setTimeout(animate, 30);  // Mimic the delay from time.sleep(0.04)
  //     } else {
  //       this.displayText = result ;  // Final result when done
  //     }
  //   };

  //   animate();  // Start the animation loop
  // }
  
  

  // // Function to get a random character from the list
  // getRandomChar(): string {
  //   const randomIndex = Math.floor(Math.random() * this.characters.length);
  //   return this.characters[randomIndex];
  // }
}
