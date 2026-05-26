# UK Investment Fund League — Website
 
Internal project repo for the UKIFL website. Built with React.
 
---
 
## What Is This?
 
The UK Investment Fund League is a national annual competition between university student investment funds. Funds are ranked by verified monthly returns, giving students a concrete, objective way to prove investing ability to recruiters — regardless of which university they attend or who they know.
 
This website is the public face of the league: showcasing the league table, explaining the concept, and handling fund applications.
 
---
 
## Getting Started
 
**Prerequisites:** Node.js installed.
 
```bash
# Install dependencies
npm install
 
# Run locally
npm start
```
 
The site will be available at `http://localhost:3000`.
 
---
 
## File Structure
 
```
root/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/         # One file per UI section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── ValueProps.jsx
│   │   ├── LeagueTable.jsx
│   │   ├── CallToAction.jsx
│   │   └── Footer.jsx
│   ├── data/               # Static data, edit these to update content
│   │   ├── stats.js
│   │   ├── valueProps.js
│   │   └── leagueData.js
│   ├── App.jsx             # Root component, composes all sections
│   ├── index.css           # All global styles
│   └── index.js            # Entry point, mounts App into the DOM
├── package.json
└── .gitignore
```
 
**To update league standings:** edit `src/data/leagueData.js`.  
**To update stats or value props:** edit `src/data/stats.js` or `src/data/valueProps.js`.  
**To add a new section:** create a component in `src/components/` and import it into `App.jsx`.
 
---
 
## Roadmap
 
- [ ] Add routing (React Router) for separate pages — About, Sponsors, Contact
- [ ] Replace static `leagueData.js` with a real backend/database
- [ ] Build a fund application/registration form
- [ ] Add authentication for fund managers to submit monthly returns
- [ ] Sponsor page and partnership section
- [ ] Mobile navigation (hamburger menu)
- [ ] Historical performance charts per fund