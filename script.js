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
			localStorage.setItem('text8', hour8);
			let hour9 = document.getElementById('9').value;
			localStorage.setItem('text9', hour9);
			let hour10 = document.getElementById('10').value;
			localStorage.setItem('text10', hour10);
			let hour11 = document.getElementById('11').value;
			localStorage.setItem('text11', hour11);
			let hour12 = document.getElementById('12').value;
			localStorage.setItem('text12', hour12);
			let hour13 = document.getElementById('13').value;
			localStorage.setItem('text13', hour13);
			let hour14 = document.getElementById('14').value;
			localStorage.setItem('text14', hour14);
			let hour15 = document.getElementById('15').value;
			localStorage.setItem('text15', hour15);
			let hour16 = document.getElementById('16').value;
			localStorage.setItem('text16', hour16);
			let hour17 = document.getElementById('17').value;
			localStorage.setItem('text17', hour17);
        });
     }

  
     let saved8 = localStorage.getItem('text8');
     document.getElementById('8').value = saved8;
     let saved9 = localStorage.getItem('text9');
     document.getElementById('9').value = saved9;
     let saved10 = localStorage.getItem('text10');
     document.getElementById('10').value = saved10;
     let saved11 = localStorage.getItem('text11');
     document.getElementById('11').value = saved11;
     let saved12 = localStorage.getItem('text12');
     document.getElementById('12').value = saved12;
     let saved13 = localStorage.getItem('text13');
     document.getElementById('13').value = saved13;
     let saved14 = localStorage.getItem('text14');
     document.getElementById('14').value = saved14;
     let saved15 = localStorage.getItem('text15');
     document.getElementById('15').value = saved15;
     let saved16 = localStorage.getItem('text16');
     document.getElementById('16').value = saved16;
     var saved17 = localStorage.getItem('text17');
     document.getElementById('17').value = saved17;
});