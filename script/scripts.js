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
                console.log();
                const discountedPrice = document.getElementById('discount-price');
                         const p3 = document.createComment('p');
                         const p4 = document.createComment('p');
                         p3.innerText = 'Discount Price';
                         p4.innerText = parseInt (grandTotal);
                         discountedPrice.appendChild(p3); 
                         discountedPrice.appendChild(p4); 
                         setInnerText('discount-price', parseInt (grandTotal));
                setInnerText('grand-total', total);
                hiddenElementById('discount-field');
            }else if (inputs === 'Couple 20'){
                const grandTotal = totalPrice * 20 / 100 ;
                const total = parseInt(totalPrice - grandTotal);
                const discountedPrice = document.getElementById('discount-price');
                         const p3 = document.createComment('p');
                         const p4 = document.createComment('p');
                         p3.innerText = 'Discount Price';
                         p4.innerText = parseInt (grandTotal);
                         discountedPrice.appendChild(p3); 
                         discountedPrice.appendChild(p4); 
                         setInnerText('discount-price', parseInt (grandTotal));
                setInnerText('grand-total', total);
                hiddenElementById('discount-field');
            }else{
                setInnerText('grand-total', totalPrice);
                const discountedPrice = document.getElementById('discount-price');
                         const p3 = document.createComment('p');
                         const p4 = document.createComment('p');
                         p3.innerText = 'Discount Price';
                         p4.innerText = 0;
                         discountedPrice.appendChild(p3); 
                         discountedPrice.appendChild(p4); 
                         setInnerText('discount-price', 0);
                }
        }else{
            setInnerText('grand-total', totalPrice);      
            const discountedPrice = document.getElementById('discount-price');
            const p3 = document.createComment('p');
            const p4 = document.createComment('p');
                 //  p.innerText = parseInt (grandTotal);
            p3.innerText = 'Discount Price';
            p4.innerText = 0;
            discountedPrice.appendChild(p3); 
            discountedPrice.appendChild(p4); 
            setInnerText('discount-price', 0);      
        }             
        })                  
        const phoneNumber = document.getElementById('phone-number');
        const number = phoneNumber.value;
        if(typeof parseInt (number) === 'number'){
            document.getElementById('next-btn').disabled = false;
        }
                             // refresh all 
        const getInputNoById = document.getElementById('next-btn');
        getInputNoById.addEventListener('click', function(){
            document.getElementById('coupon-input').value= '';
            document.getElementById('seat-confirm').innerText= 0;
            document.getElementById('seats-left').innerText= 40;
            document.getElementById('phone-number').value= '';
            document.getElementById('grand-total').innerText= 0;
            document.getElementById('total-price').innerText= 0;
            document.getElementById('discount-price').innerText= 0;
            seatBooked= 0;
            seatLefts= 40;
            document.getElementById('seat-booked').innerText= 0;
            enableButton(bookingSeat);
            enableButton(bookingSeat); 
            enableButtonn('next-btn') ;
        })
        
    })   
    
}