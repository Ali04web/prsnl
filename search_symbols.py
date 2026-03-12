import os

patterns = ['â†’', 'â†‘', 'â€”', 'ðŸ‘‹', 'â•', 'â”€']
target_dir = r'c:\Users\DELL\OneDrive\Desktop\majors\personal'
output_file = r'c:\Users\DELL\OneDrive\Desktop\majors\personal\found_symbols.txt'
extensions = ['.html', '.css', '.js']

results = []

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
                    content = f.readlines()
                    for i, line in enumerate(content):
                        for p in patterns:
                            if p in line:
                                results.append(f"{path}:{i+1}: {line.strip()}")
                                break
            except Exception as e:
                results.append(f"Error reading {path}: {e}")

with open(output_file, 'w', encoding='utf-8') as f:
    if results:
        f.write('\n'.join(results))
    else:
        f.write("No patterns found.")
print(f"Results written to {output_file}")
