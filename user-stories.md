Log in process

    Given that I have not created an account
            Then there will be a link/button to re-route to the /new-user account creation form

    Given that I'm a logged-out user and when I'm on the /login route,
            Then there will be a login form with an email and password field and a "Login" button to submit the form.

        When I try to fill out the form with an invalid email and password combination and press Enter or press the "Login" button,
            Then at the top of the form, I will see a red message "Invalid Login :( please try again."

        When I try to fill out the form with an email that doesn't exist in the system and press Enter or press the "Login" button,
            Then at the top of the form, I will see a red message "Invalid Login :( please try again."

        When I try to fill out the form with a valid email and password and press press Enter or press the "Login" button,
            Then I will be redirected to the homepage at the / route.
            Given that I am a logged-in user

        When I refresh the homepage at the / route,
        Then I will still be logged in

        Given that I am a logged-out user
        When I try to navigate to the homepage at the / route,
            Then I will be redirected to the /login route

Account creation process

    Given that I have not created an account and when I am on the /new-user route,
        Then there will be a create account form with an email, username, password, and a submit button for the form.

        When I try to create an account with a username that is already in use,
            Then at the top of the form, I will see a message appear that says "This username has already been used :( please try again!"

        When I try to create an account with an email that is already in use,
            Then at the top of the form, I will see a message appear that says "This email has already been used :( please try again!"

        When I have created an account with no errors,
            Then I will be redirected to the homepage at the / route and the account will have been created.
