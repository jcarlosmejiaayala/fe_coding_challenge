# FE coding challenge

## Description of the problem and solution.
Basically, the app is in charge of getting and displaying followers according to a given user and, as long as they have more followers, they can be obtained, the button to submit the request of more related followers will be shown while the amount doesn't exceed the total of followers to get.

The solution for this challenge was not as complicated as i though at first time, for the challenge, an UI was created with a menu bar at top and two sides, one dedicated to display only user detail information and, the other concerning to the list of followers, this second one is divided into the list and the button to get more followers, it can be hidden when the total of followers is reached. to achieve this UI and given the complexity, material-ui was the best desicion so it gives a good look to the app.

## Reasoning behind your technical choices, including architectural trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project.

About architecture, it was taken to accomplish the component style structure where there are components that handle the state of the application and, dummy components that their only concern is to display data passed through them, to deal with state stuff, react provides the context API so no third-party solutions are needed.

Just belowe here, there is a demonstration how the architecture looks in terms of folder structuring:

-- src/  
--- Components/ <- where the reusable components live
--- Routes/ <- Component that match with a specific url (react-router)
--- Store <-- state management
--- index.js <-- app entrypoint
--- index.html 

## Link to other code you're particularly proud of.

I would like to share links to repos i proud of, but i have not access to them unfortunately

## Link to your resume or public profile.
https://www.linkedin.com/in/juan-carlos-mejia-ayala-28a613b5/

## Link to the hosted application.
https://still-lake-25646.herokuapp.com/

*Notes

If you're interested in running the project locally, i advise to install docker and the run it by executing `docker-compose up`, otherwise `yarn dev` can be suitable instead.
