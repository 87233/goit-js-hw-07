const nameImput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const text = document.querySelector('#hello');

nameImput.addEventListener('input', (event) => { if (event.currentTarget.value === '') { 
   nameOutput.textContent = 'Anonymous'; 
    console.log(nameOutput);
 } else if (event.currentTarget.value.trim() === "") { 
      nameOutput.textContent = 'Anonymous';  console.log(nameOutput.textContent); 
   } else { 
         nameOutput.textContent = event.currentTarget.value.trim(); 
    console.log(nameOutput.textContent);
 } });
