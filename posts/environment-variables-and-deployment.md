---
title: "Environment Variables & Deployment"
author: "Leanne Smith"
category: "Security"
date: "2022-05-03"
bannerImage: "https://res.cloudinary.com/leanne251/image/upload/v1651589905/Blog/shazaf-zafar-xIgOKhPpY5M-unsplash_eagbey.jpg"
tags:
    - Node.JS
    - Javascript
    - Netlify
    - Heroku
    - Environment Variables
---


# Blog

**Environment Variables, Config Files & Deployment** 

02/05/2022

Just some quick fire notes to help structure passwords & deployment. 

![A diagram to show the flow of data](https://res.cloudinary.com/leanne251/image/upload/v1651589934/Blog/diagram-env-variables_urju2x.png "A diagram to show the flow of data")

**Why do we use environment variables?**
So we can securely store our passwords locally in development and these are not uploaded to github when we use version control to save our work. 

You can create a .env.local file so this file doesn’t get added to github. Alternatively, just add the file .env directly to your .gitignore file. 

**What about deployment?**

Remember - when we deploy our work to a host, they can’t see these environment variables. 
There will usually be a place to securely save your passwords in a config section of your host. 
Your host can then refer to these passwords, just like when you are developing locally and your computer refers to the .env file. 

**What do I need?**
Install**:** npm i dotenv
You can then import this into the root of your app:
`import dotenv  from "dotenv"` 
`dotenv.config()`
**OR**
add a command to your script: *node **-r dotenv/config** my/root/path.js)
**NOTE**: React provides this out-of-the-box, so you don’t need to add this BUT you do need to make sure your variables start with REACT_APP_*

**.env format**
You will usually have one .env file which holds all of your passwords. 
Example, Firebase serviceAccountKey ⇒ Sometimes you will create a variable (camelCase) that holds a JSON object (sometimes this doesn’t like whitespace so use cmd+k (Mac) to remove.

Example, Cloudinary ⇒ Sometimes you will just have a variable in CAPITAL_LETTERS=password.
No speech marks. 

**config file**
It is good practise to have one config file which creates variables or objects to hold your encrypted passwords. These can then be exported to where they are used. 
You might need to import something from the package you are using and follow the recommended format for your secure data which can usually be found in the docs. 

**How are they used?**
Sometimes your config variables will need to be imported to be used in other files. 
The code may specifically call upon these variables to make stuff happen! 
E.g connecting to Heroku or Firebase.
Other times, once your config has been declared, these variables might be global - with no need to save a variable & export them anywhere, essentially, once you are connected, you’re connected. 
E.g Cloudinary. 

**Deployment

Font End - Netlify**
Quite often deployment might not happen if you have imports that aren’t used, so clean up your code before you start. 
You may need to alter the settings. Make sure your build setting is pointing to the folder where your ‘src’ sits in github. 

You might also need to update the build command and specify where you want your application to be built. 

**Heroku**
Sometimes you just click the github link & everything's dandy! 
However, sometimes you need to use the Heroku CLI! 
AND... sometime you have a monorepo, where your back end is sitting with your front end. 

Top Tips for the latter! 
- Create your Heroku local branch at the top level - where your repo sits! 
- You can follow the commands on Heroku: git init ⇒ `heroku git:remote -a your-root-folder =>` then git add ., git commit -m “message” 
- Now, you need to push to a subtree, as you only want your backend folder to go to the branch. 
- Use this command: `git subtree push --prefix your-folder-name heroku master`, where all you replace if your-folder-name, with what it is! 
- This should get your folder deployed 🤞
- You can continue pushing to github for local changes you want to save and push to the subtree when you are ready to deploy. 

I think thats it on this subject. 
Comment below with thoughts / feedback and any hints or tips you have on this topic! 
Thanks for reading this far :) 

****