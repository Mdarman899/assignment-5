function play() {
    hidescreen("first-page");
    // showscreen("second-page")
}
// basic variable
let seatCounted = 1 ;
const bokingSeat = 0;
const discountPrice =0;
const grandTotalAmount = 0 ;
let totalAmount = 0 ;



const seats = document.querySelectorAll('.seat');
const createArray = [...seats];
const resurvArray = [];


for(let i = 0 ; i<createArray.length ; i++ ){
    const seat = createArray[i];
    // console.log(seat);

    seat.addEventListener('click',stopclick = function(event){
        resurvArray.push(event.target);
        // console.log(resurvArray);

        if(resurvArray.length > 4){
            alert('You cannt purchess up to 4 ticket');
            seat.removeEventListener();
        }
        else if(resurvArray.length < 5 ){
            seat.classList.add('bg-green-400');
            seat.setAttribute("disabled", "");
            seat.classList.add('disabled:bg-green-600')
            seat.classList.add('disabled:text-white')
        }
        

        const seatNumber = seat.innerText ;
        const selectedSeatss = document.getElementById("seleceted-seats");

        // console.log(selectedSeatss);

        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = seatNumber ;
        div.appendChild(p);
        const p1 = document.createElement('p');
        p1.innerText = 'Economy' ;
        div.appendChild(p1);
        const p2 = document.createElement('p');
        p2.innerText = '550';
        div.appendChild(p2);
        selectedSeatss.appendChild(div);
        div.classList.add('flex');
        div.classList.add('justify-between');
        
        // seleceted seat counting
        const seatCounting = document.getElementById('seat-count');
        seatCounting.innerText = seatCounted ;
        seatCounted++;
        // console.log(seatCounted);

        // avilable seat counting
        const totalSeat = document.getElementById('total-seat');
        // const bookingSeat = seatCounting.innerHTML ;
        totalSeat.innerText = 40 ;
        totalSeat.innerText = parseFloat(totalSeat.innerText) - parseFloat(seatCounting.innerText)  ;
        
        // ticket price 
        
        const ticketPrice = 550 ;
        const totalPrice = document.getElementById("total-price");
        totalAmount += ticketPrice ;
        totalPrice.innerText = totalAmount ;
        // console.log(totalAmount);

        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerHTML = totalAmount ;
    })

    
    const discountBtn = document.getElementById('discount-btn');
    discountBtn.disabled = false ;
    // console.log(discountBtn);

    discountBtn.addEventListener('click', function(){
        const grandTotal = document.getElementById('grand-total');
        const inputField = document.getElementById('input-field').value;
        const discountContainer = document.getElementById('discount-container');
        if(inputField === 'NEW15'){
            grandTotal.innerText = totalAmount - parseFloat(totalAmount * .15);
            discountContainer.classList.add('hidden');
        }
        else if(inputField === 'COUPLE20') {
            grandTotal.innerText = totalAmount - parseFloat(totalAmount * .20);
            discountContainer.classList.add('hidden');
        }
        // else{
        //     alert('Unvalid cupon code');
        // }
    })
}


   const nextBtn = document.getElementById('next-btn');
   nextBtn.addEventListener('click', function(){
    const modalPage = document.getElementById('modal-page');
    const webPage = document.getElementById('web-page');
    
    if(resurvArray.length < 2){
        alert("minimun two select");
    }
    else{
        webPage.classList.add('hidden');
        modalPage.classList.remove('hidden');
    }

   })


