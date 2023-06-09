//Bryan Jones. 2023.
//
// get swatches
var doc = app.activeDocument;
var swatches = doc.swatches;

// loop through swatches
var output = "";
for (var i = 0; i < swatches.length; i++) {
  var swatch = swatches[i];

  // get swatch properties
  var name = swatch.name;
  var color = swatch.color;

  // get RGB values
  var r = Math.round(color.red);
  var g = Math.round(color.green);
  var b = Math.round(color.blue);

  // convert RGB to Hex
  var hex = (r << 16 | g << 8 | b).toString(16).toUpperCase();
  while (hex.length < 6) {
    hex = "0" + hex;
  }

  // add to output
  output += name + "\t" + r + ", " + g + ", " + b + "\t#" + hex + "\n";
}

// copy to clipboard
var textFrame = doc.textFrames.add();
textFrame.contents = output;
textFrame.select();
app.copy();
textFrame.remove();
