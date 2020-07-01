# Ecommerce Project

# Introduction to project and functionality

      This is an  e-commerce application similar to Shopify using React, Redux, React Hooks, React Router, GraphQL, Context API,  Firebase, Redux-Saga, Stripe + more.

      This is going to be a full stack app (MERN stack), using Firebase and Heroku hosting

       Deployment is on HEROKU.

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

## Devserver: (Requires LOGIN and password).

                https://webshopproject-development.herokuapp.com/


                  ### Devbranch basic auth (password projected dev branch.

                      Development branch includes a Basic auth setup that locks it down behind username and password.
                        This is done via terraform and kong in combination with a builpack created for CRA and heroku.
                              https://medium.com/@nghnam/kong-configuration-management-with-terraform-52f47dee7c8



                    ### Devbranch Sentry Trigger component

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


                ### Sentry and logrocket on production

            A sentry and logrocket setup is setup on production and runs live.

                ### The devops setup is explained here:

            https://github.com/xAirx/CI-CD-Playground




&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

# Architecture (Roughly)

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

    - GraphQL

    - Apollo

    - PWAs

    - React Performance

    - React Design Patterns

    - Testing with Jest, Enzyme and Snapshot testing

    - React Best Practices

    - Persistance + Session Storage

    - State Normalization
    
    - Storybook, - Snapshot Testing.
    
    - Styled Components with theming and global styles.
    
    - Type Management with Typescript.
    
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
# DEVLOG

      Added Storybook and Styled Components + proptypes + Typescript

      Added Storybook, addons knobs, actions, and addon-info, actions, viewport addon, storysource, themes.

      Added Styled Components and going to move on to adding theming with inclusion of storybook.

      Added Typescript typescript is currently used for defining consts in our shared folder containing our "global styles" for our styled components, styleguide.

      Added Types for styledcomponents @types/styled-components

      Refactored Sentry component away from app.js and tested it works.

      Added TS for ESLINT and Configs.

      Added Snapshot testing for Storybook and npmtest, for uniformity. between components and storybook.
