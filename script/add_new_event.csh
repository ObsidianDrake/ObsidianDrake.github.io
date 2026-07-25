#!/bin/tcsh

# Check if at least one argument is provided
if ( $#argv == 0 ) then
    echo "Usage: $0 <webp_image1> [<webp_image2> ...]"
    exit 1
endif

# Define the base paths
set events_path = "src/assets/images/events"
set full_path = "$events_path/full"

# Ensure target directories exist
if ( ! -d "$events_path" ) then
    mkdir -p "$events_path"
endif

if ( ! -d "$full_path" ) then
    mkdir -p "$full_path"
endif

# Get the current script directory
set script_dir = `dirname $0`
set transfer_script = "$script_dir/transfer_event_thumbnail.csh"

if ( ! -f "$transfer_script" ) then
    echo "Error: transfer_event_thumbnail.csh not found in $script_dir"
    exit 1
endif

# Process each input image
foreach image ($argv)
    if ( ! -f "$image" ) then
        echo "Warning: File '$image' does not exist. Skipping."
        continue
    endif

    # Validate file extension is .webp (case-insensitive)
    set ext = `echo "$image" | awk -F. '{print tolower($NF)}'`
    if ( "$ext" != "webp" ) then
        echo "Warning: File '$image' is not a .webp image. Skipping."
        continue
    endif

    set filename = `basename "$image"`
    set target_full = "$full_path/$filename"

    # Copy the image to full folder if it's not already there
    if ( "$image" != "$target_full" ) then
        cp "$image" "$full_path/"
    endif

    # Call the transfer_event_thumbnail script to generate scaled event image
    $transfer_script "$target_full" "$events_path"
end

echo "Event image processing complete."
