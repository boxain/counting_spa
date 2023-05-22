let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector(".animation_wrapper");

// prohibit enter
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

// prohibit button
// 因為form裡的button預設是submit會刷新網頁，所以要關閉預設功能
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// setting select background color
let all_select = document.querySelectorAll("select");
all_select.forEach((select) => {
  select.addEventListener("change", (e) => {
    change_color(e.target);
  });
});

let credicts = document.querySelectorAll(".class_credit");
credicts.forEach((credict) => {
  credict.addEventListener("change", (e) => {
    setGPA();
  });
});

function change_color(target) {
  let value = target.value;
  if (value == "A" || value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
    target.style.fontWeight = "bolder";
  } else if (value == "B+" || value == "B" || value == "B-") {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
    target.style.fontWeight = "bolder";
  } else if (value == "C+" || value == "C" || value == "C-") {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
    target.style.fontWeight = "bolder";
  } else if (value == "D+" || value == "D" || value == "D-") {
    target.style.backgroundColor = "red";
    target.style.color = "white";
    target.style.fontWeight = "bolder";
  } else if (value == "F") {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    target.style.fontWeight = "bolder";
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
  }
  setGPA();
}

function setGPA() {
  let credicts = document.querySelectorAll(".class_credit");
  let selects = document.querySelectorAll("select");
  let credict_sum = 0;
  let sum = 0;
  for (let i = 0; i < credicts.length; i += 1) {
    if (!isNaN(credicts[i].valueAsNumber) && credicts[i].valueAsNumber !== 0) {
      credict_sum += credicts[i].valueAsNumber;
      sum +=
        credicts[i].valueAsNumber *
        (selects[i].value ? convertor(selects[i].value) : 0);
    }
  }

  if (credict_sum !== 0) {
    let result = (sum / credict_sum).toFixed(2);
    document.querySelector("#GPA_result").innerText = result;
  } else {
    document.querySelector("#GPA_result").innerText = "0.00";
  }
}

function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

let insert_btn = document.querySelector(".insert_field_button");
insert_btn.addEventListener("click", () => {
  let form = document.createElement("form");

  let newInput_1 = document.createElement("input");
  newInput_1.classList.add("class_category");
  newInput_1.setAttribute("list", "opt");
  newInput_1.setAttribute("name", "class_category");
  newInput_1.setAttribute("placeholder", "category");
  newInput_1.setAttribute("type", "text");

  let newInput_2 = document.createElement("input");
  newInput_2.setAttribute("type", "text");
  newInput_2.setAttribute("placeholder", "class number");
  newInput_2.setAttribute("name", "class_number");
  newInput_2.classList.add("class_number");

  let newInput_3 = document.createElement("input");
  newInput_3.setAttribute("type", "number");
  newInput_3.setAttribute("placeholder", "credit");
  newInput_3.setAttribute("min", 0);
  newInput_3.setAttribute("max", 6);
  newInput_3.setAttribute("name", "class_credict");
  newInput_3.classList.add("class_credit");
  newInput_3.addEventListener("change", (e) => {
    setGPA();
  });

  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  newSelect.setAttribute("name", "select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    change_color(e.target);
  });

  let newTrashBtn = document.createElement("button");

  newTrashBtn.classList.add("trash_button");
  let trashBin = document.createElement("i");
  trashBin.classList.add("fa-solid");
  trashBin.classList.add("fa-trash");
  newTrashBtn.appendChild(trashBin);
  newTrashBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newTrashBtn.parentElement.style.animation = "scaleDown 0.5s ease forwards";
    newTrashBtn.parentElement.addEventListener("animationend", () => {
      newTrashBtn.parentElement.remove();
      setGPA();
    });
  });

  form.appendChild(newInput_1);
  form.appendChild(newInput_2);
  form.appendChild(newInput_3);
  form.appendChild(newSelect);
  form.appendChild(newTrashBtn);
  document.querySelector(".fields").appendChild(form);
});

let allTrashBtn = document.querySelectorAll(".trash_button");
allTrashBtn.forEach((trashBtn) => {
  trashBtn.addEventListener("click", () => {
    trashBtn.parentElement.style.animation = "scaleDown 0.5s ease forwards";
    trashBtn.parentElement.addEventListener("animationend", () => {
      trashBtn.parentElement.remove();
      setGPA();
    });
  });
});

let sortDescBtn = document.querySelector(".sortDesc");
let sortAsceBtn = document.querySelector(".sortAsce");
sortDescBtn.addEventListener("click", () => {
  handleSorting("Descendding");
});
sortAsceBtn.addEventListener("click", () => {
  handleSorting("Ascendding");
});

function handleSorting(direction) {
  let all_form = document.querySelectorAll("form");
  let res = [];
  all_form.forEach((form) => {
    let class_category = form.children[0].value;
    let class_number = form.children[1].value;
    let class_credit = form.children[2].value;
    let select = form.children[3].value;
    let class_object = {};
    if (class_category || class_number || class_credit || select) {
      class_object = {
        class_category,
        class_number,
        class_credit,
        select,
        grade: convertor(select),
      };
      res.push(class_object);
    }
  });
  merge(res, 0, res.length - 1);
  if (direction === "Descendding") res.reverse();
  let fields = document.querySelector(".fields");
  fields.innerHTML = "";
  res.forEach((field) => {
    fields.innerHTML += `
    <form>
          <input
            type="text"
            class="class_category"
            placeholder="class category"
            list="opt"
            name="class_category"
            value=${field.class_category}
          ><!--
          --><input
            type="text"
            class="class_number"
            placeholder="class number"
            name="class_number"
            value=${field.class_number}
          ><!--
          --><input
            type="number"
            class="class_credit"
            placeholder="credit"
            min="0"
            max="6"
            name="class_credit"
            value=${field.class_credit}
          /><!--
          --><select name="selecxt" class="select">
            <option value=""></option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option></select
          ><!--
          --><button class="trash_button">
            <i class="fa-solid fa-trash"></i>
          </button>
        </form>
    `;
  });
  forms = document.querySelectorAll("form");
  for (let i = 0; i < forms.length; i += 1) {
    console.log(i);
    forms[i].children[3].value = res[i].select;
  }

  credicts = document.querySelectorAll(".class_credit");
  selects = document.querySelectorAll("select");
  allTrashBtn = document.querySelectorAll("trash_button");

  credicts.forEach((credict) => {
    credict.addEventListener("change", (e) => {
      setGPA();
    });
  });

  selects.forEach((select) => {
    change_color(select);
    select.addEventListener("change", (e) => {
      setGPA();
      change_color(e.target);
    });
  });

  allTrashBtn.forEach((trashBtn) => {
    trashBtn.addEventListener("click", () => {
      trashBtn.parentElement.style.animation = "scaleDown 0.5s ease forwards";
      trashBtn.parentElement.addEventListener("animationend", () => {
        trashBtn.parentElement.remove();
        setGPA();
      });
    });
  });
}

function mergeSort(list, left, mid, right) {
  let i = left;
  let j = mid + 1;
  const temp = [];
  while (i <= mid && j <= right) {
    if (list[i].grade <= list[j].grade) {
      temp.push(list[i]);
      i += 1;
    } else {
      temp.push(list[j]);
      j += 1;
    }
  }
  while (i <= mid) {
    temp.push(list[i]);
    i += 1;
  }
  while (j <= right) {
    temp.push(list[j]);
    j += 1;
  }
  for (let k = left; k <= right; k += 1) list[k] = temp[k - left];
}

function merge(list, left, right) {
  if (left >= right) {
    return;
  } else {
    const mid = Math.floor((left + right) / 2);
    merge(list, left, mid);
    merge(list, mid + 1, right);
    mergeSort(list, left, mid, right);
  }
}
