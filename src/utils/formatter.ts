export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const priceFormatter = new Intl.NumberFormat("fr", {
  style: "currency",
  currency: "EUR",
});
