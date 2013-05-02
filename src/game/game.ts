/// <reference path="../lib/Phaser/Game.ts" />

(function () {
    // Create game instance and connect init, create, update and render methods
    var myGame = new Phaser.Game(this, 'game', 800, 480, init, create, update, render);
    
    function init() {
        myGame.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;

        // Setup loader here
    }

    function create() {
        // What happens after everything is loaded?
    }

    function update() {
        // What is your custom update logic?
    }

    function render() {
        // Replace with your own custom render logic
        myGame.stage.context.fillStyle = 'rgb(255,255,255)';
        myGame.stage.context.font = 'bold 18px Arial';
        myGame.stage.context.fillText(Phaser.VERSION + " works!", myGame.stage.centerX - 120, myGame.stage.centerY);
    }

})();