# "GB" Guestbook - Node.js project
A Node.js guestbook application, that allows all visitors of the website to leave a public comment without any sort of user registration.

## Description
This is a guestbook application created in March 2023. 

It was made using and utilizing JavaScript, JSON, Node.js, [Express](https://expressjs.com/), and a bit of EJS, HTML and CSS alongisde the [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) and [Pure.css](https://purecss.io/) libraries (for styling and layout purposes). 

You can find this project's site by clicking [here](https://luminietos.github.io/GB/) (GitHub) or [here](https://gb-lumi-ykfe.onrender.com/) (Render).

## Step-by-step guide - *"How do I actually use this site?"*
Once you've navigated to the site, you'll find yourself on the main landing page - 'Home'. From there— and, indeed, from any page— you can navigate to any of the other three pages (guestbook, new entry, ajax) in the navigation bar.

The 'Guestbook' page is the page that holds all the guestbook entries left by previous users. It holds a table with the name, country, and message of the user's message, as well as the date of the new message's original entry. 

(Note: the the original dummy data's dates are formatted differently from the entries that have been created from my entry form and pushed to the JSON file holding the guestbook data. I tried changing the old dates to match my new, arguably more clear formatting, but when I did that the new dates showed up as inherently invalid, so they remain unchanged.)  

The 'New Entry' page, as the name suggests, is the home of an entry form. This form (titled "New Guestbook Entry") asks the user to input a name, country, and message for the guestbook. The form will not be submitted, if one of these three fields is empty. Once fields are filled and the submit button is pressed, the user data is pushed to the guestbook user entries' JSON file, which in turn is linked to the aforementioned table that displays all user entries. The user, upon submitting the form, is automatically sent to the Guestbook page, where they can see their own entry as a new row in the table of past users' guestbook messages.

The 'Ajax' page displays a similar form, with the only difference being that rather than the submit button posting the form, it runs a JS code that collects the user input data and sends it to the backend as an AJAX-call and shows all the messages as a response to the page under the form itself. If there's an error, the form displays the text 'An error occured'. 

## Purpose
This is one of the three projects I created for my University's Full Stack course. The purpose of creating this guestbook was to better learn and understand things like creating web servers, routing, and Node.js development. 

## Status
The development of this project is complete for the foreseeable future.

## License
[MIT](https://choosealicense.com/licenses/mit/)
