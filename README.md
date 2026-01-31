# Hexo Theme Bloom

A clean and minimal Hexo theme with categorized column layout, inspired by [hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus) dark mode and [leavesongs.com](https://www.leavesongs.com).

## Features

- **Dark Mode** - Beautiful dark color scheme
- **Categorized Columns** - Display posts in up to 2 categorized columns on homepage
- **Responsive Design** - Works on all devices
- **Local Search** - Built-in search functionality
- **Multiple Comment Systems** - Support for Disqus, Utterances, and Giscus
- **Code Highlighting** - Tomorrow Night theme
- **i18n Support** - English and Chinese

## Installation

### 1. Clone the theme

```bash
cd your-hexo-site
git clone https://github.com/WinMin/hexo-theme-Bloom.git themes/Bloom
```

### 2. Install dependencies

```bash
npm install hexo-renderer-ejs hexo-renderer-stylus hexo-generator-searchdb --save
```

### 3. Enable the theme

Edit `_config.yml` in your site root:

```yaml
theme: Bloom
```

## Configuration

Create or edit `themes/Bloom/_config.yml`:

### Navigation

```yaml
nav:
  Home: /
  Archives: /archives/
  About: /about/
```

### Profile

```yaml
profile:
  enabled: true
  avatar: /images/avatar.png
  title: "Your Name"
  subtitle: "A brief introduction"
  description: |
    Security Researcher / Developer / Blogger.
```

### Homepage Columns (Core Feature)

```yaml
columns:
  enabled: true
  layout: two-column  # single-column | two-column
  items:
    - name: Security
      category: security
      limit: 10
      show_date: true
    - name: Life
      category: life
      limit: 10
      show_date: true
```

### Social Links

```yaml
social:
  github: https://github.com/yourname
  twitter: https://twitter.com/yourname
  email: mailto:you@example.com
  weibo: https://weibo.com/yourname
  rss: /atom.xml
```

### Search

```yaml
search:
  enabled: true
  path: search.xml
  placeholder: "Search..."
```

### Comments

```yaml
comments:
  enabled: true
  provider: utterances  # disqus | utterances | giscus
  utterances:
    repo: "yourname/yourrepo"
    issue_term: pathname
```

## Post Front-matter

```yaml
---
title: My Post Title
date: 2024-01-01
categories:
  - security
tags:
  - web
  - xss
---
```

## Creating Categories

To use the column feature, create posts with categories matching your column configuration:

```yaml
# Post in Security column
categories:
  - security

# Post in Life column
categories:
  - life
```

## Pages

### Categories Page

```bash
hexo new page categories
```

Edit `source/categories/index.md`:

```yaml
---
title: Categories
layout: categories
---
```

### Archives Page

```bash
hexo new page archives
```

Edit `source/archives/index.md`:

```yaml
---
title: Archives
layout: archive
---
```

### Friends/Links Page

```bash
hexo new page link
```

Edit `source/link/index.md`:

```yaml
---
title: Links
layout: links
links:
  - name: Friend Name
    url: https://example.com
    avatar: /images/avatar.png  # Optional, auto-fetched if omitted
    description: A brief description
---
```

## Customization

### Colors

Edit `source/css/_colors/dark.styl` to customize colors:

```stylus
$color-background = #1d1f21
$color-text = #c9cacc
$color-link = rgba(212, 128, 170, 1)
$color-accent = #2bbc8a
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Credits

- Inspired by [hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus)
- Layout reference from [leavesongs.com](https://www.leavesongs.com)
