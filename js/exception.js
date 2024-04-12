const checkInput = () => {
  let input_elem = document.getElementById("input1");
  let a = input_elem.value;
  document.getElementById("show").innerHTML = "";

  try {
    if (a === "") {
      throw "비어있습니다.";
    }
    //  숫자 인지 아닌지 not a number
    if (isNaN(a)) {
      throw "숫자가 아닙니다.";
    }
    a = Number(a);
    if (a < 0 || a > 9) {
      throw "0 ~ 9사이 숫자가 아닙니다.";
    }
  } catch (error) {
    document.getElementById("show").innerHTML = `오류: ${error}`;
  } finally {
    input_elem.value = "";
  }
};