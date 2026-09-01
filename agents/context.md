# ONE JABALPUR — PROJECT MASTER CONTEXT

## 1. Project Overview

I am building a project called **One Jabalpur**.

The main idea is to create a digital platform focused specifically on **Jabalpur, Madhya Pradesh, India**.

Domain planned/owned:
**https://onejabalpur.com**

The long-term vision is for One Jabalpur to become a central local discovery platform where people can find useful information about Jabalpur.

The platform can include:

- Local businesses
- Restaurants
- Cafes
- Tourist places
- Things to do
- Events
- Offers
- Activities
- Local guides
- Potentially jobs and other useful local information

The goal is NOT just to create a blog.

The goal is to eventually build a **Jabalpur-focused local information/discovery platform and directory**.

---

# 2. Main Business/Product Vision

The long-term idea is:

                         ONE JABALPUR
                              |
             --------------------------------
             |              |               |
           EVENTS         PLACES        BUSINESSES
             |              |               |
             --------------------------------
                            |
                       LOCAL GUIDES
                            |
                       LOCAL USERS

One Jabalpur should become useful enough that someone searching for information about Jabalpur thinks of One Jabalpur as a local destination.

Examples of searches I eventually want One Jabalpur to compete for:

- Jabalpur
- Jabalpur events
- events in Jabalpur
- things to do in Jabalpur
- places to visit in Jabalpur
- best cafes in Jabalpur
- cafes in Jabalpur
- best restaurants in Jabalpur
- restaurants in Jabalpur
- Jabalpur businesses
- Jabalpur activities
- Jabalpur offers
- Jabalpur events this weekend
- Jabalpur events today
- places near Jabalpur

The immediate SEO strategy should NOT focus only on trying to rank #1 for the extremely broad keyword "Jabalpur".

Instead, build authority through many specific Jabalpur-related searches and gradually work toward broader searches.

---

# 3. Current Website / GitHub Setup

The website/code is hosted in GitHub.

I have been using GitHub Pages for the website.

My GitHub Pages site has been:

**https://mohittpattel.github.io/OneJabalpur/**

The repository can be private.

My Git workflow is generally:

    develop
       |
       | Pull Request
       ↓
      main
       |
       ↓
    production website

I make changes on `develop`, raise a PR to `main`, and after merging to `main`, the production website should be updated through the configured GitHub Pages deployment.

After merging, GitHub Pages normally takes a few minutes to deploy.

I check:

**GitHub → Actions**

to see whether deployment is:

- In progress
- Successful
- Failed

If the deployment is successful but the browser still shows the old site, I can try:

- Ctrl + F5
- Incognito/private window
- Wait for caching/deployment propagation

---

# 4. GitHub PR Issue

I previously encountered a GitHub error/message similar to:

> "Owner should not be able to approve/merge their own PR."

This is generally related to branch protection/rulesets requiring approval from someone other than the PR author.

Relevant GitHub settings can be under:

**Repository → Settings → Rules → Rulesets**

or:

**Settings → Branches → Branch protection rules**

If this is a personal repository and I want to create and merge my own PR, I can configure the branch rule so that a PR is required but another approval is not required, e.g.:

- Require pull request: ON
- Required approvals: 0

If the repository belongs to an organization/company, an administrator may have configured a rule requiring another person to approve the PR.

---

# 5. Domain

The planned/custom domain for One Jabalpur is:

**onejabalpur.com**

The domain is/was considered through GoDaddy.

Important distinction:

- GoDaddy = domain registration/DNS
- Hosting = separate service
- GitHub = source code/repository

The domain does not have to be hosted by GoDaddy just because it was purchased from GoDaddy.

---

# 6. Hosting Options Discussed

I asked about free hosting options when:

- Code is in GitHub
- Domain is purchased from GoDaddy

The preferred recommendation for One Jabalpur was:

## Cloudflare Pages

Architecture:

    Private GitHub Repository
             |
             ↓
       Cloudflare Pages
             |
             ↓
       onejabalpur.com

Advantages:

- Free hosting option
- GitHub integration
- Private GitHub repository can remain private
- Custom domain support
- HTTPS
- CDN
- Automatic deployments
- Good for React/static websites

GoDaddy can continue to be used for the domain/DNS while Cloudflare Pages handles hosting.

Other options discussed:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

For a personal portfolio, GitHub Pages is still a good option.

For One Jabalpur, Cloudflare Pages was preferred because One Jabalpur may eventually become a commercial/local platform.

---

# 7. Important GitHub Pages Consideration

GitHub Pages is good for:

- Personal portfolio
- Static websites
- Simple project websites

But GitHub Pages has limitations around private repositories depending on the GitHub plan, and GitHub states that Pages is not intended to be used as free hosting for an online business/e-commerce/SaaS application.

Therefore, for One Jabalpur as a potentially commercial platform, Cloudflare Pages is preferred for the production frontend.

---

# 8. Suggested One Jabalpur Architecture

The long-term application architecture discussed is approximately:

                    onejabalpur.com
                           |
                           ↓
                 SEO-friendly frontend
                           |
                  --------------------
                  |                  |
                  ↓                  ↓
              Public site        Admin panel
                  |
                  ↓
               .NET API
                  |
                  ↓
              Database

Potential production structure:

                    onejabalpur.com
                           |
                           ↓
                   React / Next.js
                           |
                           ↓
                 api.onejabalpur.com
                           |
                           ↓
                       .NET API
                           |
                           ↓
                      SQL Database

The user has experience with:

- C#
- .NET
- ASP.NET Core
- Web API
- SQL Server
- React
- Angular
- GitHub
- DevOps

So a React/Next.js frontend + .NET backend + SQL database is a natural architecture for the project.

---

# 9. React / SEO Consideration

Because One Jabalpur is intended to be a search-driven website, SEO needs to be considered from the beginning.

A pure client-side React SPA can make SEO more complicated if important content is only generated after JavaScript runs.

For important public pages such as:

- Events
- Places
- Businesses
- Restaurants
- Cafes

I should consider:

- SSR
- SSG
- Prerendering
- Next.js

rather than relying entirely on a client-side SPA.

The important goal is that search engines can crawl/index the actual page content.

---

# 10. One Jabalpur SEO Goal

The long-term SEO goal is to make One Jabalpur highly visible for Jabalpur-related searches.

Important principle:

**Indexing ≠ ranking.**

Getting a page into Google's index does not guarantee that it will appear at the top.

Google ranking depends on many factors, including relevance, content quality, local signals, prominence, links, user experience, etc.

There is no guaranteed way to make a website #1 for a search.

---

# 11. Google Search Console

One Jabalpur should be connected to:

**Google Search Console**

Preferred setup:

- Add `onejabalpur.com`
- Verify domain ownership
- Submit sitemap
- Monitor indexing
- Monitor search queries
- Monitor impressions
- Monitor clicks
- Monitor CTR
- Monitor ranking positions
- Monitor Core Web Vitals
- Check indexing errors

Expected sitemap:

**https://onejabalpur.com/sitemap.xml**

Expected robots file:

**https://onejabalpur.com/robots.txt**

Basic robots.txt concept:

    User-agent: *
    Allow: /

    Sitemap: https://onejabalpur.com/sitemap.xml

This needs to be adapted if there are private/admin routes that should not be crawled.

---

# 12. Homepage SEO

The homepage should clearly explain what One Jabalpur is.

Possible positioning:

**One Jabalpur — Discover Everything Jabalpur**

Possible homepage description:

> Discover Jabalpur's events, restaurants, places to visit, local businesses, activities, offers and everything happening in Jabalpur, Madhya Pradesh.

A page title could be:

> One Jabalpur - Discover Events, Places, Food & Businesses in Jabalpur

Avoid keyword stuffing such as repeatedly writing "Jabalpur Jabalpur Jabalpur".

---

# 13. Main SEO Website Structure

Recommended website architecture:

    One Jabalpur
    |
    ├── Events
    │   ├── Today
    │   ├── This Weekend
    │   ├── This Month
    │   └── Individual Events
    |
    ├── Places
    │   └── Individual Places
    |
    ├── Food
    │   ├── Restaurants
    │   ├── Cafes
    │   └── Food Guides
    |
    ├── Businesses
    │   ├── Hotels
    │   ├── Gyms
    │   ├── Salons
    │   ├── Shopping
    │   └── Services
    |
    ├── Things To Do
    |
    ├── Offers
    |
    ├── Jobs
    |
    └── Guides / Blog

---

# 14. SEO-Friendly URLs

Examples:

    /places/dhuandhar-falls
    /places/madan-mahal-fort
    /places/bargi-dam

    /restaurants/best-restaurants-in-jabalpur

    /cafes/best-cafes-in-jabalpur

    /businesses/jabalpur-cafes

    /events/jabalpur-comedy-show

Avoid:

    /page?id=12345
    /jabalpurPageFinal2
    /places/12345

Use lowercase, readable, descriptive slugs.

---

# 15. Important SEO Page Types

## A. Event Pages

Example:

    /events/jabalpur-comedy-show

Include:

- Event name
- Date
- Time
- Venue
- Address
- Organizer
- Ticket information
- Price
- Description
- Event image
- Event status
- Official ticket/source link
- Map
- Event structured data where appropriate

Important event pages:

    /events
    /events/today
    /events/this-weekend
    /events/this-month

Potential search targets:

- Jabalpur events
- events in Jabalpur
- Jabalpur events today
- Jabalpur events this weekend
- upcoming events in Jabalpur
- free events in Jabalpur
- live music in Jabalpur
- comedy shows in Jabalpur

---

# 16. Business Directory

One Jabalpur should eventually have individual business pages.

Example:

    /businesses/verandah-brew-house-kitchen

Business page can include:

- Name
- Category
- Description
- Address
- Phone
- Website
- Opening hours
- Services
- Photos
- Map
- Reviews
- Offers
- Social links
- Last updated date
- Business owner/manager claim functionality

Important:

Do NOT simply copy descriptions from Google, competitors, or other directories.

Do NOT create fake reviews.

Do NOT create fake business locations.

---

# 17. Cafe SEO Example

One major SEO opportunity is:

**"best cafes in Jabalpur"**

Instead of only creating:

    /cafes

create useful pages such as:

    /cafes/best-cafes-in-jabalpur
    /cafes/wright-town
    /cafes/vijay-nagar
    /cafes/napier-town
    /cafes-for-couples
    /cafes-for-families
    /cafes-for-work-study

and individual cafe pages:

    /cafes/{cafe-name}

A useful cafe page can contain:

- Photos
- Location
- Map
- Address
- Opening hours
- Price range
- Menu
- Popular items
- Atmosphere
- Parking
- Family-friendly information
- Work/study suitability
- Outdoor seating
- Reviews
- Nearby cafes
- Offers
- Last verified date

The goal is not to beat Zomato simply because One Jabalpur mentions "Jabalpur".

The goal is to make the best useful Jabalpur-specific page for a particular search.

---

# 18. Tourist Place SEO

For each tourist attraction:

    /places/{place-slug}

Example:

    /places/dhuandhar-falls
    /places/marble-rocks
    /places/madan-mahal-fort
    /places/bargi-dam
    /places/dumna-nature-park

Include where verified:

- Overview
- Location
- Timings
- Entry fee
- Best time to visit
- How to reach
- Things to do
- Nearby attractions
- Photos
- Map
- FAQs
- Accessibility
- Parking
- Last updated date

---

# 19. Content Strategy

The website should focus on useful, original, people-first content.

Examples:

### Travel

- 15 Best Places to Visit in Jabalpur
- Best Places to Visit Near Jabalpur
- Best Things to Do in Jabalpur
- Jabalpur One-Day Trip Guide
- Best Places to Visit in Jabalpur With Family
- Best Places to Visit in Jabalpur for Couples

### Food

- Best Restaurants in Jabalpur
- Best Cafes in Jabalpur
- Best Family Restaurants in Jabalpur
- Best Places for Breakfast in Jabalpur
- Best Street Food in Jabalpur

### Activities

- Things to Do in Jabalpur This Weekend
- Best Activities in Jabalpur
- Places to Hang Out in Jabalpur
- Free Things to Do in Jabalpur

### Events

- Jabalpur Events Today
- Jabalpur Events This Weekend
- Jabalpur Events This Month
- Live Music in Jabalpur
- Comedy Shows in Jabalpur
- Workshops in Jabalpur
- Family Events in Jabalpur

---

# 20. SEO Content Principle

Do NOT create thousands of thin pages such as:

    /best-restaurant-in-jabalpur-1
    /best-restaurant-in-jabalpur-2
    /best-restaurant-in-jabalpur-3

if they contain almost identical content.

Avoid:

- Keyword stuffing
- Fake reviews
- Automatically generated thin pages
- Copied content
- Spam backlinks
- Fake addresses
- Fake businesses
- Fake event information

Each page should have a genuine purpose and unique value.

---

# 21. Internal Linking Strategy

Pages should link to relevant related pages.

Example:

    Dhuandhar Falls
          ↓
    Jabalpur Places
          ↓
      Bhedaghat
          ↓
     Marble Rocks
          ↓
    Things To Do in Jabalpur

For cafes:

    Best Cafes in Jabalpur
          ↓
       Cafe page
          ↓
    Nearby cafes
          ↓
    Jabalpur restaurants
          ↓
    Things to do in Jabalpur

Use descriptive anchor text where appropriate.

---

# 22. Structured Data

Use Schema.org structured data where it genuinely matches the page.

Potential types:

- WebSite
- Organization
- BreadcrumbList
- Event
- LocalBusiness
- Restaurant
- Article

Structured data should match visible page content.

It can help search engines understand the page but does not guarantee rich results or higher rankings.

---

# 23. Images

Images should be:

- Relevant
- High quality
- Legally usable
- Properly licensed
- Optimized/compressed
- Correct dimensions

Use descriptive filenames.

Good:

    dhuandhar-falls-jabalpur.jpg

Good alt text:

    Dhuandhar Falls in Jabalpur, Madhya Pradesh

Avoid keyword stuffing:

    jabalpur jabalpur best jabalpur tourist place image

Potential sources for copyright-safe images should be verified before use.

---

# 24. Local SEO

For genuine local businesses:

- Correct name
- Correct address
- Correct phone
- Correct category
- Accurate opening hours
- Accurate location
- Genuine photos
- Genuine reviews
- Correct website
- Consistent information

If One Jabalpur has an eligible real-world business presence, create a legitimate Google Business Profile.

Do NOT create fake addresses simply to rank.

Google local search considers factors such as:

- Relevance
- Distance
- Prominence

---

# 25. Backlink Strategy

Do not buy spammy backlink packages.

Build genuine relationships with:

- Jabalpur businesses
- Restaurants
- Event organizers
- Colleges
- Local organizations
- Local publications
- Local bloggers
- Local creators
- Tourism/community organizations

Example:

    Local Business
          ↓
    "Find us on One Jabalpur"
          ↓
    One Jabalpur business page

The objective is to build genuine local authority.

---

# 26. Social Media Strategy

Potential One Jabalpur channels:

- Instagram
- Facebook
- YouTube
- Google Business Profile
- Website

Example social content:

> 10 things happening in Jabalpur this weekend

Then direct users to:

> OneJabalpur.com

The long-term goal is to build branded searches such as:

> One Jabalpur

rather than relying only on generic searches such as:

> Jabalpur

---

# 27. Six-Month SEO Strategy

## Month 1

Technical foundation:

- Google Search Console
- Sitemap
- Robots.txt
- Canonicals
- SEO-friendly URLs
- Metadata
- Mobile responsiveness
- Page speed
- Initial 20–30 high-quality pages

## Month 2

Long-tail content:

- Jabalpur travel
- Food
- Cafes
- Restaurants
- Events
- Things to do

Start building event pages.

## Month 3

Business directory:

- Local businesses
- Restaurants
- Cafes
- Services
- Individual business pages

Start local backlink relationships.

## Month 4

Own "What's happening in Jabalpur":

- Events today
- Events this weekend
- Events this month
- Free events
- Live music
- Comedy
- Workshops
- Family events

Build topical authority.

## Month 5

Reviews and user-generated content:

- Genuine reviews
- Business claims
- Photos
- Local community content

Continue social media and backlinks.

## Month 6

Use Google Search Console data.

Find pages ranking around positions 5–20 and improve them.

Improve:

- Content
- Titles
- CTR
- Internal links
- Images
- Structured data
- User experience

Do not simply create hundreds of new pages.

---

# 28. SEO Success Metrics

Possible internal targets:

                    Month 1   Month 3   Month 6

Quality pages       20        75        200+
Business listings   10        100       500+
Event pages         5         50        200+
Local backlinks     2–5       15–25     40+

These are targets, not guarantees.

Quality is more important than hitting a page count.

---

# 29. How Google Search Ranking Works — Simplified

For a search such as:

> best cafes in Jabalpur

Google roughly understands:

    Topic       = cafes
    Location    = Jabalpur
    Intent      = recommendation/discovery
    Modifier    = best

Then it finds relevant indexed pages and evaluates many signals.

Simplified model:

                    USER SEARCH
                        |
                        ↓
                 Understand intent
                        |
                        ↓
                 Find relevant pages
                        |
             ------------------------
             |          |           |
             ↓          ↓           ↓
          Relevance   Quality    Authority
             |          |           |
             ------------------------
                        |
                        ↓
                  Local signals
                        |
                        ↓
                     Ranking
                        |
                        ↓
                Search results

Important:

Established websites such as Zomato, TripAdvisor and similar platforms can have advantages because they have:

- Large amounts of content
- Many users
- Reviews
- Backlinks
- Brand recognition
- Local/business data
- Long-term domain history
- Strong authority

One Jabalpur should NOT try to beat them everywhere immediately.

Instead, create the best Jabalpur-specific content for specific searches.

---

# 30. Strategic SEO Positioning

Instead of asking:

> How do I make One Jabalpur rank above Zomato?

The better question is:

> How can I make One Jabalpur the best Jabalpur-specific page on the internet for this particular search?

Build authority progressively:

    Cafes
       ↓
    Restaurants
       ↓
    Events
       ↓
    Tourist places
       ↓
    Activities
       ↓
    Businesses
       ↓
    Offers
       ↓
    Jabalpur local authority
       ↓
    Broader "Jabalpur" searches

---

# 31. Important Page-Creation Checklist

I created a separate Markdown checklist for reviewing every new One Jabalpur page.

File:

**one-jabalpur-seo-page-checklist.md**

It covers:

- Search intent
- URL
- Title
- Meta description
- H1
- Headings
- Content quality
- Internal links
- Images
- Structured data
- Canonical
- Indexing
- Sitemap
- Robots.txt
- Mobile UX
- Performance
- React/JavaScript SEO
- Open Graph
- Local SEO
- Events
- Business listings
- Tourist places
- Content freshness
- Duplicate/thin content
- Site architecture
- Backlinks
- Search Console
- Pre-publish checks
- Post-publish checks
- Golden SEO rules

Use this checklist every time a new page is created.

---

# 32. Golden Rules for One Jabalpur

1. People first, search engines second.
2. Every page must have a real purpose.
3. Do not create pages only because a keyword exists.
4. Do not copy content from other websites.
5. Do not buy spammy backlinks.
6. Do not create fake reviews.
7. Do not create fake business locations.
8. Use real and accurate local information.
9. Make important pages independently useful.
10. Build internal links between related Jabalpur content.
11. Build SEO into the application architecture from the beginning.
12. Keep event/business/place information current.
13. Focus on specific local searches before trying to rank for the broad "Jabalpur" keyword.
14. Use Google Search Console data to continuously improve the site.
15. Quality and usefulness are more important than the number of pages.

---

# 33. Current Recommended Technology Direction

For a production-quality One Jabalpur platform:

Frontend:
- React or preferably Next.js for SEO-heavy public pages

Backend:
- .NET / ASP.NET Core Web API

Database:
- SQL Server or PostgreSQL

Hosting:
- Cloudflare Pages for the public frontend is currently preferred for a free/low-cost setup

Domain:
- onejabalpur.com
- Domain can remain registered at GoDaddy
- DNS can point to the hosting provider

Source control:
- GitHub
- `develop` → PR → `main`

SEO infrastructure:
- Google Search Console
- sitemap.xml
- robots.txt
- canonical URLs
- structured data
- metadata
- Open Graph
- SEO-friendly URLs
- SSR/SSG/prerendering where appropriate

---

# 34. When Starting a New Chat About One Jabalpur

Please treat this entire document as the existing project context.

Do NOT assume I am starting the project from scratch.

When I ask a question about One Jabalpur, consider:

- The local Jabalpur-focused platform vision
- The SEO-first architecture
- The GitHub workflow
- The `develop` → PR → `main` production flow
- The `onejabalpur.com` domain
- The GoDaddy domain/DNS setup
- The preferred Cloudflare Pages hosting direction
- The React/Next.js + .NET + database architecture
- The long-term local SEO strategy
- The page-level SEO checklist
- The goal of competing for Jabalpur-related searches
- The need for original, useful, locally relevant content

Do not optimize only for search engines. The primary objective is to create a genuinely useful platform for people in and around Jabalpur.
