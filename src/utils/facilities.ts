export function converterMoeda(valor: string | number,  siglaMoeda: string) {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: siglaMoeda,
  })
}