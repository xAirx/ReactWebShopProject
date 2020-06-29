# Ecommerce  Project

  
 # ///////GIFS ////// 
 
 
  
 # Introduction to project and functionality 
 

	  This is an  e-commerce application similar to Shopify using React, Redux, React Hooks, React Router, GraphQL, Context API,  Firebase, Redux-Saga, Stripe + more. 

	  This is going to be a full stack app (MERN stack), using Firebase and Heroku hosting

	   Deployment is on HEROKU.
	   
	  
   
   ## Devops Setup 
                                       
    Husky prehooks, github actions ->
    
    ### Development and Production server push based on ENV variables.
    
    
	    GithubActions.Yaml file creates ENV's from github refs, which sets ENVIRONMENT, and branch is also set this way.

	    This decides if we are pushing to dev server or production server on heroku.

    
    
    ### Devbranch basic auth (password projected dev branch.
    
	    Development branch includes a Basic auth setup that locks it down behind username and password.
		This is done via terraform and kong in combination with a builpack created for CRA and heroku.
			https://medium.com/@nghnam/kong-configuration-management-with-terraform-52f47dee7c8
			
      				
				##### When we want the password to login with we write: 

							heroku run terraform output private_access_password —app ****ProjectNameOnHeroku*****


				###### Preventing password being echoed in github actions yaml when building…

							output "private_access_password" {
							  value = "${random_id.private_access_password.b64_url}"
							  sensitive = true
							}




				##### Access page if it says you are not authorized


							https://username:PASSWORD@webshopproject-development.herokuapp.com/


				
				##### Errorhandling related to KONG 


					remote: Error: Error applying plan:        

					remote: 
					remote: 1 error(s) occurred:        
					remote: 
					remote: * kong_plugin.react_basic_auth: 1 error(s) occurred:        
					remote: 
					remote: * kong_plugin.react_basic_auth: failed to create kong plugin: &{basic-auth   6272884b-a3db-4d23-a569-95947e9db67e  map[hide_credentials:true]} error: could not create plugin, err: {"name":"already exists with value 'basic-auth'"}   


					DO: 

						Purge postgres DB (remove) from heroku

						heroku run terraform refresh <- fixes state issues

						Then deploy again.




    ### Devbranch Sentry Trigger component

	    Development branch also includes functionality to conditionally render a test button component based on an env variable set by the heroku server. on local dotENV is used - the idea here is that I can trigger sentry from dev.



    ### Sentry and logrocket on production
   
   	 A sentry and logrocket setup is setup on production and runs live.
				      
				      
    ### The devops setup is explained here:
    
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
  






















