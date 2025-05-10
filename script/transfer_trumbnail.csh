#!/bin/csh

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

# Temporary output path
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
# Initial conversion and resize
$im_command "$input" -resize 300x300 "$temp_output"

# Loop to reduce quality if file size > 50KB
set quality = 90

while (1)
    set size = `$stat_cmd "$temp_output"`
    if ($size < 51200) then
        break
    endif
    @ quality -= 5
    if ($quality < 10) then
        echo "Warning: Cannot reduce image below 50KB even at low quality."
        break
    endif
    $im_command "$input" -resize 300x300 -quality $quality "$temp_output"
end

echo "Thumbnail saved to: $temp_output"
