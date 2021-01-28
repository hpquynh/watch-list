export const formatCurrency = (num: number): string => {
  const fractionDigits = 2
  return "$" + num.toFixed(fractionDigits).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
