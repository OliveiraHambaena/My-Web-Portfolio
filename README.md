# React Portfolio (mobile-friendly)

This is a small Vite + React skeleton implementing a two-column portfolio layout:

- Left sidebar: social links, profile image, resume link. Fixed on desktop, toggles on mobile via the hamburger.
- Right content: navbar and pages (Home, About, Contact) that switch on click.

How to run

1. cd my-web-portfolio
2. npm install
3. npm run dev

Files created: `src/components/Sidebar.jsx`, `src/components/Navbar.jsx`, `src/pages/*`, `src/App.jsx`.

Notes

- The app references `../old/myphoto.jpg` and `../old/resume.pdf` (from your existing static site). If you want those copied into this project, move them into `react-portfolio/public` or update the paths.
