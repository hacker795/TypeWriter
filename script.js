let title = document.querySelector('.heading');
let name = "I am security expert"
let index = 1;


const typeWriter = () => {
    let new_title = name.slice(0, index);
    title.innerText = new_title;


    index > name.length ? index = 1 : index++;
    setTimeout(() => typeWriter(), 140);
}


typeWriter();