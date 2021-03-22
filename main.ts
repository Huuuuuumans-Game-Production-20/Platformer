namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
tiles.setTilemap(tilemap`level1`)
let NPC1 = sprites.create(assets.image`clownFish0`, SpriteKind.NPC)
animation.runImageAnimation(
NPC1,
assets.animation`clownFishLeft`,
100,
true
)
tiles.placeOnRandomTile(NPC1, sprites.builtin.forestTiles0)
tiles.setTileAt(tiles.getTileLocation(4, 14), assets.tile`transparency16`)
scene.cameraFollowSprite(NPC1)
forever(function () {
	
})
