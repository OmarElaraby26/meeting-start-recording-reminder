# start-recording-reminder
This is a simple script working as an alert to remind you to start recording your meeting by poping up a message on your meeting tab with an option to stop the alert or snoozing for a particular number of mintues.

## STEP #1: Install tampermonkey extension on your browser
Go to [termpmonkey website](https://www.tampermonkey.net/index.php?browser=chrome) where you will find links of the extension for your browser or install it directly from the following links
[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), 
[firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/),
[Microsoft edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd),
[Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089),
[Opera next](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

## STEP #2: Enable tampermonkey extension
click on tampermonkey extension icon on your browser and from the menu that will appear, enable the extension if it is not.

## STEP #3: Create new script
click on tampermonkey extension icon and from the menu that will appear choose `Create a new script`

OR

click tampermonkey extension icon and from the menu that will appear and choose `dashboard` and from that dashboard create new script

## STEP #4: Add our script
1. Copy and paste the following script
```javascript
// ==UserScript==
// @name         google meet start recording reminder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  google meet start recording reminder
// @author       https://www.linkedin.com/in/omar-elaraby/
// @icon         https://img.icons8.com/color/512/google-meet--v1.png
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const minutes = 2;

    let id;
    id = setInterval(() => {
        if (confirm(`*****Remember to start recording*****\nChoose 'OK' to stop this reminder.\nChoose 'Cancel' to remind you again after ${minutes} minutes.`)) clearInterval(id);
    }, minutes * 60 * 1000);
})();
```
2. In the script add the URLs of the meetings you would like to be reminded in. And make sure that the URLs meet the following format:  `https://meet.google.com/abc-defg-hij*` (starting with `https://meet.google.com/` following by the `path` following by `*`). See the image for more clarification.

![Screenshot from 2023-01-31 08-53-37](https://user-images.githubusercontent.com/47684373/215689037-cf71cf31-5a69-4022-84b7-ea3de7af46b8.png)

3. Save the script
