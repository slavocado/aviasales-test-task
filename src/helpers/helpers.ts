export function getHHMMfromDate(date: Date) {
  const hours = String(date.getHours())
  const hoursToPrint = hours.length === 2 ? hours : '0' + hours

  const minutes = String(date.getMinutes())
  const minutesToPrint = minutes.length === 2 ? minutes : '0' + minutes

  return `${hoursToPrint} : ${minutesToPrint}`
}

export function getTimeInterval(time: string, minutes: number) {
  const firstDate = new Date(Date.parse(time))
  const milliseconds = minutes * 60 * 1000
  const secondDate = new Date(firstDate.getTime() + milliseconds)

  return getHHMMfromDate(firstDate) + ' - ' + getHHMMfromDate(secondDate)
}

export function getHHMMfromMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = Math.floor(minutes - hours * 60)

  return `${hours}ч ${mins}м`
}
