const seats = document.querySelectorAll('.seat-button');
let seatLefts = 40;
let seatBooked = 0;
const prices = document.getElementById('price');
const price = parseInt(prices.innerText) ;
for(const seat of seats){
    
    seat.addEventListener('click', function(event){
        const bookingSeat = event.target.innerText;
        
        const leftedSeats = seatLefts - 1  ;
        const seatBooking = seatBooked + 1;
        console.log(typeof seatBooking)
        setInnerText('seats-left', leftedSeats) ;
        setInnerText('seat-booked', seatBooking) ;
        // let no=  setInnerText('seat-booked', seatBooked) ;
        
        // let n = undefined;
        // no = n ?? 4
        // console.log(no);


        if(seatBooked ==4){
            // removeEventListener('click')
        enableButton('seat-button');
        // removeBackgroundColor (seat) ;

        
    }

        
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
            
           
                          // create & append
        
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
        if(seatBooked >= 4){
            if(inputs==='NEW15'){
                const grandTotal = totalPrice * 15 / 100 ;
                const total = parseInt(totalPrice - grandTotal);
                setInnerText('grand-total', total);
            }
            else if (inputs === 'Couple 20'){
                const grandTotal = totalPrice * 20 / 100 ;
                const total = parseInt(totalPrice - grandTotal);
                setInnerText('grand-total', total);
            }else{
                setInnerText('grand-total', totalPrice);
                }
        }else{
            setInnerText('grand-total', totalPrice);
        }      
        })       
        
        
        const getInputNoById = document.getElementById('next-btn');
        getInputNoById.addEventListener('click', function(){
            const input = document.getElementById('phone-number');
            const inputs = input.valueAsNumber;
            console.log(typeof inputs);
            hiddenElementById('body-page');
            // removeElementById('my_modal_1');
            // if(typeof inputs ==='number' ){
            //     enableButton ('next-btn');
            //     // disableButton ('next-btn')
            // }
            // else {
            //     // disableButton ('next-btn')
            // }
            // const modal = document.getElementById('my_modal_1');
            // const getInputNoById = document.getElementById('next-btn');
            // getInputNoById.onclick = function(){
            //     modal.style.display = "block" ;
            // }


        })
        
    })
    
}


// const getInputById = document.getElementById('apply-btn');
// getInputById.addEventListener('click', function(){
//     // console.log('okay')
//     const inputValue = document.getElementById('coupon-input');
    
//     const inputs = inputValue.value;
//     if(inputs==='NEW15'){
//         const grandTotal = totalPrice * 15 / 100 ;
//         const total = parseInt(totalPrice - grandTotal);

//         console.log(total);
//     }else{
//         console.log(totalPrice)
//     }
// })

// document.getElementById('coupon-input').addEventListener('keyup', function(){
//     const input = document.getElementById('coupon-input');
//     console.log(input.value)
// });

// function handleInput(){
//     const input = document.getElementById('coupon-input');
//     console.log(input.target)
// }

// document.addEventListener('keyup', handleInput())

// const getInputById = document.getElementById('apply-btn');
// getInputById.addEventListener('click', function(){
//     // console.log('okay')
//     const inputValue = document.getElementById('coupon-input');
    
//     const inputs = inputValue.value;
//     if(inputs==='NEW15'){
        
//     }else{
//         console.log('hae')
//     }
// })


        

