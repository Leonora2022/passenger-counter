let incrementBtn = document.querySelector('.increment-btn');
let saveBtn = document.querySelector('.save-btn');
let count = 0;
let saveEntries = '';

incrementBtn.addEventListener('click', increasePoint);
   function increasePoint() {
       count += 1;
       document.querySelector('.counter').textContent = count;
   }

saveBtn.addEventListener('click', saveCount);
   function saveCount() {
    saveEntries += count + " - ";
    document.querySelector('.save-count').textContent = saveEntries;
    document.querySelector('.counter').textContent = '0';
    count = 0;
   }  