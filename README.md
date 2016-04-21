# YahooWebApp - built with Flask.
This is another version of our FeelsApp with an updated and more modular structure of the app.

Also, this app was created with flask via virtualenv following tutorials created by [Lalith Polepeddi](https://github.com/lpolepeddi) before being modified. - *P.s: Thanks Lalith!*

### **Before cloing this git!**  
Here are some linux-based commands required to have the app set up for development.

##### **NOTICE !!**  
*If you're running Windows, follow the "Installation Instructions" on [this link](https://pypi.python.org/pypi/setuptools) to get easy_install up and running on your computer.*

##### Installing virtualenv
If you already have virtualenv installed on your system,
you will see a version number. Do the following command to check:  

```sh
$ sudo easy_install virtualenv
```  
or:
```sh
$ sudo pip install virtualenv
```  
or:
```sh
$ sudo apt-get install python-virtualenv
```

##### Installing Flask
After installing virtualenv, do the following command:

```sh
$ virtualenv flaskapp
```
This creates a new isolated development environment in your current directory.  
Then, make the new dev-env your present working directory like so:
```sh
$ cd flaskapp
$ . bin/activate
```
Now, install Flask:
```sh
$ pip install Flask
```

##### ***Don't forget...***  
You may clone this git to your ***isolated development*** `flaskapp folder`.  
To continue developing this app in an ***isolated environment*** in the `flaskapp folder`, remember to always do the following command:
```sh
$ . bin/activate
```  
###### ***Finally...***  
To have run the page on your localhost, cd into the `YahooApp` folder, and in your terminal enterh the following:
```sh
$ python runserver.py
```
