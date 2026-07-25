#!/bin/tcsh

# Check arguments
if ($#argv != 2) then
    echo "Usage: $0 <input_file> <output_folder>"
    exit 1
endif

set input = $argv[1]
set output = $argv[2]

# Check input file exists
if (! -f "$input") then
    echo "Error: Input file '$input' does not exist."
    exit 1
endif

# Check output folder exists, if not, create it
if (! -d "$output") then
    echo "Output folder '$output' does not exist. Creating..."
    mkdir -p "$output"
endif

# Get base filename without path
set filename = `basename "$input"`
set name = `echo "$filename" | sed 's/\.[^.]*$//'`

# Output path
set temp_output = "$output/${name}.webp"

# Detect OS and decide command
set os_type = `uname`
if ("$os_type" == "Darwin") then
    set im_command = "magick"
    set stat_cmd = "stat -f%z"
else
    set im_command = "convert"
    set stat_cmd = "stat -c%s"
endif

# Resize to width 800px with initial quality 80
$im_command "$input"'[0]' -resize 800x -quality 80 "$temp_output"

# Loop to reduce quality if file size > 150KB (153600 bytes)
set quality = 80

while (1)
    set size = `$stat_cmd "$temp_output"`
    if ($size < 153600) then
        break
    endif
    @ quality -= 5
    if ($quality < 20) then
        echo "Warning: Cannot reduce image below 150KB even at low quality."
        break
    endif
    $im_command "$input"'[0]' -resize 800x -quality $quality "$temp_output"
end

set final_size = `$stat_cmd "$temp_output"`
echo "Event image generated at: $temp_output (${final_size} bytes)"
