import React from 'react';
import './App.css';
import Menu from './Menu'
import Gallery from './gallery/Gallery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import photo1 from './photo/IMG_1447.JPG'
import photo2 from './photo/IMG_1546.JPG'
import photo3 from './photo/IMG_2488.JPG'
import photo4 from './photo/IMG_2648.JPG'
import photoMoscow1 from './photo/photoMoscow/IMG_5812.JPG'
import photoMoscow2 from './photo/photoMoscow/IMG_5870.JPG'
import photoMoscow3 from './photo/photoMoscow/IMG_5965.JPG'
import photoMoscow4 from './photo/photoMoscow/IMG_5972.JPG'
import photoSamara1 from './photo/photoSamara/IMG_0537.JPG'
import photoSamara2 from './photo/photoSamara/IMG_0619.JPG'
import photoSamara3 from './photo/photoSamara/IMG_0631.JPG'
import photoSamara4 from './photo/photoSamara/IMG_0632.JPG'
import photoParis1 from './photo/photoParis/IMG_4010.JPG'
import photoParis2 from './photo/photoParis/IMG_4052.JPG'
import photoParis3 from './photo/photoParis/IMG_4176.JPG'
import photoParis4 from './photo/photoParis/IMG_4605.JPG'
import photoRome1 from './photo/photoRome/IMG_3188.JPG'
import photoRome2 from './photo/photoRome/IMG_3215.JPG'
import photoRome3 from './photo/photoRome/IMG_3251.JPG'
import photoRome4 from './photo/photoRome/IMG_3739.JPG'

import Note from './note/Note'
import Post from './PostComments/Post'

const cities = {
  'Moscow': [photoMoscow1, photoMoscow2, photoMoscow3, photoMoscow4],
  'Samara': [photoSamara1, photoSamara2, photoSamara3, photoSamara4],
  'Paris': [photoParis1, photoParis2, photoParis3, photoParis4],
  'Rome': [photoRome1, photoRome2, photoRome3, photoRome4]
}

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className='App-body'>
          <Switch>
            <Route path='/gallery/:country/:city'
              render={(props) =>
                <div>
                  <Gallery
                    photos={cities[props.match.params.city]}
                  />
                </div>
              }
            />

            <Route path='/note/:item'
              render={(props) =>
                <Note
                  item={props.match.params.item}
                />
              }
            />

            <Route path='/posts'
              render={() =>
                <Post />
              }
            />

            <Route path='/'>
              <Gallery photos={[photo1, photo2, photo3, photo4]} />
              <header className="App-header">

                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
        </a>
              </header>
              <div className='background'>
                <p>TEST</p>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
