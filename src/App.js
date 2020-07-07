import React from 'react'
import './App.css'
import anime from 'animejs/lib/anime.es.js'
class Slideshow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {
          type: 'image',
          path: 'https://picsum.photos/id/237/500/400',
          head: 'Head1',
          subHead: 'Sub Head',
          para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          duration: 3,
        },
        {
          type: 'image',
          path: 'https://picsum.photos/id/238/500/400',
          head: 'Head2',
          subHead: 'Sub Head',
          para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          duration: 3,
        },
        {
          type: 'video',
          path: 'https://media.w3.org/2010/05/bunny/movie.mp4',
          head: 'Head6',
          subHead: 'Sub Head',
          para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          duration: 10,
        },
        {
          type: 'card',
          path: 'https://picsum.photos/id/242/500/400',
          head: 'Head7',
          subHead: 'Sub Head',
          para: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          duration: 3,
        },
      ],
      position: 0,
    }
    this.st = null
  }

  componentDidMount() {
    this.looper()
  }

  looper() {
    this.st = setTimeout(() => {
      this.forward()
    }, this.state.slides[this.state.position].duration * 1000)

    console.log('asas', this.state.slides[this.state.position].duration * 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.st)
  }

  pauseAllAndPlayCurrentVideo() {
    let videos = document.querySelectorAll('video')
    console.log('all the videos', videos)
    for (let video of videos) {
      if (video.id === this.state.slides[this.state.position].head) video.play()
      else video.pause()
      video.currentTime = 0
    }
  }

  forward() {
    if (this.state.position === this.state.slides.length - 1) {
      this.setState({ position: 0 }, () => {
        this.simillarTasks()
        anime({
          targets: ['.slide'],
          translateX: (el, i, l) => {
            if (i === this.state.slides.length - 1) return ['0%', `100%`]
            if (i === 0) return ['-100%', `0%`]
            return null
          },
          opacity: (el, i, l) => {
            if (i === this.state.slides.length - 1) return [1, 0]
            if (i === 0) return [0, 1]
            return null
          },
          duration: 1000,
          easing: 'easeInOutQuad',
        })
      })
      return
    }
    this.setState({ position: this.state.position + 1 }, () => {
      this.simillarTasks()
      anime({
        targets: ['.slide'],
        translateX: (el, i, l) => {
          if (i === this.state.position - 1) return ['0%', `100%`]
          if (i === this.state.position) return ['-100%', `0%`]
          return null
        },
        opacity: (el, i, l) => {
          if (i === this.state.position - 1) return [1, 0]
          if (i === this.state.position) return [0, 1]
          return null
        },
        duration: 1000,
        easing: 'easeInOutQuad',
      })
    })
  }

  simillarTasks() {
    this.looper()
    this.pauseAllAndPlayCurrentVideo()
  }

  getOpacity(index) {
    if (this.state.position === index) {
      return 1
    }
    return 0
  }

  VideoUI(item, index) {
    if (item.type === 'video')
      return (
        <div className="content-wrap">
          <div className="content">
            <div className="media video-bg">
              <video className="" id={item.head} src={item.path} />
            </div>
            <div className="slide-text-area">
              <div className="slide-head">{item.head}</div>
              <div className="slide-subHead">{item.subHead}</div>
              <div className="slide-para">{item.para}</div>
            </div>
          </div>
        </div>
      )
  }

  CardUI(item, index) {
    if (item.type === 'card')
      return (
        <div className="content-wrap">
          <div className="content-card">
            <div className="text-area-card">
              <div className="head-card">{item.head}</div>
              <div className="subHead-card">{item.subHead}</div>
              <div className="para-card">{item.para}</div>
            </div>
          </div>
          <div
            className="content-bg"
            style={{ backgroundImage: `url(${item.path})` }}
          />
        </div>
      )
  }

  ImgUI(item, index) {
    if (item.type === 'image')
      return (
        <div className="content-wrap">
          <div className="content">
            <div className="media">
              <img className="" src={item.path} alt={item.head} />
            </div>
            <div className="slide-text-area">
              <div className="slide-head">{item.head}</div>
              <div className="slide-subHead">{item.subHead}</div>
              <div className="slide-para">{item.para}</div>
            </div>
          </div>
          <div
            className="content-bg"
            style={{ backgroundImage: `url(${item.path})` }}
          />
        </div>
      )
  }

  render() {
    return (
      <React.Fragment>
        <div className="slideshow-wrap">
          {this.state.slides.map((item, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ opacity: this.getOpacity(index) }}>
                {this.ImgUI(item, index)}

                {this.VideoUI(item, index)}

                {this.CardUI(item, index)}
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Slideshow
