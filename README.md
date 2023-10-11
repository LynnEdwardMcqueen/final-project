# Final Project - A Horsebarn Application

## How to set up
After pulling the code from github, from the root directory run
- pipenv install
- npm install --prefix client

After these 2 commands are completed
- cd server and run python app.py.
- open another shell and from the root directory run npm --prefix start.
---
## Overview
This application is a simple view into the world of horse barns with boarded horses.  Each horse in the barn has an owner/user, and in some cases multiple owner/users (they can be quite expensive).  The application stores owner contact information and horse feeding and vet information.  To simplify your experience, a populated database has been included.  In the existing database, there are 4 users with the following usernames
- lynnmcqueen
- tombrady
- ladygaga
- Admin

All users have a password of 12345.

There are 5 horse in the database.  By owner, they are

ladygaga
- Little Joe

tombrady
- Stella
- Joker

lynnmcqueen
- pistol

tombrady & lynnmcqueen (joint ownership)
- deak
---
## User Modes - User and Admin
There are 2 user modes in the application, user and admin.  The user named "Admin" is the only one that operates in admin mode.

The user modes have 6 functions available
- Add Horse
- Add Joint Ownership
- Delete Horse
- Edit Horse
- View Horse
- Logout

The admin modes have 4 functions available
- Morning Summary
- Evening Summary
- View Horse
- Logout

### Add Horse
The Add Horse is straight forward.  There are 3 submission forms.  The first is general information about the horse.  The next 2 are feeding instructions for the morning and evening feedings.  The feeding is done by "flakes" where there are roughly 13 flakes per small bale.  The feeding is changed as the activity level of the horse changes, the seasons change (e.g., in winter the nutritional requirements generally go up as the horse expends more energy to warm itself), and the age of the horse changes.  This is not available in admin mode.

### Add Joint Ownership
This feature displays all the horses in the barn that do not belong to the current user.  They are "candidates" for joint ownership.  If a joint ownership horse is clicked, the current user becomes a co-owner of the horse.  This is not available in admin mode.

###  Delete Horse
This feature allows the user to remove a horse from the barn roster.  The only exception to this is when a horse has multiple owners.  In the current database, if lynnmcqueen deletes deak, deak will remain in the system but only under the usage/ownership of tombrady.  This is not available in admin mode.

### Edit Horse
This feature allows the user to alter the information entered in the Add Horse function.  The existing values are preloaded into the forms. This is not available in admin mode.

### View horse
This feature allows the user to see the general horse details and morning/evening feeding details of the horses owned by that user.  In the admin mode, all the horses in the barn are displayed.  In the details, the owner contact information is displayed.  For horses with multiple owners/users, the contact information for all of them is displayed.

### Morning Summary
This summarizes the amount of feed needed in the morning for the entire population of horses.  This is not available in the user mode.

### Evening Summary
This summarizes the amount of feed needed in the evening for the entire population of horses.  This is not available in the user mode.

### logout
User exits the application and the application returns to the login page.

