import { Scenario, Step } from '@/components/Scenario'
// eslint-disable-next-line no-unused-vars
import Layout from '~/components/Layout'

// expectX, expectY, responseX, responseY, messageFail, messageInfo, messageSuccess, responseMS = 500

const scenarios = {
  intro: new Scenario([
    new Step(2, 3, 3, 3, 'wow it works'),
    new Step(4, 4, 3, 4, null, null, 'tadaa')
  ]),
  capture: new Scenario([
    new Step(3, 4, -1, -1, null, null, 'Excellent')
  ], new Layout([
    '. . . . .',
    '. . B . .',
    '. B W B .',
    '. . . . .',
    '. . . . .'
  ]))
}

export default scenarios
