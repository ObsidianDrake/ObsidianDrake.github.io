#!/bin/tcsh

# Check if at least one argument is provided
if ( $#argv == 0 ) then
    echo "Usage: $0 <webp_image1> [<webp_image2> ...]"
    exit 1
endif

# Define the base paths
set base_path = "src/assets/images/commissions"
set thumbnail_path = "$base_path/thumbnails"

# Ensure target directories exist
if ( ! -d "$base_path" ) then
    mkdir -p "$base_path"
endif

if ( ! -d "$thumbnail_path" ) then
    mkdir -p "$thumbnail_path"
endif

# Get the current script directory to find 'transfer_trumbnail.csh'
set script_dir = `dirname $0`
set transfer_script = "$script_dir/transfer_trumbnail.csh"

if ( ! -f "$transfer_script" ) then
    echo "Error: transfer_trumbnail.csh not found in $script_dir"
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

    # Copy the image to the commissions folder
    cp "$image" "$base_path/"

    # Get the filename only
    set filename = `basename "$image"`

    # Call the transfer_trumbnail script
    $transfer_script "$base_path/$filename" "$thumbnail_path"
end

echo "Processing complete."
