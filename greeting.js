const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    //로컬 저장소에 input의 value를 저장
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    //폼을 보여주고 로컬 저장소에 저장하기위해
    //submit 하면 handlesubmit함수를 실행한다.
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text){
    //폼을 안보이게 하기위해 SHOWING_CN (display: block;))를 지운다.
    //로컬 저장소에 입력된 currentUser값을 출력한다.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `환영합니다! ${text}님.`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}
init();