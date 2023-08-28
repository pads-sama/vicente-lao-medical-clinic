
## Screenshots

![github screenshot](https://i.imgur.com/ZX9cNo8.png)
## Installation

Copy the url or download the zip file

if you copy the url run this command to terminal
```
    git clone https://github.com/pads-sama/vicente-lao-medical-clinic.git
```
after that
```
    cd (name-of-the-folder)
```
change the **name-of-the-folder** to the actual name of the folder

Then run this command to create an **.env** file and to generate a **key**
```
    cp .env.example .env

    php artisan key:generate
```

After that go to react folder and install node_modules and run the project using the command
```
    cd react

    npm install

    npm run dev
```
it will give you a link https://localhost:3000

![link screenshot](https://i.imgur.com/NaEnbMe.png)

copy it and open in browser
if your see an error 
run this command

```
    npm install aos --save

    npm install @headlessui/react
```
