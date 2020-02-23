import Layout from '~/components/Layout'

// T: 'triangle',
// S: 'square',
// C: 'circle',
// a: 'a',
// b: 'b',
// c: 'c'

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

const layouts = {

  /* Rules */

  intro: new Layout([
    '. . . . .',
    '. BT . . .',
    '. . WT W W',
    'B . B . W',
    '. . . . .'
  ], 'Look at this lmao'),
  liberties: new Layout([
    '. . . . .',
    '. . S . .',
    '. S W S .',
    '. . S . .',
    '. . . . .'
  ], '4 liberties are marked with squares'),
  groupLiberties: new Layout([
    '. . S . .',
    '. S W S .',
    '. S W S .',
    '. S W S .',
    '. . S . .'
  ], "White's group has 8 liberties"),
  edgeLiberties: new Layout([
    'Wa S . . .',
    'S . . . .',
    '. . . . .',
    '. . S . .',
    '. S Wb S .'
  ], "White's A stone has 2 liberties, and white's B stone has 3 liberties"),

  /* Basics */

  suicide: new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . W W W . . .',
    '. . . W S W . . .',
    '. . . W W W . . .',
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . . . . . . .'
  ], "Black can't play a stone at the square - it would be a suicide"),
  twoEyes: new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . B B B B B . .',
    '. B W W W W W B .',
    '. B W a W b W B .',
    '. B W W W W W B .',
    '. . B B B B B . .',
    '. . . . . . . . .',
    '. . . . . . . . .'
  ], "Even though white has no outside liberties, black can't play at both A and B at the same time"),
  falseEye: new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . B B B B B . .',
    '. B W W B W W B .',
    '. B W . W S W B .',
    '. B W W W W B B .',
    '. . B B B B B . .',
    '. . . . . . . . .',
    '. . . . . . . . .'
  ], ''),
  splitBoard: new Layout([
    '. . . . . W W B .',
    '. . . . . W B B .',
    '. . W . W W B . .',
    '. . . W W B B . .',
    '. . . W B . . . .',
    'W W W B B . . . .',
    'W B B . . . B . .',
    'B B . . . . . . .',
    '. . . . . . . . .'
  ], 'In this game, black has surrounded 35 intersections, which yields him 35 points. White has surrounded 19 intersections, plus compensation for going second (6.5 points), gets him to 25.5 points. There were no captured stones. Black wins the game by 9.5 points'),
  splitBoardWhiteDead: new Layout([
    '. . . . . W W B .',
    '. . . . . W B B .',
    '. . W . W W B . .',
    '. . . W W B B W W',
    '. . . W B . . W a',
    'W W W B B . B W W',
    'W B B . . . B B B',
    'B B . . . . . . .',
    '. . . . . . . . .'
  ], "White's group on the right side only has 1 eye and no room for making the 2nd eye. Therefore, it doesn't really occupy the point A. The entire group is assumed to be \"dead\" and will be counted as points towards black. The point A will also count as being black's"),
  splitBoardWhiteAlive: new Layout([
    '. . . . . W W B .',
    '. . . . . W B . .',
    '. . W . W W B B B',
    '. . . W W B B W W',
    '. . . W B . B W .',
    'W W W B B . B W W',
    'W B B . . B a W .',
    'B B . . . B B W W',
    '. . . . . . B B B'
  ], "White's group is alive (it has two eyes), but so is black's. Therefore the point at A belongs to nobody and isn't counted as points"),

  /* Advanced */

  preAtari: new Layout([
    '. . . . . . . . .',
    '. . . . . . . . .',
    '. . . . B . . . .',
    '. . . B W B . . .',
    '. . . B W a . . .',
    '. . . B W b . . .',
    '. . . . B . . . .',
    '. . . . . . . . .',
    '. . . . . . . . .'
  ], "Black playing at A or B is called an Atari. After that move, white's stones will be left with just 1 liberty")
}

export default layouts
