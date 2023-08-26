# node-base-env
Basic Node Staring Boilerplate

Start a new node server in the backend folder.

Serve the build of the frontend (currently in vue)

### install

Clone the repository

Get into the "backend" folder

run `npm install`

then `node app.js`

now the server is running and you can make requests to it.
That's an example of a request to the /upload endpoint:

`
fetch('http://localhost:3000/upload', {
    method: 'POST',
    body: formData,
    })
    .then(response => response.json())
    .then(data => {
        this.transcriptionData = data;
        this.isLoading = false;
    })
    .catch(error => {
        console.error(error);
        this.isLoading = false;
    });
`
