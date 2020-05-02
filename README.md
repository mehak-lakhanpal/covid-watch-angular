# Covid Watch App

This app shows live covid-19 data of Indian states and its districts and also user can see precautions and news as well added by admin.

### Assumptions

1.	User is redirect into login page in both cases if he is general user or admin. In case of general user, he can enter any random credentials and land into dashboard screen. If he is an admin, he have to enter correct admin credentials to login as admin other he will be treated as general user.
2.	On dashboard default screen, states details will shown and when user click on some state name, he will route to district details.
3.	When there is no news i.e news list is empty.” Sorry! No news” is shown on news list page.
4.	If user login as admin, only in this case logout button is shown, as general user can’t login or logout as well.
5.	If user without login, on login screen tries to access dashboard or other screens, in this case module will not loaded .

### Functionality

For user
1.	When user is logged in as user, user will land on dashboard screen which contains state details.
2.	When user clicks on state name, he will route to district details of particular state.
3.	User can see news upon clicking on news tab placed in header. User can see news list entered by admin. In case no news proper message will be shown.
4.	User can check precautions by clicking on precautions tab.
5.	When user click on random link , if he logs in , by clicking on Take me Home button, he will navigated to dashboard otherwise on login screen.
For Admin
1.	When user login as admin, firstly its credentials is validated, if credentials is correct, he will be treated as admin otherwise as general user.
2.	Admin can see dashboard, precautions screen as general user does.
3.	When admin clicks on News tab, a tab is shown on news screen which contains News List and Add News. News List is the default screen on news. On news list , admin can see news which is entered by him. And on add News page, he can add news, by fulfilling all the validations. Added news will be shown on news list screen , Upon refresh list will get empty because I’m using in-memory-web api for this. So this does’nt contain any storage.
4.	When user click on random link , if he logs in , by clicking on Take me Home button, he will navigated to dashboard otherwise on login screen.
5.	Admin can see logout button, by clicking on logout , he will get logged out from the application.

## Admin Credentials

```python
Username – admin
Password - admin
```