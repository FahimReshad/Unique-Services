const seats = document.querySelectorAll('.seat-button');
let seatLefts = 40;
let seatBooked = 0;
for(const seat of seats){
    
    seat.addEventListener('click', function(event){
        const bookingSeat = event.target.innerText;
        setBackgroundColor (bookingSeat);
        // const seatsLeft = document.getElementById('seats-left');
        const leftedSeats = seatLefts - 1  ;
        const seatBooking = parseInt(seatBooked) + 1;
        setInnerText('seats-left', leftedSeats) ;
        setInnerText('seat-booked', seatBooking) ;
        seatLefts--;
        seatBooked++;
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
        // total price 
        const priceTotal = document.getElementById('total-price');
        const totalPrice = seatBooked * 550;
        priceTotal.innerText= totalPrice;
    })
}


