
    
        
        function players(element) {
          
            if (list.childElementCount === 5) {
                alert('Player Limit Exceeded');
                
            } else {
                const list = document.getElementById('list')
                const li = document.createElement('li');
                li.innerText = element;
                list.appendChild(li);
                return li;
            }
         
        }



       

document.getElementById('btn1').addEventListener('click',function(){
            const heading = document.getElementById('name');
            element = heading.innerText;
            players(element);
})
document.getElementById('btn2').addEventListener('click',function(){
            const heading = document.getElementById('name2');
            element = heading.innerText;
            players(element);
})
document.getElementById('btn3').addEventListener('click',function(){
            const heading = document.getElementById('name3');
            element = heading.innerText;
            players(element);
})
document.getElementById('btn4').addEventListener('click',function(){
            const heading = document.getElementById('name4');
            element = heading.innerText;
            players(element);
})
document.getElementById('btn5').addEventListener('click',function(){
            const heading = document.getElementById('name5');
            element = heading.innerText;
            players(element);
})
document.getElementById('btn6').addEventListener('click',function(){
            const heading = document.getElementById('name6');
            element = heading.innerText;
            players(element);
})




document.getElementById('calc').addEventListener('click',function(){
    const inputcatch = document.getElementById('per');
    const getcatch = inputcatch.value;
    const getotal = getcatch * 5;
    const expense = document.getElementById('total-expense');
    expense.innerText = getotal;
    
})

document.getElementById('total-btn').addEventListener('click',function(){

    const totalcost = document.getElementById('final-total')

    const catchmanager = document.getElementById('getmanager');
    const getmanager = catchmanager.value;
    const parsemanager = parseFloat(getmanager)
    const catchcoach = document.getElementById('getcoach');
    const getcoach = catchcoach.value;
    const parsecoach = parseFloat(getcoach);

    const expense = document.getElementById('total-expense');
    const inex = expense.innerText;
    const parseex = parseFloat(inex);

    totalcost.innerText = parsemanager + parsecoach + parseex ;


    
})



function doSomething (element) {
    
    document.getElementById(element).disabled = true;
    document.getElementById("btndisable").disabled = false;
  }