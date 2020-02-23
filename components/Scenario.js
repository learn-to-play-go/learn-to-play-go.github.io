const EventEmitter = require('events')

class Step {
  constructor (expectX, expectY, responseX, responseY, messageFail, messageSuccess, responseMS = 500, passMS = 0) {
    this.expect = { // x and y are board coords that start with 1
      x: expectX,
      y: expectY
    }
    this.response = {
      x: responseX,
      y: responseY
    }
    this.message = {
      success: messageSuccess,
      fail: messageFail
    }
    this.isAnywhere = (expectX < 0) && (expectY < 0)
    this.isPass = (responseX < 0) && (responseY < 0)
    this.responseMS = responseMS
    this.passMS = passMS
  }
}

class Scenario extends EventEmitter {
  constructor (steps, description, presetLayout) {
    super()
    this.currentStepIndex = 0
    this.steps = steps // array of Step
    this.totalSteps = this.steps.length
    this.responseTimeoutObj = null
    this.description = description
    this.presetLayout = presetLayout
  }

  currentStep () {
    return this.steps[this.currentStepIndex]
  }

  responseTimeout (ms) {
    if (this.responseTimeoutObj !== null) { return false }
    this.emit('responding')
    this.responseTimeoutObj = setTimeout(() => {
      this.respond()
      this.responseTimeoutObj = null
    }, ms)
  }

  play (playedX, playedY) {
    if (this.validate(playedX, playedY)) {
      if (this.currentStep().isPass) {
        this.responseTimeout(this.currentStep().passMS)
      } else {
        this.responseTimeout(this.currentStep().responseMS)
      }
    } else {
      this.emit('incorrect', this.currentStep().message.fail)
    }
  }

  respond () {
    // the game engine has x and y mixed up so I alter it here
    this.emit('responded', this.currentStep().response.y, this.currentStep().response.x, this.currentStep().message.info, this.currentStep().isPass, this.isLastStep())
    this.advance()
  }

  validate (playedX, playedY) {
    // the game engine has x and y mixed up so I alter it here
    return this.currentStep().isAnywhere || ((this.currentStep().expect.x === playedY) && (this.currentStep().expect.y === playedX))
  }

  isLastStep () {
    return (this.currentStepIndex + 1) >= this.totalSteps
  }

  advance () {
    if (this.currentStepIndex >= this.totalSteps) { return }

    if (this.isLastStep()) {
      this.end()
    }
    this.currentStepIndex += 1
  }

  restart () {
    this.currentStepIndex = 0
    this.emit('restarted', this.currentStep().message.info)
  }

  end () {
    this.emit('ended', this.currentStep().message.success)
  }
}

export { Scenario, Step }
