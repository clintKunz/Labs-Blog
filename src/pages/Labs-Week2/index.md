---
title: "Labs Week 2 - Refactoring and Authentication"
description: Lambda School Labs Week 2 Blog Post
date: '2019-03-29'
image: contribution.png
---

## Individual accomplishments this Sprint
As you can see from my contribution graph this week, many of the pull requests I created were not merged into master. I don't consider this a failure, I was tasked with restructuring the files and creating on a seperate branch another way of building the backend with prisma-binding, but in the end we decided not to make the switch to prisma-binding even though there were some advantages with that route. 
- The first thing I did this week was work on getting the file structure in the refactored repository set up in a way that would allow for the application to grow in an organized way. After that the three team members that were working on the backend for the week set up docker to create a MySQL database using prisma in order to have a development database to query and test. It wasn't difficult to set up and figure out. We all started using MySQL instead of Postgres because of a tutorial, I hope that this doesn't have any unintended consequences because our deployed database is a Postgres database. 
- On Tuesday and part of Wednesday, I worked on changing the structure of the backend repository to match Wes Bos' Advanced React Course, it uses prisma-binding instead of prisma-client and because I have access to the course, it would have been simple to set up the email notifications because that is part of the course. However, the team decided to stick with prisma-client because of the HowToGraphQL tutorial we went through last week, which is fine with me, but it was difficult to make that decision because it made my two days of work seem useless. 
- On Thursday, I focused on working on Auth0. Daniel and I spent most of the day pair programming. We tried to go through some tutorials to get it to work with GraphQL and Prisma, unfortunately, it wasn't working for us, so we reached out for help. We were pointed in the direction of a repo from a Labs 9 project. I spent about 4 hours setting that up on my branch. At this point, it seems to work; however, I need to find a way to test it properly, so hopefully I can get to that this afternoon.

## Pick a ticket and provide analysis of the work you did
### [Ticket](https://trello.com/c/iWfk37ke/81-transition-apollo-server-file-to-the-refactor-repo)
This ticket was to take from the old backend repository the authentication code and make it work in the refactor repository. I started by studying each part of the code, the dependencies, and the flow of the server. Then I started to implement it with Daniel. We kept getting errors and messages that were not we were not able to understand or research with success, so we started to learn again in tutorials. Finally we ended up studying the code of Maps-Scrapper a project that was completed in Labs 9. This code was well written with comments and components were broken up into easy to consume files. Hence, my analysis of that learning experience would be the following.
1) If you think you understand something, try placing those tools and logic in another context to make sure that your understanding is solid. If your implementation does not work in another context, you most likely need to study and practice more.
2) Talk through your learning experience with someone else, but make sure to code it yourself when you get the chance. 
3) The most difficult part of authentication for this project has been testing. I've implemented authentication on other apps before, but this time with GraphQL and Prisma, it has been extremely hard to make sure, step by step, we are headed in the right direction.

## Weekly Reflection - Working with others

