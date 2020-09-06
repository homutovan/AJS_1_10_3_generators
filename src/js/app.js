export default function canIterate(item) {
  try {
    if (item[Symbol.iterator]) return true;
    else return false;
  } catch (e) {
    return false;
  }
}
