# Create a mono repo

## Create a plain project
```ng new frontend --create-application false```
## Create an application project within
```ng generate application <app-name> --routing --style=scss```
## Create a library project within
```ng generate lib <lib-name>```

# Update scripts for the project
1. Prefix the scripts with the project name
2. Add scripts for the libraries

# Working on libs and listening on changes
1. Start your watch script for the lib
2. Start your app

On every change on the lib, it will be rebuilded. These changes will be reflected in your app right away
Hint: hiccups can occur a reload of the page in the browser should be enough.
