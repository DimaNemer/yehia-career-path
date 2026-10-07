# Yehya Career Path

## About the Project

Yehya Career Path is a Next.js website that helps Yehia organize his job search after graduating in Computer Science from the Lebanese University.

It gives him one place to follow his two-month plan, explore job opportunities, view role details, and track his applications. The goal is to help him stay organized and always know what his next step should be.

## Run the Project

First, install the dependencies:

npm install

Then run the development server:

npm run dev

Open http://localhost:3000 in the browser to see the project.

## Questions

## 1. Why did you use `await` when reading `params`?

I used `await` because Next.js gives `params` as a Promise in the dynamic page. I need to wait for it before I can get the `id` and use it to find the correct opportunity.

## 2. Why is the route ID a string?

 ID is a string because the value that comes from the URL is a string. that's why kept the IDs in my opportunities data as strings so I can compare them directly without converting them.

## 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

 Dashboard layout for the parts that should stay the same, mainly the Overview and Applications navigation. The individual pages contain the content that changes. The overview page shows the application summary, while the applications page shows the list of applications.