const add_Button_ref = document.getElementById("add");



        // for storing data in localStorage
        const Local_Storage = () => {
            const textArea_Data = document.querySelectorAll('textarea');
            const data = [];  //textarea ka data array ke form me save horaha hai.
            // console.log(textArea_Data);
            textArea_Data.forEach((note) => {    //to get user data
                return data.push(note.value);  //its store user data
            })
            // console.log(arr);
            localStorage.setItem('data', JSON.stringify(data));
        }


const newNote = (text = "  ") => {
    const note = document.createElement('div'); /// this is create a new div using javaScript
    note.classList.add('note');  //there classList is properties of javaScript and add is amethod

    const htmlData = `<div class="opretion">
<button class="edit">
    <i class="fa-solid fa-edit"></i>
</button>
<button class="delete">
    <i class="fa-solid fa-trash"></i>
</button>
</div>
<div class="main ${text ? "hidden" : ""}"> </div>
<textarea class=" ${text ? "" : "hidden"}" rows=6> </textarea> `; //// this is create a div element dyanmically  --- see keep.html line no. 29 to 40


    // text ? "" : "hidden" --> thats mean agar textarea me text nehi hai tab textarea me hume koi classes add nehi |
    // text ? "hidden" : "" --> thats mean agar textarea me text hai tab textarea ke part ko hidden karna hai nehi to ayse hi chor do

    note.insertAdjacentHTML('afterbegin', htmlData) /// this is store data in div that's class name is note
    //                 👆👆👆👆 kaha,html elements
    //  console.log(note);
    document.body.appendChild(note)   /// append means to add somthing simple word is html page ke body me isse as a child ke rup add karna





    // getting referneces of icons (edit and delete)
    const edit_button = note.querySelector(".edit")  //we use note.querySelector() because we are inside of note
    const delete_button = note.querySelector(".delete")  //we use note.querySelector() because we are inside of note
    const main_div = note.querySelector(".main")  //we use note.querySelector() because we are inside of note
    const textArea = note.querySelector("textarea")  //we use note.querySelector() because we are inside of note



    // // 1. delete the note

    delete_button.addEventListener('click', () => {             //call aur define dono ek shath
        note.remove();
        Local_Storage();
    })


    // toggel using edit button
    
    textArea.value = text ;
    main_div.innerHTML = text ;
    edit_button.addEventListener('click', () => {
        main_div.classList.toggle('hidden');  //toggel means hidden hai to unhide kar do or unhide hai to hide kar do|
        textArea.classList.toggle('hidden');  // classList matlab new class add kar do

    })



    textArea.addEventListener('change', (event) => {
        const user_value = event.target.value;
        console.log(user_value);
        main_div.innerHTML = user_value;



        Local_Storage();
    })


}





// getting data back from localStorage
const data = JSON.parse(localStorage.getItem('data'));
if (data) {
    data.forEach((note) => newNote(note))
}

add_Button_ref.addEventListener('click',()=> newNote());