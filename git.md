# 🌐 Portweb Project Guide

## 📌 Project Description

This is a personal web portfolio project managed across two devices (Windows & Linux) using **GitHub + SSH**.  
All changes are tracked, committed, and pushed to ensure safe, consistent cross-device development.

---

## 🔄 Git Workflow Guide (Multi-Device Sync)

### ✅ Starting Your Work (any device)
```bash
cd portweb # chance to target directory
git pull # pull newest changed
code . # open directory in vscode

. coding 

git add . # add all changed file
git commit -m "add git.md" # commit with description
git push # push git 

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch