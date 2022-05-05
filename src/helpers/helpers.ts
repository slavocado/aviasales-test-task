export const getHHMMfromDate = (date: Date) => {
  const hours = String(date.getHours())
  const hoursToPrint = hours.length === 2 ? hours : '0' + hours

  const minutes = String(date.getMinutes())
  const minutesToPrint = minutes.length === 2 ? minutes : '0' + minutes

  return hoursToPrint + ':' + minutesToPrint
}

export const getTimeInterval = (time: string, minutes: number) => {
  const d = new Date(Date.parse(time))
  const milliseconds = minutes * 60 * 1000
  const d2 = new Date(d.getTime() + milliseconds)

  return getHHMMfromDate(d) + ' - ' + getHHMMfromDate(d2)
}

export const getHHMMfromMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = Math.floor(minutes - hours * 60)

  return `${hours}ч ${mins}м`
}
