var outside = 1;

function show() {
  var inside = 2;
  console.log('\x1b[35m%s\x1b[0m', '\n- Show: inicio');
  console.table({ outside, inside });

  if (outside == 1) {
    console.log();
    var insideVar = 2;
    let insideLet = 3;
    let insideCost = 4;

    console.log('\x1b[35m%s\x1b[0m', '\n- Show: dentro if');
    console.table({ insideVar, insideLet, insideCost });
  }

  console.log('\x1b[35m%s\x1b[0m', '\n- Show: depois do if');
  try {
    console.table({ insideVar, insideLet, insideCost });
  } catch (err) {
    try {
      console.table({ insideVar, insideLet: err.message, insideCost });
    } catch (err2) {
      console.table({ insideVar, insideLet: err.message, insideCost: err2.message });
    }
  }
}

show();

console.log('\x1b[35m%s\x1b[0m', '\n- Depois de tudo');
try {
  console.log(outside, inside);
} catch (err) {
  console.table({ outside, inside: err.message });
}