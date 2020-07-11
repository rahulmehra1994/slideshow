import React from 'react'
import Slideshow from './Slideshow'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Slideshow
          slides={[
            {
              id: 'unique4',
              type: 'image',
              path: 'https://picsum.photos/id/237/500/400',
              head: 'Head1',
              subHead: 'Sub Head',
              para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              duration: 3,
            },
            {
              id: 'unique5',
              type: 'image',
              path: 'https://picsum.photos/id/238/500/400',
              head: 'Head2',
              subHead: 'Sub Head',
              para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              duration: 3,
            },
            {
              id: 'unique6',
              type: 'video',
              path: 'https://media.w3.org/2010/05/bunny/movie.mp4',
              head: 'Head6',
              subHead: 'Sub Head',
              para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              duration: 10,
            },
            {
              id: 'unique8',
              type: 'card',
              path: 'https://picsum.photos/id/242/500/400',
              head: 'Head8',
              subHead: 'Sub Head',
              para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              duration: 6,
            },
            {
              id: 'unique7',
              type: 'video',
              path: 'https://media.w3.org/2010/05/bunny/movie.mp4',
              head: 'Head7',
              subHead: 'Sub Head',
              para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              duration: 10,
            },
          ]}
        />
      </div>
    )
  }
}

export default App
