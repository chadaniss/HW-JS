const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];
  // expected result: 89

  // let result = scores.reduce((sum,item) => (sum + (item.score*item.weight)),0);
  // console.log(result)


  // ---------------P'V Sol------------------
function calAvg(arr) {
    let summaryObj = scores.reduce((acc,item,index) => {
      acc.score += item.score * item.weight
      acc.weight += item.weight

      return acc;
    },{score:0,weight:0})
  return summaryObj.score / summaryObj.weight
}
console.log(calAvg(scores))