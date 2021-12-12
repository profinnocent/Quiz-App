//grabbing the needed DOMs
const mathsAdd = document.querySelector('.maths .add')
const setQ = document.querySelector('.setq')
const qtA = document.querySelector('#qta')
const opt1 = document.querySelector('#option1')
const opt2 = document.querySelector('#option2')
const opt3 = document.querySelector('#option3')
const opt4 = document.querySelector('#option4')
const answer = document.querySelector('#answer')


let qx = 1;

//Variables
const mathsQset = [];
const qsts = {
      qno: qx,
      question:'Which is correct',
      q1: 'a',
      q2: 'b',
      q3: 'c',
      q4: 'd',
      answer: 'c',
      
      
    showQuestion: () => {
        return qsts.question;
      },
      
     setQuestion: (quest) => {
       let str = toString(quest);
       qsts.question = quest;
     }

  };




const mathsQs = {
  title:'Mathematics',
  instruction:'Attempt all question. All carry 2marks each',
  questions: qsts
}

mathsAdd.onclick = () => {
  if(mathsAdd.innerText == 'Add'){
  setQ.style.position = 'static';
  setQ.style.visibility = 'visible';
  mathsAdd.innerText = 'Save';
  }else{
    qsts.question = qtA.value;  
    qsts.q1 = opt1.value;
    qsts.q2 = opt2.value;
    qsts.q3 = opt3.value;
    qsts.q4 = opt4.value;
    qsts.answer = answer.value;
    mathsAdd.innerText = 'Add';
    alert('asignment complete');
    setQ.style.position = 'absolute';
    setQ.style.visibility = 'hidden';

  }
  console.log(qsts);
}


