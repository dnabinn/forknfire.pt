# Fork & Fire — Deployment Guide

## Final File Structure

```
Fork & Fire/
├── index.html        ← Main page
├── css/
│   └── styles.css    ← All custom styles
├── js/
│   └── main.js       ← All JavaScript
├── CNAME             ← Custom domain (edit with your domain)
├── .gitignore
└── DEPLOY.md         ← This file
```

---

## Step 1 — Push to GitHub

```bash
# Inside the project folder
git init
git add .
git commit -m "Initial commit: Fork & Fire website"

# Create a new repo on GitHub (e.g. fork-and-fire)
git remote add origin https://github.com/YOUR_USERNAME/fork-and-fire.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

GitHub will give you a URL like: `https://yourusername.github.io/fork-and-fire`

---

## Step 3 — Connect Your Custom Domain

### In GitHub:
1. Still in **Settings → Pages**
2. Under **Custom domain**, type your domain (e.g. `forkandfire.pt`)
3. Click **Save**
4. Tick **Enforce HTTPS** once it appears ✓

### In Your Domain Registrar (DNS settings):

Add these **A records** pointing to GitHub's IPs:

| Type | Name | Value          |
|------|------|----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

And a **CNAME record** for `www`:

| Type  | Name | Value                          |
|-------|------|--------------------------------|
| CNAME | www  | YOUR_USERNAME.github.io        |

> DNS changes can take up to 24–48 hours to propagate.

---

## Step 4 — Update CNAME file

Open the `CNAME` file and make sure it contains exactly your domain:

```
forkandfire.pt
```

No `https://`, no trailing slash — just the bare domain.

---

## Updating the Site Later

```bash
# Make your changes, then:
git add .
git commit -m "Update: describe your change"
git push
```

GitHub Pages auto-deploys within ~1 minute.

---

## Before Going Live — Checklist

- [x] Phone number → +351 21 824 1089
- [ ] Update `hello@forkandfire.pt` if email differs
- [x] Instagram → https://www.instagram.com/forknfire.pt/
- [x] Facebook  → https://www.facebook.com/forknfire.pt/
- [ ] TikTok — add URL when ready (currently `href="#"`)
- [ ] Update `og:url` in `<head>` to your real domain
- [ ] Update `og:image` with a real hosted image if desired
- [ ] Test on mobile (iPhone + Android)
- [ ] Test reservation form behaviour
