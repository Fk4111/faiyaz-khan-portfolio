#!/usr/bin/env python3
import os
import zipfile

def create_project_zip():
    base_dir = os.path.abspath(".")
    output_zip = os.path.join(base_dir, "public", "faiyaz-khan-portfolio.zip")
    
    os.makedirs(os.path.join(base_dir, "public"), exist_ok=True)
    
    # Exclude unnecessary / heavy directories
    exclude_dirs = {"node_modules", "dist", ".git", ".next", ".cache", "__pycache__"}
    exclude_files = {"faiyaz-khan-portfolio.zip", ".DS_Store"}

    print(f"Packaging project from {base_dir} into {output_zip}...")
    
    with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(base_dir):
            # Prune excluded dirs in-place
            dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith(".git")]
            
            for file in files:
                if file in exclude_files or file.endswith(".pyc"):
                    continue
                file_path = os.path.join(root, file)
                # Compute relative archive path
                arcname = os.path.relpath(file_path, base_dir)
                zipf.write(file_path, arcname)
                
    zip_size = os.path.getsize(output_zip)
    print(f"Zip created successfully: {output_zip} ({zip_size / 1024:.1f} KB)")

if __name__ == "__main__":
    create_project_zip()
