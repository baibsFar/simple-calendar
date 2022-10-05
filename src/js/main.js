import { 
    fillCalendar, 
    nextMonthHandler, 
    previousMonthHandler,
    months,
    actualDate 
} from './utils.js'


/* Set the actual date */
const calendarTitle = document.querySelector('.calendar-title')
calendarTitle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="18" x="2" y="4" rx="4"/><path d="M8 2v4m8-4v4M2 10h20"/></g></svg>
    ${actualDate.date.toString().padStart(2, '0')} ${months[actualDate.month]} ${actualDate.year}
`

/* Calendar header with the current month that can be changed */
const calendarHeader = document.querySelector('.calendar-header > h3')
calendarHeader.innerHTML = `${months[actualDate.month]}`

const calendarContent = document.querySelector('.calendar-content')
fillCalendar(actualDate.year, actualDate.month, calendarContent)

/* Previous and Next button handler for the month change */
const prevMonth = document.querySelector('.previous-month')
const nextMonth = document.querySelector('.next-month')

prevMonth.addEventListener('click', () => previousMonthHandler(calendarHeader,calendarContent))

nextMonth.addEventListener('click', () => nextMonthHandler(calendarHeader,calendarContent))
