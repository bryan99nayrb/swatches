# swatches
SwatchName Listed in seperated Paragraphs within Adobe Illustrator

**EXAMPLE: non Global, process swatch:**
Swatch Name: RGB YellowRGB values: 255, 255, 0
Hex code: FFFF00
HSB values: 60, 100, 100

It will not output correctly with swatches set as Global. 

# Running Script
To run this script in Adobe Illustrator, open document.
make sure your Document Color Mode is set to RGB color.

File > Scripts > Other Script (command F12)
select FILENAME from the menu.

Script can take several seconds if you have 30 plus swatches in your panel.

# Remember
Setting you swatches as **Global** will cause errors, such as the following.

**Global, process swatch:**
Swatch Name: RGB GreenRGB values: undefined, undefined, undefined
Hex code: 000000
HSB values: NaN, NaN, NaN
