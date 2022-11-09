const note1= document.getElementById('note1');
const note2= document.getElementById('note2');
const note3= document.getElementById('note3');
const calculateButton= document.getElementById('calculate');
const cleanButton= document.getElementById('clean');
const pResult = document.getElementById('result');


calculateButton.addEventListener('click', () => {
    const note1Result= parseInt(note1.value)*0.30;
    const note2Result= parseInt(note2.value)*0.30;
    const note3Result= parseInt(note3.value)*0.40;
    const sumNotes= note3Result+note2Result+note1Result;
    if(sumNotes>4.5){
        pResult.textContent = `La nota es de ${sumNotes}, Ana tiene una nota final Superior`; 
    }
    else if (sumNotes>3.5 && sumNotes<4.5){
        pResult.textContent = `La nota es de ${sumNotes}, Ana tiene una nota final Buena`; 
    }
    else if (sumNotes>2.0 && sumNotes<3.5){
        pResult.textContent = `La nota es de ${sumNotes}, Ana ha perdido la materia pero, podra recuperarla`; 
    }
    else{
        pResult.textContent = `La nota es de ${sumNotes}, Ana debera repetir la materia`; 
    }
});

cleanButton.addEventListener('click',() => {
    note1.value="";
    note2.value="";
    note3.value="";
    pResult.textContent="";
})