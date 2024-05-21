/**
 * Checks if any prefix of the given substring is present in the target string.
 *
 * @param {string} target - The string to search within.
 * @param {string} substring - The string to search for.
 * @returns {boolean} - Returns true if any prefix of the substring is found in the target string, otherwise false.
 *
 * @example
 *
 * const x = "safaskjdfhkashfkhsadh fsahdfkhsdakf";
 * const searchString = "adhf";
 * console.log(isPartialMatch(x, searchString)); // Output: true
 */

function isPartialMatch(target: string, substring: string) {
  for (let i = 1; i <= substring.length; i++) {
    const partial = substring.slice(0, i);
    if (target.includes(partial)) {
      return true;
    }
  }
  return false;
}

function getCurrencySymbol(): string {
  return (0)
    .toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim();
}

function formattedDate(): string {
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
}

function isNumberKey(charCode: number): boolean {
  if (charCode === 8 || charCode === 9 || charCode === 35 || charCode === 36) {
    return true;
  }

  if (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 96 && charCode <= 105)
  ) {
    return true;
  }
  return false;
}

export { formattedDate, getCurrencySymbol, isNumberKey, isPartialMatch };

