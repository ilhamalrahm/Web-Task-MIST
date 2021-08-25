function clickMe()
{
    window.scrollTo(0,0);
}

function alertCall()
{
    document.getElementById("spanalert").style.visibility="visible";
}

function alertClose()
{
    document.getElementById("spanalert").style.visibility="hidden";
}
function accountAlert()
    {
       x=document.getElementById("account");
       x.addEvenListener("click", alertFunction());
    }


    function alertFunction()
        {
            alert("Sorry, Account doesn't exist");
        }