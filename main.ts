scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.rotationDegrees < 50) {
        mySprite.rotationDegrees = 0
    } else if (mySprite.rotationDegrees > 310) {
        mySprite.rotationDegrees = 0
    } else {
        mySprite.rotationDegrees = 0
        game.gameOver(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (mySprite.vx < -1) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (mySprite.vx > 1) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (mySprite.vx > 1) {
        mySprite.vy = -200
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy != 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.rotationDegrees += 90
        pause(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    if (mySprite.vx < -1) {
        mySprite.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . 2 2 2 2 2 2 . . . . . . . 
            . . 2 2 2 f f 2 2 2 . . . . . . 
            . 2 2 f f f f 2 f 2 f . . . . . 
            f 2 4 f f f f 2 f 2 . f . . . f 
            f 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            d d d d d f f f f f f d d d d d 
            d f f f d . . . . . . d f f f d 
            d f f f d . . . . . . d f f f d 
            d f f f d . . . . . . d f f f d 
            d d d d d . . . . . . d d d d d 
            `],
        500,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (mySprite.vx < -1) {
        mySprite.vy = -200
    }
})
info.onCountdownEnd(function () {
    game.splash(info.score())
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (mySprite.vx < -1) {
        mySprite.vy = -200
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . 2 2 2 2 2 2 . . . 
            . . . . . . 2 2 2 f f 2 2 2 . . 
            . . . . . f 2 f 2 f f f f 2 2 . 
            f . . . f . 2 f 2 f f f f 4 2 f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 f 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            d d d d d f f f f f f d d d d d 
            d f f f d . . . . . . d f f f d 
            d f f f d . . . . . . d f f f d 
            d f f f d . . . . . . d f f f d 
            d d d d d . . . . . . d d d d d 
            `],
        500,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (mySprite.vx > 1) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (mySprite.vx > 1) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (mySprite.vx > 1) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (mySprite.vx < -1) {
        mySprite.vy = -200
    }
})
let myMenu: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . f . . . . . 
    . . . . . . . 2 2 2 2 2 2 . . . 
    . . . . . . 2 2 2 f f 2 2 2 . . 
    . . . . . f 2 f 2 f f f f 2 2 . 
    f . . . f . 2 f 2 f f f f 4 2 f 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 f 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    d d d d d f f f f f f d d d d d 
    d f f f d . . . . . . d f f f d 
    d f f f d . . . . . . d f f f d 
    d f f f d . . . . . . d f f f d 
    d d d d d . . . . . . d d d d d 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.Invisible, true)
let mymenu2 = miniMenu.createMenu(
miniMenu.createMenuItem("free play"),
miniMenu.createMenuItem("timed")
)
miniMenu.onButtonPressed(mymenu2, miniMenu.Button.A, function (selection, selectedIndex) {
    miniMenu.close(mymenu2)
    if (selectedIndex == 0) {
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Mud Pit"),
        miniMenu.createMenuItem("stadium"),
        miniMenu.createMenuItem("Normal Terrain")
        )
        miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
            miniMenu.close(myMenu)
            mySprite.setFlag(SpriteFlag.Invisible, false)
            controller.moveSprite(mySprite, 120, 0)
            scene.cameraFollowSprite(mySprite)
            mySprite.ay = 450
            if (selectedIndex == 0) {
                tiles.setCurrentTilemap(tilemap`level`)
            }
            if (selectedIndex == 1) {
                tiles.setCurrentTilemap(tilemap`level1`)
            }
            if (selectedIndex == 2) {
                tiles.setCurrentTilemap(tilemap`level0`)
            }
        })
    } else if (selectedIndex == 1) {
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Mud Pit"),
        miniMenu.createMenuItem("stadium"),
        miniMenu.createMenuItem("Normal Terrain")
        )
        miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
            miniMenu.close(myMenu)
            mySprite.setFlag(SpriteFlag.Invisible, false)
            controller.moveSprite(mySprite, 120, 0)
            scene.cameraFollowSprite(mySprite)
            mySprite.ay = 450
            if (selectedIndex == 0) {
                tiles.setCurrentTilemap(tilemap`level`)
                info.startCountdown(60)
            }
            if (selectedIndex == 1) {
                tiles.setCurrentTilemap(tilemap`level1`)
                info.startCountdown(60)
            }
            if (selectedIndex == 2) {
                tiles.setCurrentTilemap(tilemap`level0`)
                info.startCountdown(60)
            }
        })
    }
})
forever(function () {
    if (mySprite.rotationDegrees == 360) {
        info.changeScoreBy(1)
    }
})
