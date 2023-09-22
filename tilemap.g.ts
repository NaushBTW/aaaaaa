// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1f001f0002020202020202020202020205060605020202020202020202020202020202020101010103010101010101050404050101010101010103020301010103020201010101010101010101010504040501010101010101010201010101010202010302020202020202010105040405020202030102010102020202010102020101010101030101010103050104050101010101020101020101010101020201010101010101010101010201040501010101010201010201010101010202020202020202010102020202010105010102010102010102010102010302020301010101020101010101020101030101020101020101010101020101020b0801010101020101010101020101010101020101020101010101020101020b07080b0101020101020101020202020101020101020202020101020101020b01010b0101030101020301010301010101020101020301010103020101020b07070b0101010101020101010101010101020301020101010101020101020b07010b0b0b0b0101020202020202020202020101020202020202020202020b07070108080b0301010101080301010101020101010101010101010103020b01070107080b0101010108010101010101020101010101010101010101020b0b0b0b08080b0b0b0b08080b01010101010202020202020202020201010b0b09070b0708070a090b08080b01010101010301010101030203010101010b0b08070b070a070a0a0b08080b08080101010101010101010201010101010b0b07070b0b0b0b0b0b0b08080b08010b0b0b0b01010202020202020201010b0b08070807080707080807080b01090b07090b07010101010301010101010b0b07070707080708070707080b01080b07080b01070801010801010101010b0b07070b0b0b0b0b0b0b0b0b0b0b0b0b08070b0b0b0b07010b0b0b0b0b0b0b0b07070b090707070707070809080807070a0708070901070b070a0a07090b0b0a0a0b0807070707080707080807080a07080a070807070b0a0a0a0a0a0b0b070a0b0a070b0b0b0b0b0b0b0b0b0b0a0a0b0b0b0b07080b0a070b0b0b0b0b0a070707070b0907070a070b090a070a07070a070b070a0b070a070a070b0b0707070a0a0b07070a0a070b08070a070a0a070a0b0a070b070a0a0a0a0b0b0a070b0a0a0b0b0b0b070a0b0b0b0b0a0a0b0a070b0a0a0b0b0b0b07070b0b090a0b0a0a080a0a080a07070a0a0b070a0b07090b0a0a0a070a0a07090b0b080a0b0a070a070a08070a080a0a0b08070b08070b070a070a070a0a080b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
2222222222222..2222222222222222
2...........2..2........2.....2
2...........2..2........2.....2
2..2222222..2..2222..2..2222..2
2...........2..2.....2..2.....2
2...........2..2.....2..2.....2
2222222..2222..2..2..2..2..2..2
2.....2.....2.....2..2.....2..2
2.....2.....2.....2..2.....2..2
2..2..2..2..2222..2..2222..2..2
2..2.....2........2..2.....2..2
2..2.....2........2..2.....2..2
2..2222..2222222222..2222222222
2.....2...........2...........2
2.....2...........2...........2
2222..2222..2.....2222222222..2
2..2.....2..2...........2.....2
2..2.....2..2...........2.....2
2..2222222..2..2222..2222222..2
2...........2..2..2...........2
2...........2..2..2...........2
2..2222222222222..2222..2222222
2..2....................2.....2
2..2....................2.....2
2..2..2222222222..2222..2..2222
2.....2.....2........2..2.....2
2.....2.....2........2..2.....2
2..2..2222..2222..2..2..2222..2
2..2...........2..2..2........2
2..2...........2..2..2........2
2222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.dungeon.floorLight0,sprites.castle.tileDarkGrass2,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
