function insereLi(i, position) {
    var newLi = document.createElement('li');
    var newA = document.createElement('a'); //a tag <a> que faltava
    var newText = document.createTextNode(i + 1);
    var num = i + 1;
    var link = "#p" + num.toString();
    //os atributos do <a>
    newA.setAttribute("href", link);

    newA.appendChild(newText); //colocar o texto no <a>
    newLi.appendChild(newA); //e o <a> dentro do <li>
    newLi.classList.add('oi');
    position.appendChild(newLi);
}

function extend() {
    const lizinha = document.querySelectorAll(".oi");
    const menu = document.querySelectorAll('.s');
    console.log(menu);
    for (let index = 0; index < lizinha.length; index++) {
        lizinha[index].addEventListener("mouseover", mouseOver);
        lizinha[index].addEventListener("mouseout", mouseOut);
        const text = menu[index].getAttribute('sub');
        const newText = document.createTextNode(' -' + ' ' + text);


        function mouseOver() {
            lizinha[index].classList.add("extend");
            lizinha[index].querySelector("a").appendChild(newText);

        }

        function mouseOut() {
            lizinha[index].classList.remove("extend");
            lizinha[index].querySelector("a").removeChild(newText);
        }
    }
}


function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const menu = document.querySelectorAll('.s');
    var position = document.querySelector('#menu-numeros');
    var bar = document.querySelectorAll('.barra');
    const cont = menu.length;

    for (var i = 0; i < cont; i++) {
        insereLi(i, position);
    }

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
                    bar();
                }
            })
        }

        function bar() {
            const ativo1 = document.querySelectorAll('.ativo', '.s');
            const barra = document.querySelector('#mark');
            var heig = 240 / cont;
            barra.style.setProperty("height", heig);
            var dist = ((ativo1.length * heig) - heig);
            barra.style.height = heig;

            if (dist >= 240) {
                dist = 240 - heig;
            }

            barra.style.setProperty("top", dist);
        }
        extend();
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();