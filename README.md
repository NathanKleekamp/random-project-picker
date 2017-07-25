# Random Project Picker

Takes a web-published Google Spreadsheet and randomly chooses a project from the list. The Google Spreadsheet should have the following format:

| Project Name | Project URL | Project Presentation Link |
|--------------|-------------|---------------------------|
| Awesome Project | https://name-random.herokuapp.com | https://drive.google.com |

In `src/constants.js` you can specify the name of the key you want to use for `localStorage`. You must provide the link to the web-published Google Spreadsheet in that file. The link to the Google Spreadsheet should look something like:

```html
https://spreadsheets.google.com/feeds/list/{{your spreadsheet id}}/od6/public/values?alt=json
```

To randomly select a project, click "Choose Random Project". To delay a selected project, click "Delay Project". If a group volunteers, you can click on a project name from the "Remaining Projects" list.

**Note: Always select "Delay Project" before selecting another group or clicking the "Choose Random Project" if you do not want to permanently remove the project from the list.**


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
