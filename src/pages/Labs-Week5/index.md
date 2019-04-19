---
title: "Labs Week 5 - Final Polish"
description: Lambda School Labs Week 5 Blog Post
date: '2019-04-19'
image: manaje.png
---

## Individual accomplishments this Sprint
The team worked very hard this week. Much was accomplished. As you can see from the image, we polished the app! I spent most of my time working on styling. I styled the Messages and Documents tabs and all associated components. I took inspiration from Youtube comments and Dropbox. Below I'll highlight a few specific things I did.

* The Messages tab is built with a mixture of divs using the withStyle Material UI component and Material UI icons and components. I had never used the Material UI library before, so there was a learning curve during the beginning of the week. But after a little bit of pain, I can honestly say that Material UI is an incredible open source tool. And the documentation is superb. 
* The Documents tab also uses Material UI for a Table, icons, menus, etc. Once I decided to mimic Dropbox, the ideation part of the process was over and styling became much easier.
* I also worked on getting the app mobile responsive, which was more difficult than I thought it would be. The problem was that each team member was styling, each of their sections, with different tools. But it turned out looking great. I'll provide more detail below.

## Pick a ticket and provide analysis of the work you did
### [Ticket](https://trello.com/c/xLIhArlV/146-responsiveness) - Mobile Responsiveness
Each part of this ticket took looking through several files and learning how team members were styling. Some used styled components, others css files, and a few used Material UI withStyles, which was the preferred way of the team, but most difficult because it was new to almost everyone. It was a valuable experience to look through other's code to figure out how to alter styling. In the end, I used all the tools team members were using to keep people happy and to save time. Here are two other things I learned from this ticket.
1) Material UI has great content. If you check out the docs, you can learn solid principles of design like spacing, color, font, and animation. Each one of these principles if used correctly can enhance the UX. We met with a UX instructor each week during labs, and the principles that she taught us were crucial to improving our site.
2) Mobile responsiveness needs to brought up and thought about as soon as a team starts styling. Percentage based styling can be great or it can be terrible for responsiveness, and the same goes for fixed based styling. If mobile, and tablet, are thought about in the beginning, many issues can be resolved sooner.    

## Weekly Reflection - UI/UX
The 90-90 rule is alive and well. This week consisted of many late nights of work for me. A major bug was discovered in the Documents tab yesterday. When a user dropped a file on a folder, sometimes it would place that file in the wrong folder. Because of this, I decided to completely redo my implementation of the drag-n-drop code. I went through another React-DnD tutorial and was able to figure out the issue. Another surprisingly difficult task was deciding on a color palette as a team. Because color is mostly subjective, we found it hard to make a unanimous decision, but we eventually landed on black, white, and baby blue. 


## Side notes
- This week I received two code challenges from Yaro and Podium. I'm excited about both, especially Yaro because it is to create a TodoList! I plan on sending in Manaje after next week to complete that challenge. Podium is another great opportunity--it is top 10 in my list of dream companies to work for.