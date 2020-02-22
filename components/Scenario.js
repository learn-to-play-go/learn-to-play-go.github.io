const EventEmitter = require('events')

class Step {
  constructor (expectX, expectY, responseX, responseY, messageFail, messageInfo, messageSuccess, responseMS = 500, passMS = 100) {
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
      info: messageInfo,
      fail: messageFail
    }
    this.isPass = (responseX < 0) && (responseY < 0)
    this.responseMS = responseMS
    this.passMS = passMS
  }
}

class Scenario extends EventEmitter {
  constructor (steps, presetLayout) {
    super()
    this.currentStepIndex = 0
    this.steps = steps // array of Step
    this.totalSteps = this.steps.length
    this.responseTimeoutObj = null
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
    this.emit('responded', this.currentStep().response.x, this.currentStep().response.y, this.currentStep().message.info, this.currentStep().isPass, this.isLastStep())
    this.advance()
  }

  validate (playedX, playedY) {
    return (this.currentStep().expect.x === playedX) && (this.currentStep().expect.y === playedY)
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
