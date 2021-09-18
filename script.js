const btn = document.querySelector(".talk")
const content = document.querySelector(".content")

const greetings = [
    'ajoyib ',
    'very well',
    'I am fine'
];
const sayname = [
    'Boshliqimni ismi Davlatyor',
];
const sayhello = [
    'Assalomu',
    'hello how are you',
    'volaykum Salom',
    'Salom'
];
const sayteacher = [
    'Ulugbek aka bizani ustoz',
    'Ulugbek Valiev',
    'Ulugbek Ustoz',
]

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

let rec = webkitSpeechRecognition

rec.lang = 'uz - Uz'

recognition.onstart = function() {
    console.log('voice is actived, you can to microphonee');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};
    
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'dona dona gapring tshunmad';

    if(message.includes('How are you')){
      const finalText =  greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if(message.includes('Hello')){
      const finalText = sayhello[Math.floor(Math.random() * sayhello.length)];
        speech.text = finalText;
    }
    if(message.includes('What is your name')){
      const finalText = sayname[Math.floor(Math.random() * sayname.length)];
        speech.text = finalText;
    }
    if(message.includes('Who is your teacher')){
      const finalText = sayteacher[Math.floor(Math.random() * sayteacher.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}