# Example Project


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

## Devserver: (Requires LOGIN and password).

                https://webshopproject-development.herokuapp.com/


#### Devbranch basic auth (password projected dev branch.

                      Development branch includes a Basic auth setup that locks it down behind username and password.
                        This is done via terraform and kong in combination with a builpack created for CRA and heroku.
                              https://medium.com/@nghnam/kong-configuration-management-with-terraform-52f47dee7c8



#### Devbranch Sentry Trigger component

                      Development branch also includes functionality to conditionally render a test button component based on an env variable set by the heroku server. on local dotENV is used - the idea here is that I can trigger sentry from dev.
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
            

#### The devops setup is explained here:

            https://github.com/xAirx/CI-CD-Playground



&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

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


# Techonologies and Patterns to be explored:


				#### The slot pattern

				####  Higher order components
			
				#### RenderProps vs React Hooks 

				#### Render Props vs Hooks vs HOC-------- 

				#### Context API vs Redux----------
                        
                        
				--------------Theming with Styled Components context API + Hooks + Dark light  mode---------------

				#### What is the Theme Provider ?

				#### What is Styled theming  - done
                              
                                ##### Light and Darkmode functionalty with context API & Hooks.
                           

				----------------Storybook -----------------

				#### Storybook Snapshot Testing

				#### Storybook Addons

				#### Add ThemeProvider and Connect with storybook.

				#### Storybook Theme Playground
                        
                        
                        
                        --------------- Shoppingcart with react DND --------



&nbsp;
&nbsp;


# DEVLOG

      Added Storybook and Styled Components + proptypes + Typescript

      Added Storybook, addons knobs, actions, and addon-info, actions, viewport addon, storysource, themes.

      Added Styled Components and going to move on to adding theming with inclusion of storybook.

      Refactored Sentry component away from app.js and tested it works.

      Added Snapshot testing for Storybook and npmtest, for uniformity. between components and storybook.
      
      Added custom context provider for I18N functionality.
      
      
