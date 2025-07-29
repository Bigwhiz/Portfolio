<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">BigWhiz — Full Stack Developer Portfolio</h1>

[![Site preview](/public/site-preview.png)](https://yourdomain.com)

Welcome to my personal portfolio. I’m a full stack developer passionate about building responsive, interactive, and visually engaging digital experiences. This site was built with [Remix](https://remix.run/), [Framer Motion](https://www.framer.com/motion/), and [Three.js](https://threejs.org/) — combining clean design with creative 3D animations and smooth transitions.

Whether it’s user-first frontend design or performance-driven backend logic, I enjoy crafting projects that blend usability with innovation. Feel free to explore, reach out, or grab ideas for your own projects.

🚀 [Live Site](https://yourdomain.com) | 🛠 [Storybook Components](https://yourstorybook.com)


## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

I've set up the site using Cloudflare for hosting. Deploy the site to Cloudflare Pages:

```bash
npm run deploy
```

## Permissions

I'm cool with anyone using the code or parts of the code for their own site, it is open source so people can learn from it and adapt it. However, I would encourage you to modify the theme and components it to make it your own. If you are using the site's design largely unmodified, I'd appreciate being credited as the designer of the website.

I do not give permission to present any of my projects as your own (this is being actively used as my portfolio site and these are my real projects I've worked on).

## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>

<details>
  <summary>How do I get the contact form to work?</summary>
  
  To get the contact form working create an AWS account and set up SES (Simple Email service). Then plug in your details into `.dev.vars.example` and rename it to `.dev.vars`. You'll also need to add these as enviroment variables in the Cloudflare dashboard for it to work in production. Or if you don't mind sending through gmail use [nodemailer](https://nodemailer.com/) instead.
</details>
