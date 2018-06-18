OLS student developer panel meeting minutes
6/12/2018

Chair: Zachary BD Chay-Dolan
Attendance: Hyun-Tae Jin, Shai Weinstein, Anthony Agnone
Late Arrivals (needed for Quorum): Jeremy Kato
Dead Arrivals: Jared Lin

10:30 - Not yet met a Quorum, beginning discussion, no conclusive votes.
10:31 - Anthony arrives
10:32 - Beginning introductions -

BD - I’m Zachary Chay-Dolan, the technical lead, I am an experienced React and backend web developer, I’m here to advise the project.  I’m also providing the main context for the project, as I made the prior version.

HT - My name’s Hyun-Tae, and I work with BD at a company called Checkmate as a web developer, and I recently learned under BD how to use React, mostly frontend for now, as well as using github to collaborate on a repo.  I learned the technology we’re going to use very recently, and I can give insight on what we’ll need in the beginning.

10:35 -Jeremy Joins, Quorum is achieved

AA - My name is Anthony Agnone, I have worked as a freelance web designer/web developer.  I have strong HTML/CSS(background in CSS frameworks such as Bootstrap/Foundation/MaterialCSS) skills, middeling javascript and some jquery.  I’ve used PHP in production and have played with node/webpack/react/laravel etc in no production.  I’m interested in a career in Web Design/Web Dev as soon as I’m confident in my abilities.

SW - My name is Shai Weinstein, I am a two-time CS drop out at PItt, I have no web development experience BUT I play league.  I am interested in learning web development and I have knowledge about the league and Pitt community to help make the most useful website.

JK - My name is Jeremy Kato.  I major in CS at Pitt and don’t have as much experience with JS or other web-frameworks but a lot in C#/Java.  I’m interested in learning how to make data services and other fun backend-ery, as well as helping design a site that people are interested in using.

Introduction to history of the project (BD) -
First OLS site was done in Python using Django, it was a bloated and disgustingly ugly piece of code maintained by one developer.  Eventually it got dropped due to changes in the Riot API which made a hackish solution to a recurring problem untenable and would’ve required a rewrite.

Site was abandoned for about a year and a half, and then restarted.  The new version was intended to be a student run project that would be open source and easily accessible.  It became too ambitious and no students became contributors.  Since then the project died in October 2017 and has been stagnant.  The version has been dubbed Kurt and it is intended to be reborn as version Mehler.  Mehler will be the codename for development, Kurt code will be completely scrapped and the project will be restarted using more current technology and development standards intended to promote contribution.

Open question concerning History -

What’re the version codenames for?  -
Presidents of LoL@Pitt, Kurt Torelli was the original group admin, John Mehler was the original club admin, release version will be dubbed Sandu for Gabriel Sandu and continuing on from there.

What did Riot change in the API? -
Recurring requests after a failed game code resulted in an overloaded API key as too many requests were made too quickly if a game wasn’t processed by Riot.  Some games would never be processed resulting in an infinite loop on the server.  Managing the workers for requests was not something that the lone developer was knowledgeable enough to do at the time.

Topics to cover-

Primary Goals
What is the Core of the project
Technologies
Comparison to alternatives, benefits of a custom solution?
Responsibilities for individuals
What’s the types of people we need to contribute
How do we support them in contributing
Deadline?
Looking forward as a Panel transitioning to a Board?


Why? (Comparisons to alternatives, benefits of a custom solution)

For the goals of those involved - Open source project that’s exciting and interesting in its challenges and offers teaching industry standard web technologies on a team.

For the goals of the product/end result -
Why not just use Battlefy? -
Battlefy is missing: draft application, comprehensive stat tracking, connecting tournaments together between splits, Post season and seasonal games must be separate on Battlefy, game scheduling isn’t done on Battlefy, Twitch clips could be part of custom solution, other extensibility features on possible on Battlefy, custom changes are possible on NOT Battlefy,
Why not just use Google Docs? -
Automatic stats, time consuming, lots of organization from the admins, not as trustworthy

Completed question ? - 3-0 unanimous

Who? (Responsibilities for individuals)

Developers:
    Work in a Git flow like team, taking on responsibilities for tasks on a volunteer basis.  
    Services are split into different repos according to a microservice architecture

Documenters/Technical Writers (onboarding for contributions):
    Standards for documentation for developers, but only required for CORE Elements.
    Most documentation will be handled through Pull Request comments and questions

    Documentation should be as much as possible in recordings/seminars and personal communication

Designers:
    CSS framework - very generic
    Initial design spec - very simple, assign style classes to every element, redo a style pass after development is complete
    Block ourselves until a design is complete - whole team works on design before any front end work is done.

Recruiters/PR:
    Down the line, intention is to support contributions to the project, and provide more working students to move the project forward in both growth and longevity.

Deployment:
    Eric B Niu hosts the teamspeak which is what pitt.lol route to, so we’ll have to set up some sort of git Hook to push master branch changes to his AWS EC2 server.

Complete question? - 3-0 unanimous





What? (Primary Goals and Core of the Project)

Home Page
Twitch Clip (Highlight)
Current Tournament
Season Schedule
Schedule games in the app
Game results
Link Twitch clip to game
Post Season Schedule
(Auto seeding or Admin seeding)
Stats
(Tracking features)
User Account System
User types
Admin
Start a tournament
Replace/Trade players
Add players to tournament list
Captain
Schedule games
Using Draft System
Create team
User
Sign up for tournament
Requires some talks about user account conflicts
Draft System
Admin controls (6-10 commands)
Captain controls (3-4 commands)

Complete Questions - 2-0- 1 abstain

When? (Deadline)


Labor Day - September 3rd - 3-0 unanimous

Weekend before - hackathon



Immediate conclusions -

Anthony, Shai, and Hyun-Tae will begin discussions and meeting and work concerning the design and front end for the core of the site.

Jeremy 💪, BD, and Jared will discuss backend solutions, technologies, and begin work on the server

Next week another meeting will be scheduled to reconvene with more details about technology, repo decisions, and more specific discussion about development processes.

Shai - Everyone here is my best friend

Anthony - I’m really excited <3

Hyun-Tae -  I don’t have you added. Whoa whoa whoa. Why is this logged?

Jeremy - This is where the fun begins

Jared - ZZZZZZZZZzzzzzz also I’m an alcoholic
