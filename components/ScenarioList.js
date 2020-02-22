import { Scenario, Step } from '@/components/Scenario'

// expectX, expectY, responseX, responseY, messageFail, messageInfo, messageSuccess, responseMS = 500

const scenarios = {
  intro: new Scenario([
    new Step(2, 2, 3, 3, 'wow it works'),
    new Step(4, 4, 3, 4, null, null, 'tadaa')
  ])
}

export default scenarios
