const occasion = document.getElementById("occasion");
const customOccasion = document.getElementById("customOccasion");

occasion.addEventListener("change",()=>{

    if(occasion.value==="Other"){

        customOccasion.style.display="block";

    }

    else{

        customOccasion.style.display="none";

    }

});

function generateCard(){

    const name=document.getElementById("name").value.trim();

    let occ=occasion.value;

    const message=document.getElementById("message").value.trim();

    const theme=document.querySelector('input[name="theme"]:checked').value;

    if(name===""){

        alert("Enter recipient name.");

        return;

    }

    if(occ===""){

        alert("Choose an occasion.");

        return;

    }

    if(occ==="Other"){

        occ=customOccasion.value.trim();

        if(occ===""){

            alert("Enter your custom occasion.");

            return;

        }

    }

    if(message===""){

        alert("Write a message.");

        return;

    }

    localStorage.setItem("name",name);
    localStorage.setItem("occasion",occ);
    localStorage.setItem("message",message);
    localStorage.setItem("theme",theme);

    window.location.href="card.html";

}