---
title: "Labs Week 4 - User Testing and UX Planning"
description: Lambda School Labs Week 4 Blog Post
date: '2019-04-12'
image: manaje-initial.png
---

## Individual accomplishments this Sprint
This week I spent most of my time on the Documents tab as seen in the image above. It doesn't look like much, but there is a lot going on. The queries to display the documents and folders was quite simple, but after that it gets more complex. 

* Each document and folder can be viewed in a modal. On each modal there is data that needs to be queried, including document comments and in folders the user needs to see the documents associated to that folder. 
* Each modal also contains mutations that can edit, delete, and create. When a folder is deleted, that needs to remove the documents so that they are not lost. All of these things took a lot of testing, and I really wish that I was better at testing because some up-front testing (TDD) here could have saved a day in my opinion, but to learn how to test for those things would have taken a day or two, so that is now on my list of things to learn. 
* Another thing I worked on this week was the drag and drop feature. A user can drag a document and drop it into a folder--this triggers a mutation that adds the document to the folder in the database. Prisma, mostly, takes care of that database interaction. 
* Finally, as a team we spent half of Thursday figuring out a better layout because on Tuesday we brought in a user to do some user testing, and we learned that we needed to make our app easier to navigate. Hence, the sidebar that shows teams and activity. During that layout meeting, we decided to make the Message Board look like comments on Youtube, the Document Tab to look like Dropbox, and the Todos tab to look similar to Trello boards. This is all in our [wireframe](https://balsamiq.cloud/sggit5d/podqq52) that we put together. 

## Pick a ticket and provide analysis of the work you did
### [Ticket](https://trello.com/c/XAiTvSiz/119-add-edit-delete-folders-add-document-to-folders) - Add, Edit, Delete Folders, Drag-n-Drop
This ticket encompassed a lot of work, and if I were to rewrite it, I would make it two or three tickets. I want to focus on one aspect of it for an analysis, which is the drag and drop feature. The idea seems easy enough, but the process is quite difficult. Luckily other developers have created libraries to do this specific task. I ended up implementing the React-DnD library. Here are two things I learned from that experience. 
1) Make sure to spend time picking the right tool for the job. I started by asking for suggestions on what library I should use because I had never done this before. I was told DropZone is easy. I learned that DropZone, at least from my one hour of research, wouldn't work for our use case. The DropZone library is for bringing a file from outside the browser and dropping it. It's not for manipulating one DOM element into another. I also tried basic HTML properties (draggable, onDrop, onDrag, onDragOver), but I found out after some testing that it doesn't seem to work on mobile, which is a big deal for me because I want others to see this portfolio piece and most people look at portfolios on their phones. After going through a React-DnD tutorial that Nick found, implementation of the drag and drop went smooth, so the tool matters greatly. 
2) Use little tutorials and try them out on codesandbox.io or codepen to test and learn new tools before implementation. With Auth0, I went straight for implementing different ideas in the code base, and this turned into unexpected issues with the code base that didn't relate to Auth0. With this ticket, I was up and running in a few hours because I figured out the library quickly in an environment that was bare so that I could really focus on learning the tool.  

## Weekly Reflection - UI/UX
This week we were behind with regards to functionality, so much of the week was spent working on getting the app to work properly, and we didn't focus to much time on the look and experience. However, I think we are headed in the right direction. We had a user test with Daniel's friend this week, and we learned how to improve it from that. We also were given feedback from a UX Instructor, so that was appreciated. The plan for next week is to focus almost entirely on the UI/UX of the app. We want it to look as good as it can because the app itself is a great project from a backend perspective, but now it's time to polish it up. 


## Side notes
- This week I was able to chat with an senior engineer from Pluralsight--a company that I'm very found of. He gave me advise on looking for an employer that is more product focused than project focused. He had experiences as a consultant that made him dislike billable hour type work. Furthermore, he encouraged me to always reach out to engineers at the companies I'm applying to because they will describe the company differently than the human resource personnel. I was grateful he took the time to mentor me.  