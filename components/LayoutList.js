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
*/

const layouts = {
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
  ], "White's A stone has 2 liberties, and white's B stone has 3 liberties")
}

export default layouts
