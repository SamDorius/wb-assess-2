// Replace this with your code
document.getElementById("close-form").addEventListener("click", hide)

function hide ()
{
    document.querySelector("#close-form").textContent = "+";
    document.querySelector("form").classList.toggle("hide");
}

document.querySelector(".form").addEventListener("submit", check)

function check (event)
{
    event.preventDefault()
    let input1 = document.getElementById('name')
    let input2 = document.getElementById('email')
    

    if (input1.value.length === 0 && input2.value.length !== 0)
    {
        document.getElementById('name').style.border = "2px solid red"
        alert("Please enter a name to subscribe.")
    }
    else if (input2.value.length === 0 && input1.value.length !== 0)
    {
        document.getElementById('email').style.border = "2px solid red"
        alert("Please enter an email address to subscribe.")
    }
    else if (input2.value.length === 0 && input1.value.length === 0)
    {
        alert("You must enter a name and an email address to subscribe!")
        document.getElementById('email').style.border = "2px solid red"
        document.getElementById('name').style.border = "2px solid red"
    }
    else if (input1.value.length !== 0 && input2.value.length !== 0)
    {
        document.querySelector(".form-container").innerHTML = "Thank you for subscribing!"

    }
    
}

