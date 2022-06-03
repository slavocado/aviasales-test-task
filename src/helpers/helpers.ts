const MINUTES_IN_HOUR = 60
const SECONDS_IN_MINUTE = 60
const MILLISECONS_IN_SECOND = 1000

export function getHHMMfromDate(date: Date) {
  const hours = String(date.getHours())
  // if hours has one digit - add 0 to its begining
  const hoursToPrint = hours.length === 2 ? hours : '0' + hours

  const minutes = String(date.getMinutes())
  // if minutes has one digit - add 0 to its begining
  const minutesToPrint = minutes.length === 2 ? minutes : '0' + minutes

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
