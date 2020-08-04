import React, { useState } from 'react';
import Items from './Items'
import Text from './Text'
import './Note.css'

const notes = {
  '1': { name: '1 item', title: 'Text 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie turpis neque, eget tempus nunc aliquet in. Suspendisse venenatis finibus elementum. Donec lobortis, dui in laoreet congue, dolor nulla tempor nunc, at fringilla justo ante sit amet urna. Cras pellentesque, turpis sit amet blandit bibendum, augue purus accumsan libero, ut condimentum augue sem at lacus. Cras a maximus lorem. Cras ultricies rhoncus nibh nec sollicitudin. Nullam ac rhoncus diam, sit amet lobortis libero. Pellentesque rhoncus non ex nec tristique. Donec bibendum vehicula venenatis. In tristique eleifend ornare. ' },
  '2': { name: '2 item', title: 'Text 2', text: 'Donec consectetur fringilla enim, at laoreet neque consequat at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed convallis, nisl id gravida aliquet, nibh tellus molestie diam, tristique accumsan ante dui sit amet neque. Mauris eleifend accumsan dignissim. Fusce urna felis, aliquet ut rutrum id, tempus quis est. Vestibulum convallis, diam vel porttitor efficitur, nulla lorem mattis mauris, non venenatis leo odio at nulla. Curabitur pharetra augue ligula, id volutpat ipsum dignissim quis. Aenean aliquam imperdiet erat id varius. Cras finibus odio ac ligula laoreet, et vehicula sapien bibendum. Ut nibh diam, mattis ac ipsum et, dictum efficitur nisi. Phasellus lobortis porttitor justo vel pharetra. Donec fermentum leo nec ullamcorper iaculis. Suspendisse vulputate magna nulla, vel maximus elit faucibus gravida. ' },
  '3': { name: '3 item', title: 'Text 3', text: 'Sed vitae mi id quam venenatis tincidunt in sed diam. Praesent libero sem, maximus id arcu sit amet, hendrerit mattis massa. Nam erat orci, venenatis vel vulputate ut, hendrerit quis dui. Praesent lobortis sagittis nisi eget ornare. Ut ac sapien lorem. Sed quis tincidunt augue, non hendrerit justo. Nulla in tellus eget turpis suscipit tempor. ' }
}

function Note(props) {
  const [currentNotes, setCurrentNotes] = useState(notes)

  return (
    <div className='note'>
      <div className='item'>
        <Items items={currentNotes} currentItem={props.item} />
      </div>

      <div className='text'>
        <Text
          text={currentNotes[props.item].text}
          saveText={(newText) => setCurrentNotes({...currentNotes, [props.item]: {...currentNotes[props.item], text: newText} }) }
          title={currentNotes[props.item].title}
          
        />
        {console.log(currentNotes[props.item])}
      </div>
    </div>
  )
}

export default Note;