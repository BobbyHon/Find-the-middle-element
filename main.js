function gimme (triplet) {
    const num0 = triplet[0]
    const num1 = triplet[1]
    const num2 = triplet[2]
    if ((num0 > num1 && num0 < num2) || (num0 < num1 && num0 > num2)) return 0
    if ((num1 > num0 && num1 < num2) || (num1 < num0 && num1 > num2)) return 1
    return 2
  }