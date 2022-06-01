# E-VotingBackend

This project was done under the technologies of NodeJS, Helmet, CORS, Ethers, Dotenv, Otplib and QRCode, in addition to having a technology for the PostgreSQL database stored in ElephantSQL to control the instance. 

This is the backend system for the creation of an electronic voting system oriented to decentralization through the Blockchain under Solidity technology for the creation of smart contracts. In addition to the integration of the **Google Authenticator** application to perform a 2FA.

You can visualize how it works on the website https://vot-e-front.herokuapp.com/

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Running the project

    $ npm run dev
