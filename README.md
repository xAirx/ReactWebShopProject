# WebShop Project


# Architecture, patterns and technologies (Roughly)

    - React Basics
    
    - Redux (persisting data + storage) + State Normalization  

    - React Router

    - React Hooks

    - Context API (I18N solution)

    - React Suspense + React Lazy

    - Firebase

    - Stripe API

    - GraphQL

    - Apollo
    
    - Testing with Jest, Enzyme and Snapshot testing
    
    - Storybook, - Snapshot Testing.
    
    - SCSS + Styled Components with theming and global styles. + styled theming (light and dark theme aswell)
        
    - LogRocket and Sentry on production server
    
    - Password protected Dev server with terraform and kong.
    
    - CI/CD setup with Github actions. 
    
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

# Hosting:

## Devops Setup

                Husky prehooks, github actions ->

                ### Development and Production server push based on ENV variables.
                
                
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;                

#### The devops setup is explained here:

            https://github.com/xAirx/CI-CD-Playground
	    
## Devserver: (Requires LOGIN and password).

                https://webshopproject-development.herokuapp.com/
		
		Command:  heroku run terraform output private_access_password —app webshopproject-development


#### Devbranch basic auth (password projected dev branch.

                       Development branch includes a Basic auth setup that locks it down behind username and password.
                       
		       This is done via terraform and kong in combination with a buildpack created for CRA and heroku.
                       

#### Devbranch Sentry Trigger component

                      Development branch also includes functionality to conditionally render a test button component based on an env variable set by the heroku 		      server. on local dotENV is used - the idea here is that I can trigger sentry from dev.
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Production:

                https://webshopproject-production.herokuapp.com/


#### Sentry and logrocket on production

            A sentry and logrocket setup is setup on production and runs live.
            


&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;


# DEVLOG


      Refactored Sentry component away from app.js and tested it works.
      
      Installed styled components.

    
      
      
