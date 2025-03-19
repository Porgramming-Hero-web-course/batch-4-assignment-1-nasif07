{
  const removeDuplicates = (numbers: number[]): number[] => {
    const authenticValues = numbers.filter(
      (item, index) => numbers.indexOf(item) === index
    );
    return authenticValues;
  };
}
