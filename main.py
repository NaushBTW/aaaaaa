class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    walkingright = 3
@namespace
class SpriteKind:
    Questionkind = SpriteKind.create()
    Qdonekind = SpriteKind.create()

def on_up_pressed():
    if controller.dx() < 0:
        animation.set_action(ginger, ActionKind.Walking)
    elif controller.dx() > 0:
        animation.set_action(ginger, ActionKind.walkingright)
    else:
        animation.set_action(ginger, ActionKind.walkingright)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def q6():
    game.show_long_text("What should you do after using plastic bottles?",
        DialogLayout.BOTTOM)
    story.show_player_choices("Recycle them", "Throw them away", "Buy more", "N/A")
    if story.check_last_answer("Recycle them"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)
def q7():
    game.show_long_text("How can you save water while brushing your teeth?",
        DialogLayout.BOTTOM)
    story.show_player_choices("Leave the tap running", "Turn off the tap")
    if story.check_last_answer("Turn off the tap"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)

def on_left_pressed():
    animation.set_action(ginger, ActionKind.Walking)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def q9():
    game.show_long_text("How can you help protect the Earth?", DialogLayout.BOTTOM)
    story.show_player_choices("Use lots of plastic bags", "Use reusable bags")
    if story.check_last_answer("Use reusable bags"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)
def q5():
    game.show_long_text("What should you do?", DialogLayout.BOTTOM)
    story.show_player_choices("Throw wrappers in the open",
        "Properly segregate waste",
        "Use plastic bags",
        "N/A")
    if story.check_last_answer("Properly segregate waste"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)
def q1():
    game.show_long_text("What is global warming?", DialogLayout.BOTTOM)
    story.show_player_choices("A health issue",
        "The heating of the Earth",
        "Cutting of Trees",
        "N/A")
    if story.check_last_answer("The heating of the Earth"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)
def q2():
    game.show_long_text("What is the wet waste?", DialogLayout.BOTTOM)
    story.show_player_choices("A plastic bottle",
        "A banana peel",
        "A metal can",
        "A wrapper")
    if story.check_last_answer("A banana peel"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)

def on_right_pressed():
    animation.set_action(ginger, ActionKind.walkingright)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    if controller.dx() < 0:
        animation.set_action(ginger, ActionKind.Walking)
    elif controller.dx() > 0:
        animation.set_action(ginger, ActionKind.walkingright)
    else:
        animation.set_action(ginger, ActionKind.walkingright)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def q8():
    game.show_long_text("What should you do when you leave a room?",
        DialogLayout.BOTTOM)
    story.show_player_choices("Turn the light off", "Leave it on")
    if story.check_last_answer("Turn the light off"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)

def on_overlap_tile(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.castle.tile_dark_grass2,
    on_overlap_tile)

def on_on_overlap(sprite2, otherSprite):
    global qnum
    qnum = randint(0, 8)
    if qnum == 0:
        q1()
    elif qnum == 1:
        q2()
    elif qnum == 2:
        q3()
    elif qnum == 3:
        q4()
    elif qnum == 4:
        q5()
    elif qnum == 5:
        q6()
    elif qnum == 6:
        q7()
    elif qnum == 7:
        q8()
    else:
        q9()
    otherSprite.set_kind(SpriteKind.Qdonekind)
sprites.on_overlap(SpriteKind.player, SpriteKind.Questionkind, on_on_overlap)

def q4():
    game.show_long_text("What should you not do to save the planet?",
        DialogLayout.BOTTOM)
    story.show_player_choices("Plant trees",
        "Buy a lot of plastic bottles",
        "Use paper bags")
    if story.check_last_answer("Buy a lot of plastic bottles"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)
def q3():
    game.show_long_text("What is recyclable?", DialogLayout.BOTTOM)
    story.show_player_choices("A potato", "An orange peel", "A metal can", "A banana peel")
    if story.check_last_answer("A metal can"):
        info.change_countdown_by(5)
        game.show_long_text("That is correct! +5s", DialogLayout.BOTTOM)
    else:
        info.change_countdown_by(-3)
        game.show_long_text("That is incorrect :( -3s", DialogLayout.BOTTOM)
qnum = 0
mySprite: Sprite = None
ginger: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
ginger = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(ginger)
scene.camera_follow_sprite(ginger)
for value in tiles.get_tiles_by_type(sprites.castle.tile_grass2):
    mySprite = sprites.create(img("""
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
        """),
        SpriteKind.Questionkind)
    tiles.place_on_tile(mySprite, value)
    tiles.set_tile_at(value, sprites.castle.tile_path5)
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile2
""")):
    mySprite = sprites.create(img("""
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
        """),
        SpriteKind.Questionkind)
    tiles.place_on_tile(mySprite, value2)
    tiles.set_tile_at(value2, assets.tile("""
        myTile0
    """))
anim = animation.create_animation(ActionKind.Walking, 200)
anim.add_animation_frame(img("""
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
"""))
anim.add_animation_frame(img("""
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
"""))
animation.attach_animation(ginger, anim)
walk_right = animation.create_animation(ActionKind.walkingright, 200)
walk_right.add_animation_frame(img("""
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
"""))
walk_right.add_animation_frame(img("""
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
"""))
animation.attach_animation(ginger, walk_right)
tiles.place_on_random_tile(ginger, assets.tile("""
    myTile0
"""))
game.splash("Help Dr. Ginger", "Reach the forest!")
game.show_long_text("Make the right choices along the way to win!",
    DialogLayout.BOTTOM)
info.start_countdown(30)

def on_update_interval():
    if controller.dx() == 0 and controller.dy() == 0:
        animation.stop_animation(animation.AnimationTypes.ALL, ginger)
game.on_update_interval(200, on_update_interval)
