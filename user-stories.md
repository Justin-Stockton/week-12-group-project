# User Stories

## Sign Up

- As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign\*up form.
  - When I'm on the `/signup` page:
    - I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    - I would like the website to log me in upon successful completion of the sign\*up form.
      - So that I can seamlessly access the site's functionality
- When I enter invalid data on the sign\*up form:
  - I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    - So that I can try again without needing to refill forms I entered valid data into.

## Log in

- As a registered and unauthorized user, I want to be able to log in to the website via a log\*in form.
  - When I'm on the `/login` page:
    - I would like to be able to enter my email and password on a clearly laid out form.
    - I would like the website to log me in upon successful completion of the log\*in form.
      - So that I can seamlessly access the site's functionality
- When I enter invalid data on the log\*in form:
  - I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    - So that I can try again without needing to refill forms I entered valid data into.

## Demo User

- As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  - When I'm on either the `/signup` or `/login` pages:
    - I can click on a Demo User button to log me in and allow me access as a normal user.
      - So that I can test the site's features and functionality without needing to stop and enter credentials.

## Log Out

- As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  - While on any page of the site:
    - I can log out of my account and be redirected to a page displaying recent questions.
      - So that I can easily log out to keep my information secure.

# Games

## Game Library

- As a logged in user, I want to be able to search all games by title, tags, genre in the game library so that I can look up games.
  - While on the /games route:
    - I can scroll a window of all games
      - So that I can easily view, look at, and find the games that I want to add to my game rack.
        - I can search all games for a specific game by title, tag, genre.
        - I can click a button to quickly add a game to my game rack.
      - While on the `/games/:gameId` route:
        - I want to be able to see details about the specific game.
        - I want to see reviews/comments about the specific game.
        - Button to go back to the main library.
        - Button to save our game to our game rack.

## Reviews/Comments

- Create a Review

  - As a logged in user, I want to be able to create a review of a game so I can voice opinion on the game.
    - While I'm on the `/games/:gameId/reviews` page:
      - I can write and submit a review for a game.
      - I need an add review button.
      - I need a cancel writing the review button.
      - I need a post the review button.

- Read a Review

  - As a logged in user, I want to be able to view reviews of a game so I can see what the community evaluates the game.
    - While I'm on the `/games/:gameId/reviews` page:
      - I can browse through all reviews of a game.

- Update a Review

  - As a logged in user, I want to be able to edit my own reviews on games.
    - While I'm on the `/reviews/:reviewId` page:
      - There is a edit button for me to click
      - I will be able to edit my previous review content.
      - I will have a button to post my updated content.
      - I will have button to cancel the edits that I am making.

- Delete a Review
  - As a logged in user, I want to be able to delete a review of a game I made so that I can hide my shame.
    - While I'm on the `/reviews/:reviewId` page:
      - I have button to delete my previous review.
      - There will be a confirmation "Are you sure that you want to delete this review?"
      - I have a button to cancel my review deletion

## Played Games / Currently Playing / Wanted Games

- Create a Games Rack

  - As a registered and authorized user, I can create a games rack so I can store games in the category I want.
    - While I'm on the `/gamesRack` page:
      - I will have a button to add games racks to my profile.

- Add to Games Rack (Update)

  - As a registered and authorized user, I can update a games rack so I update what is shown in my games rack.
    - While I'm on the `/gamesRack/:gamesRackId` page:
      - I will have a drop down to move a game to a desired games rack.

- Read my Games Racks

  - As a registered and authorized user, I can view a list of games in my games racks so I can easily see the games in my games racks.
    - While I'm on the `/gamesRack/:gamesRackId` page:
      - I have a list of the games in each games rack.

- Delete my Games Racks
  - As a registered and authorized user, I can view a list of games in my games racks so I can easily see the games in my games racks.
    - While I'm on the `/gamesRack/:gamesRackId` page:
      - I have button to delete a game from a games rack.
      - There will be a confirmation "Are you sure that you want to delete this game from your games rack?"
      - I have a button to cancel the removal of a game from my games rack.
