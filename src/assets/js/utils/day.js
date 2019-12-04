import dayjs from 'dayjs'

const QDate = {
  _getToady() {
    return dayjs().format('YYYY-MM-DD')
  },
  getThisday() {
    return [this._getToady(), this._getToady()]
  },
  getThisWeek() {
    return [
      dayjs().day(1).format('YYYY-MM-DD'),
      this._getToady()
    ]
  },
  getSingleMonth(time) {
    return [
      dayjs(time).startOf('month').format('YYYY-MM-DD'),
      dayjs(time).endOf('month').format('YYYY-MM-DD')
    ]
  },
  getThisMonth() {
    return [
      dayjs().startOf('month').format('YYYY-MM-DD'),
      this._getToady()
    ]
  },
  getCurrentMonth() {
    return [
      dayjs().startOf('month').format('YYYY-MM-DD'),
      dayjs().endOf('month').format('YYYY-MM-DD')
    ]
  },
  getThisSingleMonth() {
    return dayjs().format('YYYY-MM')
  },
  getPreSingleMonth() {
    return dayjs().subtract(1, 'month').format('YYYY-MM')
  },
  getPreDays(num) {
    return [
      dayjs().subtract(num - 1, 'day').format('YYYY-MM-DD'),
      dayjs().format('YYYY-MM-DD')
    ]
  },
  dayjs
}

export default QDate
