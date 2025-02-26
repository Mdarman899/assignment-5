

const bokingSeat = 0;
// const ticketPrice = 550;
let titleCount = 1;
let totalTicketPrice = 550;
let totalAmount = 0;
const discountPrice = 0;
const grandTotalAmount = 0;

const seats = document.querySelectorAll('.seat');
const seatArray = [...seats];
const resurvArray = [];
// console.log(seats)

for (let index = 0; index < seatArray.length; index++) {
    const seat = seatArray[index];
    // console.log(element)
     


    seat.addEventListener('click',stopclick = function(event){
        resurvArray.push(event.target);
        // console.log(resurvArray);
        // alart if selected seat up to 4
        if (resurvArray.length > 4)  {
            alert('You cant purchess up to 4 ticket')
            // seat.removeEventListener()
            
        }
        else if(resurvArray.length < 5){
            seat.classList.add('bg-green-400')
            if(seat.classList.contains('bg-green-400')){
                // console.log('gggggggggggg')
                seat.setAttribute("disabled", "");
                seat.classList.add('disabled:bg-green-500')
                seat.classList.add('disabled:text-white')
            }

            // append child selected seat
        const seatNumber = seat.innerText;
        const selectedSeats = document.getElementById('selected-seats');

        // selected seat add a new div
        const div = document.createElement('div')
        const p = document.createElement('p')
        p.innerText = seatNumber;
        div.appendChild(p);
        const p1 = document.createElement('p')
        p1.innerText = 'Economy';
        div.appendChild(p1);
        const p2 = document.createElement('p')
        p2.innerText = 550;
        div.appendChild(p2);
        selectedSeats.appendChild(div);
        div.classList.add('flex')
        div.classList.add('justify-between')

        //selected seat count 
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText= titleCount
        titleCount++;
        // avilable seat carculate
        const totalSeat = document.getElementById('total-seat')
        totalSeat.innerText = 40  ;
        totalSeat.innerText = parseFloat(totalSeat.innerText) - parseFloat(seatCount.innerText);
        // console.log(seatCount.innerText)
        
        // total price calculate
        const totalPrice = document.getElementById('total-price');
        
        totalAmount +=totalTicketPrice;
        totalPrice.innerText = totalAmount;


        const discountPrice = document.getElementById('discount-price');
        const grandTotal = document.getElementById('grant-total');
        grandTotal.innerText = totalAmount;
        
       
        // discount value access and calculate
        const discountBtn = document.getElementById('discount-btn');
        discountBtn.disabled = false;

        discountBtn.addEventListener('click',function(){
            const discountInput = document.getElementById('discount-input').value;
            const discountSection = document.getElementById('discount-section')
            if(discountInput ==='NEW15'){
               discountPrice.innerText = totalAmount * .15;
               grandTotal.innerText = totalAmount - parseInt(discountPrice.innerText)
                console.log(discountBtn)
                const discountContainer = document.getElementById('discount-container')
               discountContainer.classList.add('hidden');
               discountSection.classList.remove('hidden');
            }
            else if(discountInput ==='Couple 20'){
               discountPrice.innerText = totalAmount * .20;
               grandTotal.innerText = totalAmount - parseInt(discountPrice.innerText)
                console.log(discountBtn)
                const discountContainer = document.getElementById('discount-container')
               discountContainer.classList.add('hidden');
               discountSection.classList.remove('hidden');
            }
            
            // else(resurvArray.length)
        
        })
     
              
        }
        
    })
     
}
const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click',function(){
            if(resurvArray.length === 0){
                alert('Please selecet minimum one seat')
                
            }
            else{
               nextBtn.onclick = my_modal_5.showModal();
            }
        })

         if(resurvArray.length > 0){
            const discountBtn=document.getElementById('discount-btn');
            // discountBtn.disabled = false;
        
        } 

