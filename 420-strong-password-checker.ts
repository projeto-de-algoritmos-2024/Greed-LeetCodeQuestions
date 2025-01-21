function strongPasswordChecker(password: string): number {
  const n = password.length;
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;

  for (const char of password) {
    if (char >= "a" && char <= "z") hasLower = true;
    else if (char >= "A" && char <= "Z") hasUpper = true;
    else if (char >= "0" && char <= "9") hasDigit = true;
  }

  const missingTypes = +!hasLower + +!hasUpper + +!hasDigit;

  let replace = 0;
  let oneSeq = 0;
  let twoSeq = 0;
  let i = 2;

  while (i < n) {
    if (password[i] === password[i - 1] && password[i] === password[i - 2]) {
      let length = 2;
      while (i < n && password[i] === password[i - 1]) {
        length++;
        i++;
      }
      replace += Math.floor(length / 3);
      if (length % 3 === 0) oneSeq++;
      else if (length % 3 === 1) twoSeq++;
    } else {
      i++;
    }
  }

  if (n < 6) {
    return Math.max(6 - n, missingTypes);
  } else if (n <= 20) {
    return Math.max(replace, missingTypes);
  } else {
    const deleteCount = n - 20;
    replace -= Math.min(deleteCount, oneSeq * 1) / 1;
    replace -= Math.min(Math.max(deleteCount - oneSeq, 0), twoSeq * 2) / 2;
    replace -= Math.max(deleteCount - oneSeq - 2 * twoSeq, 0) / 3;

    return deleteCount + Math.max(replace, missingTypes);
  }
}
