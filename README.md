A simple to-do app created with React. It's accessible to screenreaders (screenreader users are updated as each task is added or deleted). Access it here: [React to-do app](https://selenahunter.github.io/react-to-do-app/).

### Why a To-do App?
Accessibility is important, and single-page apps have unique accessibility challenges, i.e. DOM changes aren't always properly announced to screenreader users. I wanted a proof-of-concept, simple app that would properly update screenreader users, and a to-do app fit the bill.

### Tech used
Built with React through create-react-app.

### How to Use
Simply type whatever you want to add into the input field. The enter key or clicking the submit button will add it to the list. The delete buttons can be accessed via tabbing or clicking. Screenreaders will properly announce the names of the tasks when deleted or selected. After submitting a task the input field is automatically focused.
