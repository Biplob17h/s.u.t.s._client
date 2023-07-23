export const countSubTotal = (order) => {
  let subTotal = 0;
  order?.forEach((o) => {
    subTotal = subTotal + parseFloat(o.course.price);
  });
  return (subTotal = parseFloat(subTotal.toFixed(2)));
};