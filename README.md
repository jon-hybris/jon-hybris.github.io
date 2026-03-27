# Jon Elslager Portfolio (GitHub Pages)

Static personal portfolio site for recruiter-facing ecommerce delivery leadership.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://127.0.0.1:8000`.

## Troubleshooting: "resolve all conflict markers" / disabled commit button

If your editor or Git provider says conflict markers still exist, run:

```bash
rg -n "<{7}|={7}|>{7}|\\|{7}" --hidden --glob '!.git' .
```

- If matches are found, edit those files and remove all conflict markers.
- After fixing, stage files with `git add <file>`.
- Verify merge status with `git status`.
- If there is no active merge and no file changes, commit buttons may stay disabled because there is nothing new to commit.

To confirm an active merge, check:

```bash
test -f .git/MERGE_HEAD && echo "merge in progress" || echo "no merge in progress"
```
