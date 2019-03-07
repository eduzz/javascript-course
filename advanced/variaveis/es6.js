var outside = 1;

function show() {
  var inside = 2;
  console.log('*** Show ***');
  console.log(outside, inside);

  if (outside == 1) {
    console.log();
  }
}

try {
  console.log(outside, inside);
} catch (err) {
  console.log(outside, err.message);
}

show();