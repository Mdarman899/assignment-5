function play() {
    hidescreen("first-page");
    // showscreen("second-page")
}

// const events = document.querySelector('.a');

// events.addEventListener('click', function(){
//     this.style.backgroundColor = 'red';
    
// })

const len = document.querySelectorAll('.seat-number').length;
console.log(len);

for(var i = 0 ; i < len ; i++) {
   document.querySelectorAll('.seat-number')[i].addEventListener('click' , function(){
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
    const texts = this.innerText ;
    console.log(texts);
    // console.log('clicked')
    // this.innerText = 'arman';
    
    


   })
}
