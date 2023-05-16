// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }


            form.classList.add('was-validated')
        }, false)
    })

})()


// const regex = /^[0-9]*[-]?[0-9]{1}$/

// let validateRegex = (str) => {
//     // console.log(str)
//     let found = str.match(regex)
//     // console.log(found);
//     if (found) {
//         numeroDeDocumento.classList.add("is-valid")
//         numeroDeDocumento.classList.remove("is-invalid")
//     }else{
//         numeroDeDocumento.classList.add("is-invalid")
//         numeroDeDocumento.classList.remove("is-valid")
//     }
// }


// // Numero de documento
// const numeroDeDocumento = document.querySelector("#numeroDeDocumento")
// numeroDeDocumento.addEventListener("input", (event)=> validateRegex(event.target.value))

// const invalidNumeroDeDocumento = document.querySelector("#numeroDeDocumento")