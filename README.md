# Ecommerce  Project

  
 # ///////GIFS ////// 
  
 # Introduction to project and functionality 
 

	  This is an  e-commerce application similar to Shopify using React, Redux, React Hooks, React Router, GraphQL, Context API,  Firebase, Redux-Saga, Stripe + more. 

	  This is going to be a full stack app (MERN stack), using Firebase and Heroku hosting

	   Deployment is on *****.........
	   
	   
   
   
   ## Simple Devops Setup 
                                       
    Husky prehooks, github actions ->
    
    ### Development and Production server push based on ENV variables.
    
    
	    GithubActions.Yaml file creates ENV's from github refs, which sets ENVIRONMENT, and branch is also set this way.

	    This decides if we are pushing to dev server or production server on heroku.

    
    
    ### Devbranch basic auth
    
	    Development branch includes a Basic auth setup that locks it down behind username and password.
		This is done via terraform and kong in combination with a builpack created for CRA and heroku.
			https://medium.com/@nghnam/kong-configuration-management-with-terraform-52f47dee7c8



    ### Devbranch Sentry Trigger component

	    Development branch also includes functionality to conditionally render a test button component based on an env variable set by the heroku server. on local dotENV is used - the idea here is that I can trigger sentry from dev.



    ### Sentry and logrocket on production
   
   	 A sentry and logrocket setup is setup on production and runs live.
				      
				      
    The devops setup is explained here:
    
   	 https://github.com/xAirx/CI-CD-Playground

   
   
 ## Architecture (Roughly)
 
	- React Basics

	- React Router

	- Redux

	- Redux Saga

	- Asynchronous Redux

	- React Hooks

	- Context API

	- React Suspense + React Lazy

	- Firebase

	- Stripe API

	- Styled-Components

	- GraphQL

	- Apollo

	- PWAs

	- React Performance

	- React Design Patterns

	- Testing with Jest, Enzyme and Snapshot testing

	- React Best Practices

	- Persistance + Session Storage

	- State Normalization




# DEVLOG 
  






















