export function formatDate(inputDate) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
}
