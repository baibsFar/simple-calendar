export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export let actualDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: new Date().getDay()
}

/**
 * 
 * @param {number} year 
 * @param {number} month 
 * @returns The number of day of the specified year and month
 */
export const getDays = (year, month) => new Date(year, month, 0).getDate() 

/**
 * Fill the calendar with days
 * @param {number} year 
 * @param {number} month 
 * @param {HTMLElement} container 
 */
export function fillCalendar(year, month, container) {
    for (let i = 0; i < getDays(year, month + 1); i++) {
        const div = document.createElement('div')
        const day = days[new Date(year, month, i + 1).getDay()]
        div.innerHTML = `${day[0]}${day[1]}${day[2]} . ${i + 1}`
        container.appendChild(div)
    }
}

/**
 * Previous button that updates displayed month
 * @param {HTMLElement} container 
 * @param {HTMLElement} contentContainer
 */
export function previousMonthHandler (container, contentContainer) {
    if (actualDate.month === 0)
        actualDate.month = months.length - 1
    else actualDate.month--
    contentContainer.innerHTML = ''
    container.innerHTML = `${months[actualDate.month]}`
    fillCalendar(actualDate.year, actualDate.month, contentContainer)
}

/**
 * Next button that updates displayed month
 * @param {HTMLElement} container 
 * @param {HTMLElement} contentContainer
 */
export function nextMonthHandler (container, contentContainer) {
    if (actualDate.month === months.length - 1)
        actualDate.month = 0
    else actualDate.month++
    contentContainer.innerHTML = ''
    container.innerHTML = `${months[actualDate.month]}`
    fillCalendar(actualDate.year, actualDate.month, contentContainer)
}

/**
 * Previuos button that updates displayed year
 * @param {HTMLElement} container 
 * @param {HTMLElement} contentContainer 
 */
export function previousYearHandler (container, contentContainer) {
    actualDate.year--
    contentContainer.innerHTML = ''
    container.innerHTML = `${actualDate.year}`
    fillCalendar(actualDate.year, actualDate.month, contentContainer)
}

/**
 * Next button that updates displayed year
 * @param {HTMLElement} container 
 * @param {HTMLElement} contentContainer 
 */
export function nextYearHandler (container, contentContainer) {
    actualDate.year++
    contentContainer.innerHTML = ''
    container.innerHTML = `${actualDate.year}`
    fillCalendar(actualDate.year, actualDate.month, contentContainer)
}