const $btn = document.getElementById('btn-kick');
const $btnSpecial = document.getElementById('btn-special');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
};

$btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

$btnSpecial.addEventListener('click', function () {
    console.log('Mega Kick');
    enemy.changeHP(random(40));
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';

    if (this.damageHP <= 20) {
        this.elProgressbar.classList.add('critical');
    } else if (this.damageHP <= 60) {
        this.elProgressbar.classList.add('low');
    }
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бідний ' + this.name + ' програв бій!');
        $btn.disabled = true;
        $btnSpecial.disabled = true;
    } else {
        this.damageHP -= count;
    }

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
