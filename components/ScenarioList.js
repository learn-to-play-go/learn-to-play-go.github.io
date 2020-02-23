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

'. . . . . . . . .',
'. . . . . . . . .',
'. . . . . . . . .',
'. . . . . . . . .',
'. . . . . . . . .',
'. . . . . . . . .',
'. . . . . . . . .',
'. . . . . . . . .',
'. . . . . . . . .'
*/

const scenarios = {

  /* Rules */

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
  escapeCapture: new Scenario([
    new Step(4, 3, -1, -1, "This move doesn't help your stone! Try to attach a stone directly to it", "Great! Now you have plenty more liberties and white can't capture your stones for now")
  ], 'Save your stone from being captured',
  new Layout([
    '. . . . .',
    '. . W . .',
    '. W B W .',
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
    new Step(4, 3, -1, -1, "This move doesn't capture white's stone!", "White can't capture black's stone by playing at the square, because it would return to the board position that you started with")
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
  ])),

  /* Basics */

  suicideCapture: new Scenario([
    new Step(5, 5, -1, -1, "This move doesn't capture white's group!", 'As long as the "suicide stone" captures something - you can play it')
  ], 'White has no outside liberties, just the one in the centre - take it',
  new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . B B B . . .',
    '. . B W W W B . .',
    '. . B W . W B . .',
    '. . B W W W B . .',
    '. . . B B B . . .',
    '. . . . . . . . .',
    '. . . . . . . . .'
  ])),
  falseEye: new Scenario([
    new Step(5, 6, -1, -1, "This move doesn't capture white!", "White's group is left with just 1 eye")
  ], "It may appear that the right side of the white's group has an eye, but it's not an eye. Capture part of it",
  new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . B B B B B . .',
    '. B W W B W W B .',
    '. B W . W . W B .',
    '. B W W W W B B .',
    '. . B B B B B . .',
    '. . . . . . . . .',
    '. . . . . . . . .'
  ])),

  /* Advanced */

  ladder: new Scenario([
    new Step(5, 3, 6, 4, "Try a different move to atari white's stones"),
    new Step(6, 5, 5, 4),
    new Step(4, 4, 5, 5),
    new Step(5, 6, 4, 5),
    new Step(3, 5, 4, 6),
    new Step(4, 7, 3, 6),
    new Step(2, 6, 3, 7),
    new Step(3, 8, 2, 7),
    new Step(1, 7, 2, 8, 'Try to continue the same pattern'),
    new Step(2, 9, 1, 8),
    new Step(1, 9, -1, -1, "Capture all white's stones!", 'Just like that, white never had an option to escape the Ladder')
  ], "Try to Atari white's stones indefinitely",
  new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. B W . . . . . .',
    '. B W B . . . . .',
    '. . B . . . . . .',
    '. . . . . . . . .'
  ])),
  snapback: new Scenario([
    new Step(4, 5, 5, 5, "This move doesn't capture white's stone", 'Your stones have got into a "snapback"', 1500)
  ], "Capture white's stone in the center",
  new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . W W W W . .',
    '. . . W . B W . .',
    '. . W B W B W . .',
    '. . . B B W W . .',
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . . . . . . .'
  ]))
}

export default scenarios
