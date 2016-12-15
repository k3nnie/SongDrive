# SongDrive
[![license](https://img.shields.io/badge/license-MIT License-blue.svg?style=flat-square)](./LICENSE) <!--[![release](https://img.shields.io/badge/release-v0.0.1-blue.svg?style=flat-square)]()-->

A song management web application to store and synchronize songs and setlists, based on [Vue.js 2.1](vuejs.org/), [Firebase 3.4](firebase.google.com/) and [Foundation 6.2](http://foundation.zurb.com).

## Features
- Create, edit and delete songs
- Normal and fullscreen view for a song
- Filter songs and setlists
<!-- - Transpose song tuning-->
- Create, edit and delete setlists
- Rearrange songs in setlists with simple drag and drop
- PDF export for songs, setlists and songsheets

## Installation

1. Download this repository and download it to whatever location you want (local or remote)
2. Create an empty file called `config.js` in the `src` subdirectory
3. Now log in to your Firebase account and hit the "Create new project" button
4. Enter your new project and click "Add Firebase to your web app"
5. Now copy the following (and only the following) code from the code that is shown to your just created `config.js`:

    ```
    var config = {
        apiKey: "<your-api-key>",
        authDomain: "<your-auth-domain>",
        databaseURL: "<your-database-url>",
        storageBucket: "<your-storage-bucket>",
        messagingSenderId: "<your-messaging-sender-id>"
    }
    ```
    
6. Now just open your browser and call the url of the location where you downloaded the project files to, e.g. `www.example.com/songdrive/index.html`
7. You're ready to go and synchronize your song data live on every device accessing this url

## Licence
[MIT License](./LICENSE)
