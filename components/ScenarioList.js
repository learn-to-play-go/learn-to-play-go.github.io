import { Scenario, Step } from '@/components/Scenario'
// eslint-disable-next-line no-unused-vars
import Layout from '~/components/Layout'

// expectX, expectY, responseX, responseY, messageFail, messageInfo, messageSuccess, responseMS = 500
/*
'. . . . .',
'. . . . .',
'. . . . .',
'. . . . .',
'. . . . .'
*/

const scenarios = {
  intro: new Scenario([
    new Step(2, 3, 3, 3, 'wow it works'),
    new Step(4, 4, 3, 4, null, 'tadaa')
  ]),
  anywhere: new Scenario([
    new Step(-1, -1, -1, -1, null, 'Great!', 0, 0)
  ], 'Play anywhere on the board'),
  capture: new Scenario([
    new Step(4, 3, -1, -1, "This move doesn't take away a liberty!", "Excellent! White's stone is now captured")
  ], "Capture white's stone",
  new Layout([
    '. . . . .',
    '. . B . .',
    '. B W B .',
    '. . . . .',
    '. . . . .'
  ])),
  captureGroup: new Scenario([
    new Step(3, 4, -1, -1, "This move doesn't take away a liberty!", "Excellent! White's group is now captured")
  ], "Capture white's group",
  new Layout([
    '. . B . .',
    '. B W B .',
    '. B W . .',
    '. B W B .',
    '. . B . .'
  ])),
  captureEdge: new Scenario([
    new Step(1, 2, -1, -1, "This move doesn't take away a liberty!", "It only took 2 stones to capture white's stone in the corner")
  ], "Capture white's stone",
  new Layout([
    'W . . . .',
    'B . . . .',
    '. . . . .',
    '. . . . .',
    '. . . . .'
  ])),
  ko: new Scenario([
    new Step(4, 3, -1, -1, "This move doesn't capture white's stone!", "White can't capture black's stone by playing at square, because it would return to the board position that you started with")
  ], "Capture white's stone",
  new Layout([
    '. . . . .',
    '. . B . .',
    '. B W B .',
    '. W . W .',
    '. . W . .'
  ])),
  koEdge: new Scenario([
    new Step(1, 2, -1, -1, "This move doesn't capture white's stone!", "White can't capture black's stone back, because it would repeat the position")
  ], "Capture white's stone",
  new Layout([
    'W . W . .',
    'B W W . .',
    'B B . . .',
    '. . . . .',
    '. . . . .'
  ]))
}

export default scenarios
