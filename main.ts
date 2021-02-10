namespace SpriteKind {
    export const enemyprojectile = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    current_level += 1
    next_level()
    mySprite2.follow(mySprite, 80)
})
function next_level () {
    scene.setTileMap(level[current_level])
    scene.placeOnRandomTile(mySprite, 5)
    if (current_level) {
        mySprite2 = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(mySprite2, 15)
    }
}
sprites.onOverlap(SpriteKind.enemyprojectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.disintegrate, 5000)
    game.over(false, effects.confetti)
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy(effects.ashes, 1000)
})
let projectile: Sprite = null
let projectile3: Sprite = null
let mySprite2: Sprite = null
let projectile2: Sprite = null
let current_level = 0
let mySprite: Sprite = null
let level: Image[] = []
tiles.setTilemap(tilemap`level1`)
scene.setTile(3, img`
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . 6 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
    . 6 7 7 7 7 7 7 7 7 7 7 7 7 6 . 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 6 7 7 7 7 7 7 7 7 7 7 6 7 6 
    8 6 7 7 7 7 7 7 7 7 7 7 7 7 6 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    6 7 6 7 7 7 6 7 7 7 7 6 7 7 7 6 
    6 8 6 7 7 6 7 7 7 6 7 7 6 6 8 6 
    8 6 6 7 6 6 7 7 6 6 6 7 6 6 6 8 
    8 6 8 6 6 6 7 6 6 6 6 6 8 6 6 8 
    8 8 6 6 8 6 6 6 8 6 6 6 8 8 8 8 
    . f 6 e e 8 6 6 8 8 6 8 8 8 f . 
    . . f e e e 6 e 8 8 f f 8 f . . 
    . . . f f f 8 e e f f f f . . . 
    `, true)
scene.setTile(2, img`
    d d d d d d d d d d d d d d d d 
    d d d 1 1 d d d d d d d d b d d 
    d d d 1 1 d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d b b d d d d d 
    d d d d d d d d d b b d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d b d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d b d d d 
    d d d d d d 1 d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d b d 
    `, false)
scene.setTile(5, img`
    d 1 d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d b d d d d d 1 1 d d 
    d d d d d d d d d d d d 1 1 d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d 1 d d d b b d d d d d d d d d 
    d d d d d b b d d d d d d d b d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d b d d d d d d d 1 d d d d 
    d d d d d d d d d d d d d d d d 
    d 6 d d d d d d d 6 d d d d d d 
    6 7 6 d 6 7 d d d 7 6 7 7 6 d d 
    7 7 6 7 7 6 d 6 6 7 6 7 6 7 6 6 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(7, img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b b b b b b b d d b b b b b b b 
    . b b b b b b c c b b b b b b . 
    b c c c c c b c c b c c c c c b 
    b c c c c c c b b c c c c c c b 
    b c c c c c c c c c c c c c c b 
    b c c c c c c c c c c c c c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, true)
scene.setTile(15, img`
    e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e e e e e e e e e e e e e e e e 
    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
    e 4 e e e e e e e e e e e e 4 e 
    e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
    e 4 e e e e e e e e e e e e 4 e 
    e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
    e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e e e e e e e e e e e e e e e e 
    e e c c c c c c c c c c c c e e 
    e e c c c c c c c c c c c c e e 
    e e e e e e e e e e e e e e e e 
    `, true)
let messages = ["Find the way out of the maze", "Press A to fire at the monkey"]
level = [img`
    3 3 3 3 2 2 2 2 2 2 2 2 2 2 2 2 
    3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 3 3 2 3 3 3 3 3 3 2 
    3 2 2 3 3 3 3 2 2 3 3 2 2 2 3 2 
    3 2 2 2 2 3 3 2 2 3 3 2 3 3 3 2 
    3 2 2 2 2 3 3 2 2 2 2 2 3 3 2 2 
    3 3 3 3 3 3 3 2 7 2 2 2 3 3 2 2 
    3 2 3 3 3 3 3 2 2 2 3 2 3 3 2 2 
    3 2 2 2 3 3 3 3 3 3 3 2 3 3 2 2 
    3 2 2 2 2 2 3 2 2 2 2 2 2 3 2 2 
    3 2 3 3 3 3 2 2 2 2 2 2 2 3 2 2 
    3 2 3 3 3 3 3 3 2 2 3 3 3 3 2 2 
    3 2 3 3 3 3 2 2 2 2 3 2 2 2 2 3 
    3 2 2 2 2 2 2 2 2 2 3 2 2 2 2 3 
    3 2 2 2 2 2 2 2 3 2 2 2 2 3 3 3 
    3 5 3 3 3 3 3 3 3 2 2 2 3 3 3 3 
    `, img`
    3 3 3 3 3 3 3 2 2 2 2 2 2 2 2 3 
    3 2 2 3 3 2 2 2 2 2 2 2 2 2 2 3 
    3 2 2 3 3 2 2 2 3 3 3 3 3 3 2 3 
    3 2 2 3 3 2 3 3 2 2 2 2 2 3 2 3 
    3 2 2 3 3 2 3 3 2 2 2 2 2 2 2 3 
    3 2 2 3 2 2 3 3 2 2 3 3 2 2 2 3 
    3 2 2 3 2 2 2 2 2 2 2 2 3 3 2 3 
    3 2 2 3 2 2 2 2 2 2 2 2 3 3 2 3 
    3 2 2 3 2 2 2 2 2 2 2 2 3 3 2 3 
    3 2 2 3 2 2 2 2 2 2 2 2 3 3 2 3 
    3 2 2 3 2 2 2 2 2 2 2 f 3 3 2 3 
    3 2 2 3 3 3 3 3 3 3 3 3 3 3 2 3 
    3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
    3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
    3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
    3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `]
mySprite = sprites.create(img`
    ........................
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff..........
    .ffefbf44fbfeff.........
    .fee41fddf14eef.........
    fdfeeddddd4eff..........
    fbffee444edd4e..........
    fbf4f2222edde...........
    fcf.f22cccee............
    .ff.f44cdc4f............
    ....fffddcff............
    .....fddcff.............
    ....cddc................
    ....cdc.................
    ....cc..................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
info.setLife(3)
scene.cameraFollowSprite(mySprite)
info.startCountdown(45)
current_level = 0
next_level()
game.onUpdateInterval(9000, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 50, 50)
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.enemyprojectile)
    projectile.follow(mySprite, 15)
})
