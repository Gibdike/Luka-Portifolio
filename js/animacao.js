function insereLi(i) {
    var newLi = document.createElement('li');
    var newA = document.createElement('a'); //a tag <a> que faltava
    var newText = document.createTextNode(i + 1);
    var position = document.querySelector('#menu-ul');
    var num = i + 1;
    var link = "#p" + num.toString();
    //os atributos do <a>
    newA.setAttribute("href", link);

    newA.appendChild(newText); //colocar o texto no <a>
    newLi.appendChild(newA); //e o <a> dentro do <li>
    position.appendChild(newLi);
}

function troca() {
    var position = document.querySelector('#menu-ul');
    var bar = document.querySelectorAll('.barra');
    console.log(position);
    console.log(bar);
}


function initAnimacaoScroll() {

    const sections = document.querySelectorAll('.js-scroll');
    const menu = document.querySelectorAll('.s');
    const cont = menu.length;
    console.log(menu);
    console.log(cont);

    for (var i = 0; i < cont; i++) {
        insereLi(i);
        console.log(i);
    }
    console.log("teste");
    console.log(sections);

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.5;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                    bar();
                } else {
                    section.classList.remove('ativo');
                }
            })
        }

        function bar() {
            const ativo = document.querySelectorAll('.s .ativo');
            console.log("ativo");
            console.log(ativo);
            var dist = (ativo.length * 60);
            console.log(dist);
            const barra = document.querySelector('#mark');
            var heig = 240 / cont;
            barra.style.setProperty("height", heig);
            barra.style.setProperty("top", dist);
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();
troca();