#!/bin/bash

# Script to convert markdown files to Typst format
# This script will process all .md files in the stories directory

# Function to convert a markdown file to Typst format
convert_file() {
    local md_file="$1"
    local typ_file="${md_file%.md}.typ"
    local title=$(grep -m 1 "^# " "$md_file" | sed 's/^# //')
    
    # If no title found, use filename as title
    if [ -z "$title" ]; then
        title=$(basename "$md_file" .md)
        # Capitalize first letter and replace hyphens with spaces
        title=$(echo "$title" | sed 's/^./\U&/' | sed 's/-/ /g')
    fi
    
    echo "Converting $md_file to $typ_file"
    
    # Create Typst file with title
    echo "#let title = [$title]" > "$typ_file"
    echo "" >> "$typ_file"
    
    # Process the content
    # Skip the title line if it exists
    if grep -q "^# " "$md_file"; then
        tail -n +2 "$md_file" | 
        # Convert markdown headers to Typst headers
        sed 's/^## /== /g' | 
        sed 's/^### /=== /g' | 
        sed 's/^#### /==== /g' | 
        # Convert markdown blockquotes to Typst quotes
        sed 's/^> /#quote[/g' | 
        sed '/^#quote\[/s/$/]/g' |
        # Convert markdown horizontal rules to Typst lines
        sed 's/^---/#line(length: 100%, stroke: 0.5pt)/g' |
        # Convert markdown emphasis
        sed 's/\*\*\([^*]*\)\*\*/*\1*/g' |
        # Convert markdown footnotes
        sed 's/\[\^/\#footnote\[/g' | 
        sed 's/\]:/\]/g' |
        # Convert newpage
        sed 's/\\newpage/#pagebreak()/g' >> "$typ_file"
    else
        # If no title line, process the whole file
        cat "$md_file" | 
        # Convert markdown headers to Typst headers
        sed 's/^## /== /g' | 
        sed 's/^### /=== /g' | 
        sed 's/^#### /==== /g' | 
        # Convert markdown blockquotes to Typst quotes
        sed 's/^> /#quote[/g' | 
        sed '/^#quote\[/s/$/]/g' |
        # Convert markdown horizontal rules to Typst lines
        sed 's/^---/#line(length: 100%, stroke: 0.5pt)/g' |
        # Convert markdown emphasis
        sed 's/\*\*\([^*]*\)\*\*/*\1*/g' |
        # Convert markdown footnotes
        sed 's/\[\^/\#footnote\[/g' | 
        sed 's/\]:/\]/g' |
        # Convert newpage
        sed 's/\\newpage/#pagebreak()/g' >> "$typ_file"
    fi
    
    # Add pagebreak at the end if not already there
    if ! grep -q "#pagebreak()" "$typ_file"; then
        echo "" >> "$typ_file"
        echo "#pagebreak()" >> "$typ_file"
    fi
}

# Process all markdown files in the stories directory
for md_file in stories/*.md; do
    convert_file "$md_file"
done

echo "Conversion complete!" 