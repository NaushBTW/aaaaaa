enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walkingright
}
namespace SpriteKind {
    export const Questionkind = SpriteKind.create()
    export const Qdonekind = SpriteKind.create()
}
namespace StatusBarKind {
    export const time = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.dx() < 0) {
        animation.setAction(ginger, ActionKind.Walking)
    } else if (controller.dx() > 0) {
        animation.setAction(ginger, ActionKind.walkingright)
    } else {
        animation.setAction(ginger, ActionKind.walkingright)
    }
})
function q6 () {
    game.showLongText("What should you do after using plastic bottles?", DialogLayout.Bottom)
    story.showPlayerChoices("Recycle them", "Throw them away", "Buy more", "N/A")
    if (story.checkLastAnswer("Recycle them")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
function q7 () {
    game.showLongText("How can you save water while brushing your teeth?", DialogLayout.Bottom)
    story.showPlayerChoices("Leave the tap running", "Turn off the tap")
    if (story.checkLastAnswer("Turn off the tap")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(ginger, ActionKind.Walking)
})
function q9 () {
    game.showLongText("How can you help protect the Earth?", DialogLayout.Bottom)
    story.showPlayerChoices("Use lots of plastic bags", "Use reusable bags")
    if (story.checkLastAnswer("Use reusable bags")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
function q5 () {
    game.showLongText("What should you do?", DialogLayout.Bottom)
    story.showPlayerChoices("Throw wrappers in the open", "Properly segregate waste", "Use plastic bags", "N/A")
    if (story.checkLastAnswer("Properly segregate waste")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
function q1 () {
    game.showLongText("What is global warming?", DialogLayout.Bottom)
    story.showPlayerChoices("A health issue", "The heating of the Earth", "Cutting of Trees", "N/A")
    if (story.checkLastAnswer("The heating of the Earth")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
function q2 () {
    game.showLongText("What is the wet waste?", DialogLayout.Bottom)
    story.showPlayerChoices("A plastic bottle", "A banana peel", "A metal can", "A wrapper")
    if (story.checkLastAnswer("A banana peel")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(ginger, ActionKind.walkingright)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.dx() < 0) {
        animation.setAction(ginger, ActionKind.Walking)
    } else if (controller.dx() > 0) {
        animation.setAction(ginger, ActionKind.walkingright)
    } else {
        animation.setAction(ginger, ActionKind.walkingright)
    }
})
function q8 () {
    game.showLongText("What should you do when you leave a room?", DialogLayout.Bottom)
    story.showPlayerChoices("Turn the light off", "Leave it on")
    if (story.checkLastAnswer("Turn the light off")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Questionkind, function (sprite, otherSprite) {
    qnum = randint(0, 8)
    if (qnum == 0) {
        q1()
    } else if (qnum == 1) {
        q2()
    } else if (qnum == 2) {
        q3()
    } else if (qnum == 3) {
        q4()
    } else if (qnum == 4) {
        q5()
    } else if (qnum == 5) {
        q6()
    } else if (qnum == 6) {
        q7()
    } else if (qnum == 7) {
        q8()
    } else {
        q9()
    }
    otherSprite.setKind(SpriteKind.Qdonekind)
})
function q4 () {
    game.showLongText("What should you not do to save the planet?", DialogLayout.Bottom)
    story.showPlayerChoices("Plant trees", "Buy a lot of plastic bottles", "Use paper bags")
    if (story.checkLastAnswer("Buy a lot of plastic bottles")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
function q3 () {
    game.showLongText("What is recyclable?", DialogLayout.Bottom)
    story.showPlayerChoices("A potato", "An orange peel", "A metal can", "A banana peel")
    if (story.checkLastAnswer("A metal can")) {
        if (timer.value / 5 > 38) {
            info.changeCountdownBy(Math.floor(45 - timer.value / 5))
            game.showLongText("That is correct! +" + Math.floor(45 - timer.value / 5) + "s", DialogLayout.Bottom)
            timer.value += Math.floor(45 - timer.value / 5) * 5
        } else {
            info.changeCountdownBy(7)
            game.showLongText("That is correct! +7s", DialogLayout.Bottom)
            timer.value += 35
        }
    } else {
        info.changeCountdownBy(-5)
        game.showLongText("That is incorrect :( -5s", DialogLayout.Bottom)
        timer.value += -25
    }
}
let qnum = 0
let timer: StatusBarSprite = null
let mySprite: Sprite = null
let ginger: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
ginger = sprites.create(img`
    e e e . . . . e e e . . . . 
    e 4 4 e . . e 4 4 e . . . . 
    e e 4 4 e e 4 4 e e . . . . 
    e 4 e 4 4 e 4 4 4 e . . . . 
    e e f f 4 4 f f 4 e . . . . 
    f f 1 1 f f 1 1 f f . . . . 
    e f 1 1 f f 1 1 f e . e f e 
    f 4 f f 4 4 f f 4 f . f 4 f 
    f e 4 4 e e 4 4 2 f . f 4 f 
    . f 2 2 2 2 2 2 4 e f f 4 f 
    . f e 4 4 4 4 4 4 4 4 4 4 f 
    . f 4 4 4 4 4 e 4 4 f f f . 
    . f 4 f f f 4 f f 4 f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(ginger)
scene.cameraFollowSprite(ginger)
for (let value of tiles.getTilesByType(sprites.castle.tileGrass2)) {
    mySprite = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        ......868.......
        .......868......
        .......866......
        .......8676.....
        ......67656.....
        .....656758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `, SpriteKind.Questionkind)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.castle.tilePath5)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
    mySprite = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        ......868.......
        .......868......
        .......866......
        .......8676.....
        ......67656.....
        .....656758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `, SpriteKind.Questionkind)
    tiles.placeOnTile(mySprite, value2)
    tiles.setTileAt(value2, assets.tile`myTile0`)
}
let anim = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    e 4 4 e . . e 4 4 e . . . . 
    e e 4 4 f f 4 4 e e . . . . 
    e 4 e 4 4 4 4 4 4 e . . . . 
    f 4 f f 4 4 f f 4 f . . . . 
    e f 1 1 f f 1 1 f e . . . . 
    e f 1 1 f f 1 1 f e e f e . 
    f 4 f f 4 4 f f 4 f f 4 f . 
    f e 4 4 e e 4 4 2 4 f 4 f . 
    . f 2 2 2 2 2 2 4 4 4 4 f . 
    . f 4 4 4 4 4 4 4 f f f . . 
    . f 4 e 4 f f f 4 f . . . . 
    . . f f f f . . f f . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    e 4 4 e . . e 4 4 e . . . . 
    e e 4 4 f f 4 4 e e . . . . 
    e 4 e 4 4 4 4 4 4 e . . . . 
    f 4 f f 4 4 f f 4 f . . . . 
    e f 1 1 f f 1 1 f e . . . . 
    e f 1 1 f f 1 1 f e e f e . 
    f 4 f f 4 4 f f 4 f f 4 f . 
    f e 4 4 e e 4 4 2 4 f 4 f . 
    . f 2 2 2 2 2 2 4 4 4 4 f . 
    . f 4 4 4 4 4 4 4 f f f . . 
    . . f 4 e 4 f 4 f . . . . . 
    . . . f f f f f f . . . . . 
    `)
animation.attachAnimation(ginger, anim)
let walk_right = animation.createAnimation(ActionKind.walkingright, 200)
walk_right.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    . . . . e e e . . . . e e e 
    . . . . e 4 4 e . . e 4 4 e 
    . . . . e e 4 4 f f 4 4 e e 
    . . . . e 4 4 4 4 4 4 e 4 e 
    . . . . f 4 f f 4 4 f f 4 f 
    . . . . e f 1 1 f f 1 1 f e 
    . e f e e f 1 1 f f 1 1 f e 
    . f 4 f f 4 f f 4 4 f f 4 f 
    . f 4 f 4 2 4 4 e e 4 4 e f 
    . f 4 4 4 4 2 2 2 2 2 2 f . 
    . . f f f 4 4 4 4 4 4 4 f . 
    . . . . f 4 f f f 4 e 4 f . 
    . . . . f f . . f f f f . . 
    `)
walk_right.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    . . . . e e e . . . . e e e 
    . . . . e 4 4 e . . e 4 4 e 
    . . . . e e 4 4 f f 4 4 e e 
    . . . . e 4 4 4 4 4 4 e 4 e 
    . . . . f 4 f f 4 4 f f 4 f 
    . . . . e f 1 1 f f 1 1 f e 
    . e f e e f 1 1 f f 1 1 f e 
    . f 4 f f 4 f f 4 4 f f 4 f 
    . f 4 f 4 2 4 4 e e 4 4 e f 
    . f 4 4 4 4 2 2 2 2 2 2 f . 
    . . f f f 4 4 4 4 4 4 4 f . 
    . . . . . f 4 f 4 e 4 f . . 
    . . . . . f f f f f f . . . 
    `)
animation.attachAnimation(ginger, walk_right)
tiles.placeOnRandomTile(ginger, assets.tile`myTile0`)
game.splash("Help Dr. Ginger", "Reach the forest!")
game.showLongText("Make the right choices along the way to win!", DialogLayout.Bottom)
info.startCountdown(45)
timer = statusbars.create(40, 4, StatusBarKind.time)
timer.setColor(3, 1)
timer.positionDirection(CollisionDirection.Top)
timer.max = 225
timer.setOffsetPadding(1, 11)
timer.value = 225
game.onUpdateInterval(200, function () {
    if (controller.dx() == 0 && controller.dy() == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, ginger)
    }
    timer.value += -1
})
