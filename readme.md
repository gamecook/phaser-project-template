## What is the Phaser Project Template?

This is a simple project template I created to help add a structure to your next Phaser game. It includes the following things:

*   A package.json for installing npm dependencies
*   GruntFile.js for automating build tasks and compiling your game
*   src folder where you can put your game code.
*   Deploy folder where all code gets compiled to and you can push to a server

To get started all you need to do is download a <a target="_blank" href="https://github.com/gamecook/phaser-template-project">copy of this template</a>, the latest version of <a target="_blank" href="https://github.com/photonstorm/phaser">Phaser</a> and make sure you have <a target="_blank" href="http://nodejs.org/">NodeJS</a> and <a target="_blank" href="http://gruntjs.com/">Grunt</a> installed.

## Installing NodeJS and Grunt

You can get a copy of NodeJS on its site <a target="_blank" href="http://nodejs.org/">here</a> and install it. After installing it you will want to install grunt from the command line.

If you have installed Grunt in the past you may want to remove it first:

<pre lang="javascript">> npm uninstall -g grunt</pre>

Now you can install Gruntâ€™s command line tools by typing out the following:

<pre lang="javascript">> npm install -g grunt-cli</pre>

From here, Grunt should work via the command line. If you want to learn more about how all of this works check out my blog post on <a target="_blank" href="http://jessefreeman.com/dev-techniques/automating-typescript-with-node-and-grunt/">Automating TypeScript with Node and Grunt</a>.

## Setting up the Templateâ€™s Dependencies

Via the command line, cd into the templateâ€™s directory on your compute and run the following command:

<pre lang="javascript">> npm install</pre>

This will run through all the dependencies in the package.json file and install them locally for the project to use. 

<img border="0" width="624" height="362" id="Picture 1" src="http://jessefreeman.com/wp-content/uploads/2013/05/pt-image001.jpg" />

Next you will need to download a copy of <a target="_blank" href="https://github.com/photonstorm/phaser">Phaserâ€™s source code</a> add it to your src directory. I keep it in a folder called src/libs/Phaser. Make sure you copy the main Phaser project code, you donâ€™t need the tests or other files floating around the directory.

<img border="0" width="274" height="288" id="Picture 2" src="http://jessefreeman.com/wp-content/uploads/2013/05/pt-image002.png" />

After that you can simply run:

<pre lang="javascript">> grunt</pre>

In the directory and it will launch a browser with the default screen which will look something like this:

<img border="0" width="624" height="439" id="Picture 3" src="http://jessefreeman.com/wp-content/uploads/2013/05/pt-image003.jpg" />

You can start building a game with Phaser by modifying the game.ts file inside of the src/game directory. While you have the Grunt task running in the browser your project will automatically recompile every time you make a change to any TypeScript file inside of the src directory. Make sure you disable your browserâ€™s cache to see changes.

## What Else?

Since git doesnâ€™t include empty directories the one thing I would suggest adding is an assets directory in your deploy folder. This is where you should keep all of your externally loaded content such as sounds, sprites and textures. I usually create folders with the name of each type of media I am loading to keep things organized.

<img border="0" width="287" height="380" id="Picture 4" src="http://jessefreeman.com/wp-content/uploads/2013/05/pt-image004.png" />

Also if you are lost or need some point of reference I highly suggest going through <a target="_blank" href="http://gametest.mobi/phaser/">each of the tests</a> in the Phaser project to see how things work until more of the framework is documented.