function myFunction(e) {
    NUM = document.getElementById("NUM");
    url = "https://reqres.in/api/users/"+NUM.value
    fetch(url).then(
        response => response.json()
    )
        .then((response_obj) => {
        console.log(response_obj.data)
        return insert_users_to_html(response_obj.data)
    }
    ).catch(
        error => console.log(error)
    )
}

function insert_users_to_html(response_obj) {
    const current_main = document.querySelector("main");
    current_main.innerHTML = `
        <img src="${response_obj.avatar}" alt="Profile Picture"/>    #T
        <div>
            <span>${response_obj.first_name} ${response_obj.last_name}</span>
            <br><br>
            <a href="mailto:${response_obj.email}">send an email</a> #T
            <br><br>
        </div>
    `;
}