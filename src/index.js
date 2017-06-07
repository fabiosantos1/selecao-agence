import styles from './scss/index.scss';
const $ = require("jquery");

const skrollr = function() {
    require(['skrollr'], function(skrollr){
        const s = skrollr.init({
            forceHeight: false
        });

        if (s.isMobile()) {
            s.destroy();
        }
    });
}

const actions = function() {
    
    $('.btn-menu').click(function(e) {
        $('nav').toggleClass('active');
        e.preventDefault();
    });

    $('nav ul li a').click(function(e){

        e.preventDefault();
        const elemento = $(this).data("link");

        $('html,body').animate(
            { scrollTop: ($("."+elemento).offset().top) }, 300
        );

        $('nav').removeClass('active');
    });
}

const mask = function() {
    
    const maskPlugin = require("jquery-mask-plugin");

    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#tel').mask('(00) 0000-0000');
    $('#cel').mask('(00) 00000-0000');
}


const init = function() {
    skrollr();
    actions();
    mask();
}

init();