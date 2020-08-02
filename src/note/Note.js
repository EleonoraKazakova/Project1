import React from 'react';
import Items from './Items'
import Text from './Text'
import './Note.css'

const notes = {
  '1': {name: '1 item', title: 'Text 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie turpis neque, eget tempus nunc aliquet in. Suspendisse venenatis finibus elementum. Donec lobortis, dui in laoreet congue, dolor nulla tempor nunc, at fringilla justo ante sit amet urna. Cras pellentesque, turpis sit amet blandit bibendum, augue purus accumsan libero, ut condimentum augue sem at lacus. Cras a maximus lorem. Cras ultricies rhoncus nibh nec sollicitudin. Nullam ac rhoncus diam, sit amet lobortis libero. Pellentesque rhoncus non ex nec tristique. Donec bibendum vehicula venenatis. In tristique eleifend ornare. '},
  '2': {name: '2 item', title:'Text 2', text: ''},
  '3': {name: '3 item', title:'Text 3', text: ''}
}

function Note(props) {

  return (
    <div className='note'>
      <div className='item'>
        <Items items={notes} currentItem={props.item}/>
      </div>

      <div className='text'>
        <Text text={notes[props.item].text} title={notes[props.item].title } />
      </div>
    </div>
  )
}

export default Note;