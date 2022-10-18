document.getElementById('form').addEventListener('change', event => {
   
    fieldsValidation()

})

const fieldsValidation = () => {

    console.log(">>> validação iniciada")

    let submitStatus = false

    if (document.getElementById('field_name').value.length < 5 || !document.getElementById('field_name').value.match(/^[ A-Za-z]+$/)) {
        document.getElementById('field_name_errorMessage').style.display = "block"
        submitStatus = true

    } else document.getElementById('field_name_errorMessage').style.display = "none"


    let email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (!email_regex.test(document.getElementById('field_email').value)) {
        document.getElementById('field_email_errorMessage').style.display = "block"
        submitStatus = true
    } else {
        if (document.getElementById('field_email').value.length < 6 || document.getElementById('field_email').value.indexOf(".") < 1) {
            document.getElementById('field_email_errorMessage').style.display = "block"
            submitStatus = true

        } else document.getElementById('field_email_errorMessage').style.display = "none"
    }

    let cell_regex = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9]-?[0-9]\)?)?\s?)?(?:((?:9 ?-?\d|[2-9])\d{3}) ?-?(\d{4}))$/

    if (!cell_regex.test(document.getElementById('field_cellphone').value)) {
        document.getElementById('field_cellphone_errorMessage').style.display = "block"
        submitStatus = true

    } else document.getElementById('field_cellphone_errorMessage').style.display = "none"

    if (document.getElementById('field_password').value.length < 5 || !document.getElementById('field_password').value.match(/^[a-zA-Z0-9]+$/)) {
        document.getElementById('field_password_errorMessage').style.display = "block"
        submitStatus = true

    } else document.getElementById('field_password_errorMessage').style.display = "none"

    if (document.getElementById('field_password').value != document.getElementById('field_password_retype').value) {
        document.getElementById('field_password_retype_errorMessage').style.display = "block"
        submitStatus = true

    } else document.getElementById('field_password_retype_errorMessage').style.display = "none"

    document.getElementById('formSubmitButton').disabled = submitStatus

    return !submitStatus
}


const formSubmit = (event) =>{
    event.preventDefault()

    if (fieldsValidation()) saveData()
}

const saveData =(event) =>{

    console.log("salvar formulário")

}