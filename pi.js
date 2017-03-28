class Pi {

  constructor(){
    this.currentPi = 3
    this.sequenceBegins = 2;
    this.nextOperation = "+"
    console.log(this.currentPi);
  }

  calculate(iterations=3){
    for(let i=1; i<=iterations; i++){

      if(this.nextOperation === "+"){
        this.currentPi = this.currentPi + this.calculateElement(this.sequenceBegins);
        this.nextOperation = "-";
      }
      else {
        this.currentPi = this.currentPi - this.calculateElement(this.sequenceBegins);
        this.nextOperation = "+";
      }

      if(i % 100000 === 0){
        console.log(`Current iteration: ${i}`);
      }

    }

    console.log(`pi = ${this.currentPi}`);

  }

  getNextSequence(startNum){
    const nextSequence = [this.sequenceBegins, this.sequenceBegins+1, this.sequenceBegins+2];
    this.sequenceBegins = this.sequenceBegins+2;
    return nextSequence;
  }

  calculateElement(startNum){
    const sequence = this.getNextSequence(startNum);
    return (4 / (sequence[0] * sequence[1] * sequence[2]));
  }

}

module.exports = Pi;
