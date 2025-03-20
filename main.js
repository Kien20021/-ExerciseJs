// "Bài 1:
// Viết một hàm chuyển đổi nhiệt độ từ thang Celsius chuyển sang thang đo fahrenhei.
// vd output là: ""60°C bằng 140 °F""

function swapTemperature(celsius) {
  let fahrenheit = 1.8 * celsius + 32;
  console.log(`${celsius}^C =  ${fahrenheit}^F `, "ex1");
}

swapTemperature(60);

// Bài 2:
// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự ""-"".
// Ví dụ cho chuỗi ""123"" thì kết quả sẽ là ""123-123-123-123-123-123-123-123-123-123"".
{
  // let str = "123";
  function number(str) {
    let total = "";
    for (let i = 1; i <= 10; i++) {
      total += str + "-";
    }
    console.log(total.slice(0, -1), "ex2");
  }
  number("123");
}
// Bài 3:
// Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.
{
  const a = 10;
  const b = 144;
  if (a % 1 === 0 && b % 1 == 0) {
    console.log("day la number");
    if (a > b) {
      console.log(`${a} la so lon nhat`);
    } else {
      console.log(`${b} la so lon nhat`);
    }
  } else {
    console.log("day ko phai la number");
  }
}

// Bài 4:
// Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả
{
  function checkNumber(number) {
    let factorialResult = 1;
    if (number % 2 == 0 || number % 2 == 1) {
      for (let i = 1; i <= number; i++) {
        factorialResult *= i;
      }
      console.log(`${number}! = ${factorialResult}`, "ex4");
    } else {
      console.log("day la so am");
    }
  }
  checkNumber(5);
}
// Bài 5. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "" …"" ở cuối chuỗi.
// Tham số truyền vào là 1 chuỗi dài hơn 15 ký tự.
// Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu "" …"" biểu thị là chuỗi bị cắt.
{
  let val = "TrungKiendeptraiqua";
  function valtitle(val) {
    let value = "";
    for (let i = 0; i <= val.length; i++) {
      value = val;
    }
    console.log(value.slice(0, 10) + "...", "ex5");
  }
  valtitle(val);
}
// Bài 6. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
// Tham số truyền vào là 1 chuỗi.
// Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ ""morSofware"" sẽ được convert thành ""Morsofware"".
{
  let val = "morSofware";
  function valtitle(val) {
    let value = "";
    for (let i = 0; i <= val.length; i++) {
      value = val;
    }
    console.log(value.charAt(0).toLocaleUpperCase() + value.slice(1), "ex6");
  }
  valtitle(val);
}
// Bài 7. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.
{
  const arrNumber = [9, 7, 5, 8, 3, 4, 1, 2, 6];
  const newArrNumber = [];
  for (let i = 0; i < arrNumber.length; i++) {
    // console.log(arrNumber[i]);
    if (arrNumber[i] % 2 === 0) {
      newArrNumber[newArrNumber.length] = arrNumber[i];
    }
  }
  const evenNumber = newArrNumber.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    return 1;
  });
  console.log(evenNumber, "ex7");

  console.log(newArrNumber);
}
// Bài 8. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về ""Pass"", nếu không hợp lệ trả về ""Fail"".
// Giả sử tham số đầu vào là 1 object có dạng như sau:
// {
//   username: ""username"",
//   password: ""secret"",
//   confirm: ""secret""
// }
// Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password."
{
  const formData = {
    username: "kien",
    password: "Kien2002",
    confirm: "Kien2002",
  };
  // console.log(formData, "formData");
  // console.log(formData.username.length, "");
  function data(formData) {
    const { username, password, confirm } = formData;
    if (
      username.length !== 0 &&
      username.length < 20 &&
      password.length > 6 &&
      password.length < 32 &&
      password === confirm
    ) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
  data(formData);
}
// demojoin: tạo ra một chuỗi , chuỗi này được tạo ra bằng cách cố gắng đưa các phần tử trong mảng arr thành kiểu dữ liệu string, ghép chúng lại và cách nhau bởi chuỗi a, mặc định là dấu “,”
{
  const arr = ["A", "B", "C"];
  const newArr = arr.join("-");
  console.log(newArr, "Demo join");
}
// pop() lay phan tu cuoi cung cua mang
{
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const newArrNumber = arrNumber.pop();
  console.log(newArrNumber, "demo pop");
}
// shift() lay phan tu dau tien cua mang
{
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const newArrNumber = arrNumber.shift();
  console.log(newArrNumber, "demo shift");
}
// push(a): thay đổi mảng bằng cách thêm phần tử a vào cuối mảng
{
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const newArrNumber = arrNumber.push("string");
  console.log(newArrNumber, "demo push");
  console.log(arrNumber, "demo push");
}
// unshift(a): thay đổi mảng bằng cách thêm phần tử a vào đầu mảng
{
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const newArrNumber = arrNumber.unshift("string");
  console.log(newArrNumber, "demo shift");
  console.log(arrNumber, "demo shift");
}
// slice() vs splice()
{
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const newArrNumber = arrNumber.splice(0, 3);
  console.log(newArrNumber, "demo splice");
  console.log(arrNumber, "demo sp lice");
  // const newArrNumber = arrNumber.slice(0, 3);
  // console.log(newArrNumber, "demo slice");
  // console.log(arrNumber, "demo slice");
}

//==========================================================
// demo map
{
  const arr = [1, 2, 3, 4, 5, 6];
  const newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log(newArr, "demo map");
}
{
  const arr = [1, 2, 3];
  const newArr = arr.map(function (item) {
    return {
      id: item,
      name: `Kien ${item}`,
    };
  });
  console.log(newArr, "demo map");
}
// demo filter
{
  const students = [
    { name: "Kien", score: 10 },
    { name: "An", score: 5 },
    { name: "Huwng", score: 5 },
    { name: "MInh", score: 8 },
    { name: "hung", score: 7 },
  ];
  const beststudent = students.filter(function (item) {
    return item.score >= 7;
  });
  console.log(beststudent, "demo filter");
}
{
  const arr = [1, 2, 3, 4, 5];
  const id = 3;

  const newArr = arr.filter(function (item) {
    return item != id;
  });
  console.log(newArr, "demo");
}
