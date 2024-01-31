"use  strict";

let wrapper = document.querySelector('.wrapper3');


cardinfo.forEach((el)=>{
   
let card = document.createElement('div');
card.classList.add('card' ,'p-[10px]','w-[230px]', 'h-[410px]','bg-[#fff]' ,'border-none');

card.innerHTML = `
<img class="card__img w-[180px] relative left-[4px]" src="${el.image}" alt="${el.alternative}">

<div class="card-body p-[10px]">
    <strong class="text-[#0D63F3] text-[18px] font-[500] pb-[6px]"> ${el.price}</strong>

    <p class="text-[14px] pb-[33px] pt-[4px]">${el.name.substring(0,20)}</p>
    <span class="text-[#6C757D] text-[14px]">${el.ordercount}</span>
    <div class="flex justify-between items-center pt-[25px]">
        <button class="pt-[10px] pb-[10px] pl-[25px] pr-[25px] bg-[#0D63F3] rounded-[8px] h-[45px] text-[#FFF] text-[16px] hover:bg-[#0d61f3d1]">${el.button}</button>

        <img class="h-[29px] cursor-pointer" src="${el.korzinka}" alt="korzinka">
    </div>

</div>`;

wrapper.appendChild(card);

})