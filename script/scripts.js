const seats = document.querySelectorAll('.seat-button');
let seatLefts = 40;
let seatBooked = 0;
const prices = document.getElementById('price');
const price = parseInt(prices.innerText) ;
for(const seat of seats){
    seat.addEventListener('click', function(event){
        const bookingSeat = event.target.innerText;
        if(seatBooked ===4){
        hiddenElementById('seat-button')     
        }
        const leftedSeats = seatLefts - 1  ;
        const seatBooking = seatBooked + 1;
        console.log(typeof seatBooking)
        setInnerText('seats-left', leftedSeats) ;
        setInnerText('seat-booked', seatBooking) ;
                               // create & append
        const seatConfirm = document.getElementById('seat-confirm');
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p.innerText= bookingSeat;
        p1.innerText= 'Economy';
        p2.innerText= 550;
        seatConfirm.appendChild(p);
        seatConfirm.appendChild(p1);
        seatConfirm.appendChild(p2);
        seatLefts--;
        seatBooked++;          
                             // total price 
        const priceTotal = document.getElementById('total-price');
        const totalPrice = seatBooked * price;
        priceTotal.innerText= totalPrice;
        disableButton (bookingSeat);      
                              // coupon code 
        const getInputById = document.getElementById('apply-btn');
        getInputById.addEventListener('click', function(){
        const inputValue = document.getElementById('coupon-input');
        const inputs = inputValue.value;
        const grandTotalPrices = document.getElementById('grand-total');
        let grandTotals = grandTotalPrices.innerText;
                         // discount calculations 
        if(seatBooked >= 4){
            if(inputs==='NEW15'){
                const grandTotal = totalPrice * 15 / 100 ;
                const total = parseInt(totalPrice - grandTotal);
                setInnerText('grand-total', total);
                hiddenElementById('discount-field');
            }else if (inputs === 'Couple 20'){
                const grandTotal = totalPrice * 20 / 100 ;
                const total = parseInt(totalPrice - grandTotal);
                setInnerText('grand-total', total);
                hiddenElementById('discount-field');
            }else{
                setInnerText('grand-total', totalPrice);
                }
        }else{
            setInnerText('grand-total', totalPrice);            
        }             
        })       
                             // refresh all 
        const getInputNoById = document.getElementById('next-btn');
        getInputNoById.addEventListener('click', function(){
            document.getElementById('coupon-input').value= '';
            document.getElementById('seat-confirm').innerText= '';
            document.getElementById('seats-left').innerText= '';
            seatBooked= 0;
            seatLefts= 40;
            document.getElementById('seat-booked').innerText= '';
            enableButton(bookingSeat);
            enableButton(bookingSeat);   
        })
    })   
}