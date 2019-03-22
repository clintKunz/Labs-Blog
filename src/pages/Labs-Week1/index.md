---
title: "Labs Week 1 - Team Home 3 aka Manaje"
description: Lambda School Labs Week 1 Blog Post
date: '2019-03-22'
image: arq.png
---

## Summarize the work you did this week
This week as a team we, 
- Completed the Technical Design Document and the CTO passed off on it, https://docs.google.com/document/d/1Sq5TefigoRrpykP1LtZGTw6i00ltIC248FzGPcCzjZw/edit#
- Filled out Trello cards for specific work to be done in order to accomplish the MVP features, https://trello.com/b/GmLte4Yt/labs11-team-home-3
- Redeployed and connected with 3rd party apps the front-end and back-end of Team Home 2 with Netlify, Heroku, Auth0, SendGrid, and Cloudinary, https://manaje.netlify.com/ 
- Discussed refactoring changes to the app and decided on switching to a relational database and refactoring GraphQL and implementing Prisma
- Completed 6 chapters of an online howToGraphQL tutorial, https://www.howtographql.com/graphql-js/1-getting-started/

## Pick a ticket and provide analysis of the work you did
### Summary of Work
Ticket - https://trello.com/c/uhwegncW/12-deployed-to-the-web
On Wednesday, we contacted Team Home 2 and asked for environment variables, and we went through the Read.me documentation to set up hosting and third party app accounts. Team Home 2 had done an excellent job with regards to documentation, which I will be forever grateful for. We all shared a screen on Zoom and hosted the backend with Heroku. As it stands, the database is a MongoDB that runs with an add-on to Heroku called mLab. Furthermore, we hosted the front-end to netlify, which did not give us any blockers. The main blocker for the ticket was an error on our part with connecting the back-end to the right endpoint. We had not added '/graphQL' to the endpoint, and it was not working for longer than an hour or so. Once we figured that out, the ticket was complete.

### Analysis
- Certain tasks are much easier to accomplish when you have access to solid documentation from the previous developers.
- Be careful with how you connect applications. It is worth it to double check url's while implementing them.
- Asking for help from previous developers can save you a lot of time.

## Individual contributions this week
It wouldn't be correct to start off without saying that this week was a complete team effort. Each individual was present, collaborative, and contributed, which is a great thing to be a part of.
With that said, I contributed in the following ways,
- Researched Basecamp's To-dos feature. I noticed that it has some great features that could be implemented into our project if time permits. For example, it has a notes section that allows the user to format font and spacing in said notes. I also noticed that the pricing for Basecamp is fixed no matter how many members are on your team/organization, which relates to Manaje's pricing.
- Contributed to the justification of tools by researching and explaining the costs and benefits of non-relational databases and relational databases. Ultimately, we decided to swap out the current MongoDB with a relational database because as the application grows so will the complexity of data relations. 
- Improved my future ability to contribute to refactoring the code base by completing a tutorial on GraphQL. So far I've submitted two pull requests for this tutorial. https://github.com/clintKunz/graphql-getting-started/pull/2
- Created this Gatsby Blog to be used as a journal through Labs. https://github.com/clintKunz/Labs-Blog/tree/master/src/pages
