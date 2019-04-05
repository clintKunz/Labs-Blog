---
title: "Labs Week 3 - Display User X's Data"
description: Lambda School Labs Week 3 Blog Post
date: '2019-04-05'
image: contribution3.png
---

## Individual accomplishments this Sprint
This week I spent a lot of time pair programming with Daniel and Nick. I was able to finish the Auth0 setup. I worked on getting the frontend to only display teams and corresponding todolists, activities, messages, etc., that are associated to the logged in user. Furthermore, I worked with Daniel to set up Stripe, Twilio, and Sendgrid. The implementation of those third-party apps went smooth with no major blockers.
- Auth0 integration proved to be difficult. There were many blockers that I faced with this task, but it was a good learning experience. The main challenge related to my inexperience with React Hooks and the useEffect method. When a User logged in, Auth0 would redirect to the dashboard route, that would then trigger a backend mutation to fire that checked if that user existed in the database or not, if not then a user was created. The challenge with this was that there was an asynchronous issue because while the backend was checking the user, dashboard was trying to query with a userId that had not been sent to the frontend yet. Hence, we tried to set up the mutation and query as Promises, but React Hooks gave us issues. Finally, we decided to move the authentication function to remain on App.js so that once it was finished, it would redirect to the dashboard route instead of Auth0 doing that. This refactoring solution solved the asynchronous issue. 

## Pick a ticket and provide analysis of the work you did
### [Ticket](https://trello.com/c/nGfpuu9D/106-add-name-and-pic-to-users-from-auth0-idtoken-payload)
This ticket was to take payload information from Auth0's authentication check, send it to the backend, and either find a existing user with that payload.authId or create a user and place the given payload information on that user in the database. I learned two things about this process that I will highlight below.
1) There is a scope property that is optional, which you place in the Auth constructor through a passed in object. If that scope property contains certain values such as email or profile, it will ask the user for permission to share said values. For example, we wanted to get the user's name, profile picture, and email in order to place that data in our Postgres database. I added the appropriate scope values and that information became available on the payload.
2) It's pretty simple to get a user's gmail or github profile picture and use it in different parts of the app. From a user's perspective, I think this builds a sense of trust and relationship to see themselves on a website. 

## Weekly Reflection - Integrating components
During the beginning of the week, Daniel and I worked on making the backend more user specific so that queries required a userId and users would not be able to see data that did not pretain to them. We implemented this and change a few things on our schemas. Afterwards, we noticed how much that affected the frontend developers. Each query that they had created now required a userId and some of the queries required different parameters just to conform to the changes we had made. This was a good experience to run across during labs because going forward I will be more careful while working on backends to make sure that the frontend is in the loop with any changes. I think that more communication would have made this less of a challenge.

## Side notes
- I had two phone interviews this week. One with Savi Solutions and the other with Levvel.io. The Levvel interview was more of an HR behavioral interview that I think went really well. The next step in that process will be to set up a technical interview with two engineers at Levvel. The interview with Savi was more technical off the bat. We talked about Manaje and some of the challenges and solutions the team is facing. I mentioned that we will be implementing testing next week, so I need to keep my word on that. The next steps for Savi will be to finish a take home [challenge](https://github.com/savisolutions). 
