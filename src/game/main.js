var state = {
    init: function() {
        var text = "Phaser Version " + Phaser.VERSION + " works!";
        var style = { font: "24px Arial", fill: "#fff", align: "center" };
        var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
        t.anchor.setTo(0.5, 0.5);
	},
    preload: function() {

    },
    create: function(){

    },
    update: function() {

    }
};

var game = new Phaser.Game(
    800,
    480,
    Phaser.AUTO,
    'game',
    state
);