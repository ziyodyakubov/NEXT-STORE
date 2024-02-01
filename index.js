"use  strict";

// CARD INFORMATION INTERCHANGE STARTED
let wrapper = document.querySelector('.wrapper3');


cardinfo.forEach((el) => {

    let card = document.createElement('div');
    card.classList.add('card', 'p-[10px]', 'w-[230px]', 'h-[410px]', 'bg-[#fff]', 'border-none');

    card.innerHTML = `
<img class="card__img w-[180px] relative left-[4px]" src="${el.image}" alt="${el.alternative}">

<div class="card-body p-[10px]">
    <strong class="text-[#0D63F3] text-[18px] font-[500] pb-[6px]"> ${el.price}</strong>

    <p class="text-[14px] pb-[33px] pt-[4px]">${el.name.substring(0, 20)}</p>
    <span class="text-[#6C757D] text-[14px]">${el.ordercount}</span>
    <div class="flex justify-between items-center pt-[25px]">
        <button class="pt-[10px] pb-[10px] pl-[25px] pr-[25px] bg-[#0D63F3] rounded-[8px] h-[45px] text-[#FFF] text-[16px] hover:bg-[#0d61f3d1]">${el.button}</button>

        <img class="h-[29px] cursor-pointer" src="${el.korzinka}" alt="korzinka">
    </div>

</div>`;

    wrapper.appendChild(card);

})
// CARD INFORMATION INTERCHANGE ENDED


// KATALOG CLICK STARTED
let katalogButton = document.querySelector("#bx-menu");
let katalogSpan = document.querySelector(".bx-menu");
let katalog = document.querySelector(".katalog-hover");

// katalogButton.addEventListener('click',()=>{
// })


katalogButton.addEventListener("click", () => {
    katalog.classList.toggle("hidden")
    if (katalog.classList[5] !== "hidden") {
        katalog.style.display = 'flex'
    } else {
        katalog.style.display = 'none'

    }
    // katalog.style.display = 'flex';
})






// KATALOG CLICK ENDED


// LOADER COMPONENT 

let loadWrapper = document.querySelector(".loader-wrapper");



window.addEventListener('DOMContentLoaded', () => {
    loadWrapper.style.display = 'flex';
    document.body.style.overflow = "hidden";
})


window.addEventListener('load', () => {

    setTimeout(() => {

        loadWrapper.style.display = 'none';
        document.body.style.overflow = "visible";

    }, 500)

})

// MODAL WRAPPER

let modalWrapper = document.querySelector(".modal_wrapper"),
    open = document.querySelector("#login"),
    close = document.querySelector("#close");


open.addEventListener("click", () => {
    modalWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
})


close.addEventListener("click", () => {
    modalWrapper.style.display = "none";
    document.body.style.overflow = "visible";
})

modalWrapper.addEventListener('click', (e) => {


    if (e.target.classList.contains('modal_header') || e.target.classList.contains('modal_body') || e.target.classList.contains('modal_footer') || e.target.classList.contains('modal_title') || e.target.classList.contains("modal_submit")) {
        modalWrapper.style.display = "flex";
        console.log(e.target.classList);
        document.body.style.overflow = "hidden";
    } else {
        modalWrapper.style.display = "none";
        console.log(e.target.classList)
        document.body.style.overflow = "visible";
    }

})
