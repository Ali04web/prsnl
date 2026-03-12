import os

# Mapping of corrupted patterns to correct characters
replacements = {
    'â†’': '→',
    'â†‘': '↑',
    'â€”': '—',
    'ðŸ‘‹': '👋',
    'â”€': '—',
    'â•': '='
}

target_dir = r'c:\Users\DELL\OneDrive\Desktop\majors\personal'
extensions = ['.html', '.css', '.js']

for root, dirs, files in os.walk(target_dir):
    if 'node_modules' in dirs:
        dirs.remove('node_modules')
    if '.git' in dirs:
        dirs.remove('.git')
        
    for file in files:
        if any(file.endswith(ext) for ext in extensions):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                updated_content = content
                for corrupted, correct in replacements.items():
                    updated_content = updated_content.replace(corrupted, correct)
                
                if updated_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    print(f"Fixed symbols in {path}")
            except Exception as e:
                print(f"Error processing {path}: {e}")
