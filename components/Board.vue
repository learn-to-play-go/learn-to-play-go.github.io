<template>
  <div ref="targetContainer" class="board" />
</template>

<script>
import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 300,
  height: 300,
  backgroundColor: '#654654',
  autoStart: false
})

export default {
  name: 'Board',
  data () {
    const boardConfig = {
      stageW: 300,
      stageH: 300,
      boardSize: 5, // x by x
      boardColor: 0xA47C46,
      outer: {
        x: 25, // whole board offsets from all edges
        y: 25,
        lineColor: 0x0,
        lineWidth: 4,
        lines: 2
      },
      inner: {},
      stone: {}
    }

    boardConfig.inner = {
      width: boardConfig.stageW - boardConfig.outer.x * 2 - boardConfig.outer.lineWidth * 2,
      height: boardConfig.stageH - boardConfig.outer.y * 2 - boardConfig.outer.lineWidth * 2,
      x: boardConfig.outer.x,
      y: boardConfig.outer.y,
      lines: boardConfig.boardSize - 2, // 2 outer lines
      lineWidth: 2,
      lineColor: 0x0
    }

    boardConfig.outer.spacing = boardConfig.stageW - boardConfig.outer.x * 2 - boardConfig.outer.lineWidth
    boardConfig.inner.spacing = boardConfig.inner.width / (boardConfig.boardSize - 1) // spacing starts after first line

    boardConfig.stone.size = boardConfig.inner.spacing

    return {
      boardConfig
    }
  },
  mounted () {
    const container = this.$refs.targetContainer
    this.embed(container)
    app.stage.interactive = true
    this.start()
  },
  methods: {
    embed (container) {
      container.appendChild(app.view)
    },
    start () {
      app.start()
      this.drawTheBoard(app.stage, app.renderer)
      this.makeInteractive(app.stage)
    },
    stop () {
      app.stop()
    },
    drawTheBoard (stage, renderer) {
      const container = new PIXI.Container()
      stage.addChild(container)
      const gfx = new PIXI.Graphics()

      function getLine (w, h, fill) {
        gfx.clear()
        gfx.beginFill(fill)
        gfx.drawRect(0, 0, w, h)
        gfx.endFill()
        return renderer.generateTexture(gfx)
      }

      const background = new PIXI.Sprite(getLine(1, 1, this.boardConfig.boardColor))
      background.width = this.boardConfig.stageW
      background.height = this.boardConfig.stageH
      container.addChild(background)

      function drawLines (x, y, w, h, color, n, spacing) {
        let line = {}
        for (let i = 0; i < n; ++i) {
          line = new PIXI.Sprite(getLine(w, h, color))
          line.position.set(x + spacing.x * i, y + spacing.y * i)
          container.addChild(line)
        }
      }

      drawLines(
        this.boardConfig.outer.x, this.boardConfig.outer.y,
        this.boardConfig.stageW - this.boardConfig.outer.x * 2 - this.boardConfig.outer.lineWidth, this.boardConfig.outer.lineWidth,
        this.boardConfig.outer.lineColor, this.boardConfig.outer.lines, { x: 0, y: this.boardConfig.outer.spacing }
      )
      drawLines(this.boardConfig.outer.x, this.boardConfig.outer.y,
        this.boardConfig.outer.lineWidth, this.boardConfig.stageH - this.boardConfig.outer.y * 2,
        this.boardConfig.outer.lineColor, this.boardConfig.outer.lines, { x: this.boardConfig.outer.spacing, y: 0 }
      )
      drawLines(this.boardConfig.inner.x, this.boardConfig.inner.y + this.boardConfig.inner.spacing,
        this.boardConfig.stageW - this.boardConfig.outer.x * 2 - this.boardConfig.outer.lineWidth, this.boardConfig.inner.lineWidth,
        this.boardConfig.inner.lineColor, this.boardConfig.inner.lines, { x: 0, y: this.boardConfig.inner.spacing }
      )
      drawLines(this.boardConfig.inner.x + this.boardConfig.inner.spacing, this.boardConfig.inner.y,
        this.boardConfig.inner.lineWidth, this.boardConfig.stageH - this.boardConfig.outer.y * 2 - this.boardConfig.outer.lineWidth,
        this.boardConfig.inner.lineColor, this.boardConfig.inner.lines, { x: this.boardConfig.inner.spacing, y: 0 }
      )
    },
    coordToPos (x, y) { // starting with 1, 1
      return {
        x: this.boardConfig.outer.x + this.boardConfig.stone.size * (x - 1),
        y: this.boardConfig.outer.y + this.boardConfig.stone.size * (y - 1)
      }
    },
    makeInteractive (stage) {
      const container = new PIXI.Container()
      container.interactive = true
      stage.addChild(container)
      let lastStone = 'black'

      const intersections = []
      for (let i = 0; i < this.boardConfig.boardSize; ++i) {
        for (let j = 0; j < this.boardConfig.boardSize; ++j) {
          const intersection = new PIXI.Container()
          intersection.interactive = true
          intersection.stone = {}
          intersection.stone.black = PIXI.Texture.from('https://i.imgur.com/9GABq2h.png')
          intersection.stone.white = PIXI.Texture.from('https://i.imgur.com/ZvYQlG5.png')
          intersection.stone.empty = PIXI.Texture.from('https://i.imgur.com/9GABq2h.png')
          intersection.stone.current = new PIXI.Sprite()
          intersection.stone.current.interactive = true
          intersection.stone.current.width = this.boardConfig.stone.size
          intersection.stone.current.height = this.boardConfig.stone.size
          intersection.stone.current.anchor.set(0.5, 0.5)
          intersection.addChild(intersection.stone.current)
          intersection.putStone = function (newState, confirm = false, transparency = 1) {
            if (this.confirmed) { return }
            this.state = newState
            this.stone.current.alpha = transparency
            this.confirmed = confirm
            switch (newState) {
              case 'empty': this.stone.current.texture = this.stone.empty; this.stone.current.alpha = 0; break
              case 'black': this.stone.current.texture = this.stone.black; break
              case 'white': this.stone.current.texture = this.stone.white; break
              default: break
            }
          }
          intersection.putGhost = function (newState) {
            this.putStone(newState, false, 0.3)
          }
          intersection.putStone('empty')
          intersection.on('pointerover', function () {
            this.putGhost(lastStone)
          })
          intersection.on('pointerout', function () {
            this.putGhost('empty')
          })
          intersection.on('click', function () {
            this.putStone(lastStone, true)
            lastStone = lastStone === 'black' ? 'white' : 'black'
          })
          intersection.position = this.coordToPos(j + 1, i + 1)
          container.addChild(intersection)
          intersections.push(intersection)
        }
      }
    }
  }
}
</script>

<style lang="sass">
.board
  width: 20rem
  height: 20rem
canvas
  width: 100%
  height: 100%
</style>
