const seats = document.querySelectorAll('.seat-button');
let seatLefts = 40;
let seatBooked = 0;
for(const seat of seats){
    
    seat.addEventListener('click', function(event){
        const bookingSeat = event.target.innerText;
        setBackgroundColor (bookingSeat);
        console.log(bookingSeat);
        // const seatsLeft = document.getElementById('seats-left');
        const leftedSeats = seatLefts - 1  ;
        const seatBooking = seatBooked + 1;
        setInnerText('seats-left', leftedSeats) ;
        setInnerText('seat-booked', seatBooking) ;
        seatLefts--;
        seatBooked++;
    })
}


