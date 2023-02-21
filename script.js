$(document).ready(function () {

    let init = false;
    let now = moment().format('LLLL'); 

    let now24 = moment().format('H'); 
    let now12 = moment().format('h'); 
    if (init) {
        now24 = 13;
        now12 = 1;
    }

    const currentDate = $('#currentDay');
    currentDate.text(now);

    let cal = new Date(); 
    let currentHour = cal.getHours(); 

    for (let i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
   

     {
        $('.saveBtn').click(function () {
            let hour8 = document.getElementById('8').value;
			localStorage.setItem('8', hour8);
			let hour9 = document.getElementById('9').value;
			localStorage.setItem('9', hour9);
			let hour10 = document.getElementById('10').value;
			localStorage.setItem('t10', hour10);
			let hour11 = document.getElementById('11').value;
			localStorage.setItem('t11', hour11);
			let hour12 = document.getElementById('12').value;
			localStorage.setItem('t12', hour12);
			let hour13 = document.getElementById('13').value;
			localStorage.setItem('t13', hour13);
			let hour14 = document.getElementById('14').value;
			localStorage.setItem('t14', hour14);
			let hour15 = document.getElementById('15').value;
			localStorage.setItem('t15', hour15);
			let hour16 = document.getElementById('16').value;
			localStorage.setItem('t16', hour16);
			let hour17 = document.getElementById('17').value;
			localStorage.setItem('t17', hour17);
        });
     }

  

});
