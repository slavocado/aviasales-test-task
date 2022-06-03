const MINUTES_IN_HOUR = 60
const SECONDS_IN_MINUTE = 60
const MILLISECONS_IN_SECOND = 1000

function getTwoDigitNumber(number: string): string {
  // if number has one digit - add 0 to its begining
  return number.length === 2 ? number : '0' + number
}

export function getHHMMfromDate(date: Date) {
  const hours = String(date.getHours())
  const hoursToPrint = getTwoDigitNumber(hours)

  const minutes = String(date.getMinutes())
  const minutesToPrint = getTwoDigitNumber(minutes)

  return `${hoursToPrint} : ${minutesToPrint}`
}

export function getTimeInterval(time: string, minutes: number) {
  const firstDate = new Date(Date.parse(time))
  const milliseconds = minutes * SECONDS_IN_MINUTE * MILLISECONS_IN_SECOND
  const secondDate = new Date(firstDate.getTime() + milliseconds)

  return getHHMMfromDate(firstDate) + ' - ' + getHHMMfromDate(secondDate)
}

export function getHHMMfromMinutes(minutes: number) {
  const hours = Math.floor(minutes / MINUTES_IN_HOUR)
  const mins = Math.floor(minutes - hours * MINUTES_IN_HOUR)

  return `${hours}ч ${mins}м`
}
