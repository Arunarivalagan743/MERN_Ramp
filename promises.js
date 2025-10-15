function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 complete"), 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 complete"), 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3 complete"), 1000);
  });
}

step1()
  .then((msg) => {
    console.log(msg);
    return step2();
  })
  .then((msg) => {
    console.log(msg);
    return step3();
  })
  .then((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("All steps done!");
  });
