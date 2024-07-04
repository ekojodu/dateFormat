const dateOptions = document.getElementById('date-options')
const currentDate = document.getElementById('current-date')

const date = new Date()
const minutes = date.getMinutes()
const hours = date.getHours()
const day = date.getDay()
const month = date.getMonth()+1
const year = date.getFullYear()


const formatDate = `${day}-${month}-${year}`

currentDate.textContent = formatDate

dateOptions.addEventListener('change', ()=>{
    switch(dateOptions.value){
        case 'yyyy-mm-dd':
            currentDate.textContent = formatDate.split('-').reverse().join('-')
            break;
        case 'mm-dd-yyyy-h-mm':
            currentDate.textContent = `${month}-${day}-${year}, ${hours} Hours : ${minutes} minutes`
            break;
        default:
            currentDate.textContent = formatDate
    }
})

let footerParagraph = document.querySelector('#footer p')

footerParagraph.innerHTML = `&copy; ${year} Blaise. All Right Reserved.`