let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  }
  function yes() { 
    alert('You agreed.'); 
  }
  function no() { 
    alert('You canceled the execution.'); 
  }

  ask('Do you agree?',yes,no);
