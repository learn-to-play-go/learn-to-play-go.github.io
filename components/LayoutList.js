import Layout from '~/components/Layout'

// T: 'triangle',
// S: 'square',
// C: 'circle',
// a: 'a',
// b: 'b',
// c: 'c'

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
    '. S B S .',
    '. . . . .',
    '. . . . .'
  ])
}

export default layouts
