export const getNewsAnalysis = (text) => {
  const result = Math.random() > 0.5 ? "good" : "bad";
  return `${text} - ${result}`;
};
