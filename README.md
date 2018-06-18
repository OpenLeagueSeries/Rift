# OLS Rift
### The View Layer of the OLS WebApp, written with the help of React and Redux.

---
### how to setup
1. git clone
2. npm install OR yarn
3. npm run start

---
### Technology used
##### React
ReactJS is a Javascript view library that uses JSX.  Its an Industry standard developed, supported and used by Facebook and an Open Source community.
##### Redux
Redux is a State container that acts as our datastore.  Its an Industry standard that is often paired with React and has a powerful set of development tools

---
### Git workflow
##### master
Master branch is auto deploy, heavily protected, PRs must be double approved.
##### dev
Development branch is the active branch.  Make feature branches off of dev and then pull them into dev.
##### feature branches
Current version is Mehler, so name all branches mehler/{featureName}  the feature name should be concise but not overlap too closely with any others.  Descriptiveness is a low priority.
Feature branches should preferably be less than 500 lines of code when compared to dev(with obvious exceptions of generated code and assets).  SPLIT UP YOUR WORK.
##### hotfix branches
name a hotfix branch - bug/{bugName} OR fix/{issueName} depending on if its an unintended code bug or accounting for something caused by an external dependency.

---
#### Core Routes
Main App - see tournament states below
Archive - link to past tournaments
Account Management - passwords, league account linking, smurf settings

---
#### Tournament States
No Tournament
Tournament Sign Ups
Finalized Draft List
Draft App
Pre-Season
Regular Season
Post Season
