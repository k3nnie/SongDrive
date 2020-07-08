(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{347:function(e,t,s){"use strict";s.r(t);var a=s(40),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[e._v("#")]),e._v(" Guide")]),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("SongDrive is a tool for musicians, that perform songs on a regular basis. It was created to provide a self-maintainable song database with a clean presentation of songs for different use cases, i.e.:")]),e._v(" "),s("ul",[s("li",[e._v("quick search for a song to play spontaneously")]),e._v(" "),s("li",[e._v("transpose a song and export the song as PDF")]),e._v(" "),s("li",[e._v("create setlists with minimal effort based on song tuning and tags")]),e._v(" "),s("li",[e._v("navigate through the songs of a setlist for the artist as well as for the audience")])]),e._v(" "),s("h3",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),s("p",[e._v("SongDrive ships with a lot of features supporting artists in preparation of or during a gig:")]),e._v(" "),s("ul",[s("li",[e._v("create, edit and delete songs")]),e._v(" "),s("li",[e._v("viewport optimized fullscreen view for a single song")]),e._v(" "),s("li",[e._v("switch song languages")]),e._v(" "),s("li",[e._v("filter lists of songs and setlists on typing and by tags or key")]),e._v(" "),s("li",[e._v("transpose song key and save key per setlist")]),e._v(" "),s("li",[e._v("create, edit and delete setlists")]),e._v(" "),s("li",[e._v("rearrange songs in setlists with drag and drop")]),e._v(" "),s("li",[e._v("viewport optimized presentation view for setlists")]),e._v(" "),s("li",[e._v("PDF export for songs, setlists and songsheets")]),e._v(" "),s("li",[e._v("plain text export for songs, setlists and songsheets")]),e._v(" "),s("li",[e._v("setlist export in slack and markdown formatting")]),e._v(" "),s("li",[e._v("hotkeys, shortcuts support")]),e._v(" "),s("li",[e._v("UI multi language support")]),e._v(" "),s("li",[e._v("maintain Youtube links to directly listen to the songs")])]),e._v(" "),s("h3",{attrs:{id:"todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" Todo")]),e._v(" "),s("p",[e._v("SongDrive is still a work in progress. There are some things that it currently does not support but are planned:")]),e._v(" "),s("ul",[s("li",[e._v("light mode "),s("Badge",{attrs:{text:"todo",type:"warn"}})],1),e._v(" "),s("li",[e._v("offline version (pwa, service worker) "),s("Badge",{attrs:{text:"todo",type:"warn"}})],1),e._v(" "),s("li",[e._v("present note slides in setlist presentations "),s("Badge",{attrs:{text:"todo",type:"warn"}})],1),e._v(" "),s("li",[e._v("tag based song suggestions "),s("Badge",{attrs:{text:"todo",type:"warn"}})],1)]),e._v(" "),s("h3",{attrs:{id:"contributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributions"}},[e._v("#")]),e._v(" Contributions")]),e._v(" "),s("p",[e._v("Feedback and contributions are very welcome! You can help by reporting bugs, suggesting improvements or directly contribute to the code base or the documentation. You'll find a detailed explanation in the "),s("a",{attrs:{href:"https://github.com/devmount/SongDrive/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("contribution guidelines on GitHub"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Get all files")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/devmount/SongDrive\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Install all dependencies using "),s("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" SongDrive\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Create an empty file called "),s("code",[e._v("config.js")]),e._v(" in "),s("code",[e._v("SongDrive/src")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" src/config.js\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Log in to your "),s("a",{attrs:{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firebase account"),s("OutboundLink")],1),e._v(', hit the "Add a project" button and set up a project name and a server location')])]),e._v(" "),s("li",[s("p",[e._v('Now you can add an app by clicking the "Web" button, choose a nickname and click "Next"')])]),e._v(" "),s("li",[s("p",[e._v("Copy the firebase configuration object from the code that is shown to your just created "),s("code",[e._v("config.js")]),e._v(" in the following format:")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  apiKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your-api-key>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  authDomain"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your-auth-domain>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  databaseURL"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your-database-url>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  projectId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your-project-id>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  storageBucket"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your-storage-bucket>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  messagingSenderId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your-messaging-sender-id>"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Now your app is ready to be launched. Either start the development server with hot reload at "),s("code",[e._v("localhost:8080")]),e._v(" ...")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" serve\n")])])])]),e._v(" "),s("li",[s("p",[e._v("... or create an optimized production build with minification. All build files can be found in the "),s("code",[e._v("dist")]),e._v(" directory.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" build\n")])])])])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("HINT")]),e._v(" "),s("p",[e._v("The setup process is still in development. An additional step with the possibility to add test data will be added in a future release.")])]),e._v(" "),s("h2",{attrs:{id:"user-roles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-roles"}},[e._v("#")]),e._v(" User roles")]),e._v(" "),s("p",[e._v("SongDrive has a user role and rights administraion. The following roles are implemented:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("A")]),e._v("dministrator")]),e._v(" "),s("li",[s("strong",[e._v("E")]),e._v("ditor")]),e._v(" "),s("li",[s("strong",[e._v("P")]),e._v("erformer")]),e._v(" "),s("li",[s("strong",[e._v("R")]),e._v("eader")])]),e._v(" "),s("p",[e._v("These roles have the following privileges:")]),e._v(" "),s("ul",[s("li",[s("strong",[s("code",[e._v("R P E A")])])]),e._v(" "),s("li",[s("code",[e._v("X X X X")]),e._v(" see dashboard, song list and setlist list")]),e._v(" "),s("li",[s("code",[e._v("X X X X")]),e._v(" open single songs (present, tune, export)")]),e._v(" "),s("li",[s("code",[e._v("X X X X")]),e._v(" open single setlists (present, copy, export)")]),e._v(" "),s("li",[s("code",[e._v("- X X X")]),e._v(" create and edit setlists")]),e._v(" "),s("li",[s("code",[e._v("- X X X")]),e._v(" custom tuning in setlists")]),e._v(" "),s("li",[s("code",[e._v("- X X X")]),e._v(" sync setlists")]),e._v(" "),s("li",[s("code",[e._v("- - X X")]),e._v(" create and edit songs")]),e._v(" "),s("li",[s("code",[e._v("- - X X")]),e._v(" delete songs and setlists")]),e._v(" "),s("li",[s("code",[e._v("- - - X")]),e._v(" create, edit and delete tags")]),e._v(" "),s("li",[s("code",[e._v("- - - X")]),e._v(" create, edit and delete users")])]),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("SongDrive provides a main menu on the left to navigate to all overview pages (dashboard, lists of all songs and setlists and account).")]),e._v(" "),s("h3",{attrs:{id:"dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[e._v("#")]),e._v(" Dashboard")]),e._v(" "),s("p",[e._v("The dashboard is the entry point for SongDrive, which gives important information at first glance:")]),e._v(" "),s("ul",[s("li",[e._v("latest added songs and setlists")]),e._v(" "),s("li",[e._v("popular songs (based on number of setlists containing this song)")]),e._v(" "),s("li",[e._v("number of setlists and performed songs per year")])]),e._v(" "),s("p",[e._v("It also provides handy tools like the random song and information about SongDrive itself (numbers of songs, setlists, languages and users or SongDrive version).")]),e._v(" "),s("h3",{attrs:{id:"songs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#songs"}},[e._v("#")]),e._v(" Songs")]),e._v(" "),s("p",[s("em",[e._v("Songs")]),e._v(" provides a list of all songs already added to SongDrive in tabular form. On top of the table you find the possiblity to filter the song list by search query (currently the search is performed on titles and subtitles, not on song content) or tag.")]),e._v(" "),s("p",[e._v("If you click on of the rows, the song and a secondary menu is shown on the left, providing the following features (you can also use the "),s("em",[e._v("Action")]),e._v(" menu on the right to acces some of the features):")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("edit")]),e._v(": opens the edit dialog to change the song data")]),e._v(" "),s("li",[s("em",[e._v("clone")]),e._v(": opens the edit dialog with the current song data, but adds it as new song on save")]),e._v(" "),s("li",[s("em",[e._v("delete")]),e._v(": deletes the current song. At the moment, this cannot be undone.")]),e._v(" "),s("li",[s("em",[e._v("lannguage")]),e._v(": lists all languages, where a translation of the current song exists (each language is a song on its own, that can be combined in the edit dialog)")]),e._v(" "),s("li",[s("em",[e._v("chords")]),e._v(": you can toggle chords here. This also effects other actions like presentation view or exports")]),e._v(" "),s("li",[s("em",[e._v("present")]),e._v(": opens the song in presentation view, which is viewport optimized (maximized font size)")]),e._v(" "),s("li",[s("em",[e._v("tuning")]),e._v(": Here you can change the tuning of the song up and down, or you can reset to the original tuning")]),e._v(" "),s("li",[s("em",[e._v(".TXT")]),e._v(": exports the song in plain text format")]),e._v(" "),s("li",[s("em",[e._v(".SNG")]),e._v(": exports the song in SongBeamer format, also readable by OpenLP")]),e._v(" "),s("li",[s("em",[e._v(".PDF")]),e._v(": exports the song as PDF and opens it in the browser")])]),e._v(" "),s("h4",{attrs:{id:"song-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#song-syntax"}},[e._v("#")]),e._v(" Song Syntax")]),e._v(" "),s("p",[e._v("To add or edit a song, you have to provide the song text and the chords in a special (but easy) notation format.")]),e._v(" "),s("p",[e._v("The notation of song content and chords follows a simple rule: What you type is what you get. Just add the song lines with the corresponding chords above the exact syllable. Add two whitespaces at the end of each chord line for them to be recognized by the system as chord lines for text only view or transposition.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Try to provide a chord line for each line of text (don't skip chord lines for parts with the same chords, i.e. the second verse), as the goal is to make it as easy as possible for the song performer to play the song.")])]),e._v(" "),s("p",[e._v("In addition to songtext and chords, you can label the different song parts using markers. A marker starts with two dashes, followed by a letter indicating the song part (i.e. "),s("em",[e._v("c")]),e._v(" for "),s("em",[e._v("chorus")]),e._v("). The following table shows all possible markers:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Marker")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("--v")])]),e._v(" "),s("td",[e._v("verse")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("--p")])]),e._v(" "),s("td",[e._v("pre-chorus")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("--c")])]),e._v(" "),s("td",[e._v("chorus")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("--b")])]),e._v(" "),s("td",[e._v("bridge")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("--i")])]),e._v(" "),s("td",[e._v("intro")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("--m")])]),e._v(" "),s("td",[e._v("mitro")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("--o")])]),e._v(" "),s("td",[e._v("outro")])])])]),e._v(" "),s("p",[e._v("You can add a number to each song part to enumerate them, i.e. "),s("code",[e._v("--v1")]),e._v(" and "),s("code",[e._v("--v2")]),e._v(" for two different verses. Currently the numbers are only displayed for verses but can be used for every other song part too.")]),e._v(" "),s("p",[e._v("Here is an example with three different song parts:")]),e._v(" "),s("div",{staticClass:"language-plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("--v\n  G          C  \nThis is the verse text\n D        G  \nJust an example text\n\n--c\n  D           C  \nThis is the chorus text\n D        C      G  \nJust an example text\n\n--b\n  Em  \nThis is the bridge text\n C        D  \nJust an example text\n")])])]),s("p",[e._v("And here comes a real world example:")]),e._v(" "),s("div",{staticClass:"language-plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("--v1\n  G       G7        C        G  \nAmazing grace how sweet the sound\n               G7         D D7  \nThat saved a wretch like me\n  G         G7       C      G  \nI once was lost but now am found\n      Em       D     G  \nWas blind but now I see\n\n--v2\n        G         G7        C        G  \n'Twas grace that taught my heart to fear\n              G7      D    D7  \nAnd grace my fears relieved\n      G       G7        C      G  \nHow precious did that grace appear\n     Em     D       G  \nThe hour I first believed\n\n--v3\n...\n")])])]),s("p",[e._v("And that's it - having this simple song syntax in mind you are now ready to add your own songs to SongDrive.")]),e._v(" "),s("h3",{attrs:{id:"setlists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setlists"}},[e._v("#")]),e._v(" Setlists")]),e._v(" "),s("p",[s("em",[e._v("Setlists")]),e._v(" provides a list of all setlists already added to SongDrive in tabular form. On top of the table you find the possiblity to filter the setlist list by search query (the search is performed on setlist titles) or year.")]),e._v(" "),s("p",[e._v("If you click on of the rows, the setlist and a secondary menu is shown on the left, providing the following features (you can also use the "),s("em",[e._v("Action")]),e._v(" menu on the right to acces some of the features):")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("edit")]),e._v(": opens the edit dialog to change the setlist data")]),e._v(" "),s("li",[s("em",[e._v("clone")]),e._v(": opens the edit dialog with the current setlist data, but adds it as new setlist on save")]),e._v(" "),s("li",[s("em",[e._v("delete")]),e._v(": deletes the current setlist. At the moment, this cannot be undone.")]),e._v(" "),s("li",[s("em",[e._v("sync")]),e._v(": enables presentation synchronization. If active, the presentation view on other browsers or devices can be synchronized with the current presentation (automatic song switching)")]),e._v(" "),s("li",[s("em",[e._v("present")]),e._v(": opens the setlist in presentation view, which is viewport optimized (maximized font size)")]),e._v(" "),s("li",[s("em",[e._v("plain")]),e._v(": exports the setlist list in plain text format")]),e._v(" "),s("li",[s("em",[e._v("markdown")]),e._v(": exports the setlist list in "),s("a",{attrs:{href:"https://daringfireball.net/projects/markdown/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("em",[e._v("slack")]),e._v(": exports the setlist lis formatted for "),s("a",{attrs:{href:"https://get.slack.help/hc/en-us/articles/202288908-Format-your-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("em",[e._v("list")]),e._v(": exports setlist list as PDF")]),e._v(" "),s("li",[s("em",[e._v("sheets")]),e._v(": exports all songs contained in this setlist as single PDF (one song per page)")])])])}),[],!1,null,null,null);t.default=n.exports}}]);