import React from 'react'
import './App.css'
import anime from 'animejs/lib/anime.es.js'
class Slideshow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: this.props.slides,
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
  }

  componentWillUnmount() {
    clearTimeout(this.st)
  }

  pauseAllAndPlayCurrentVideo() {
    let videos = document.querySelectorAll('video')
    for (let video of videos) {
      if (video.id === this.state.slides[this.state.position].id) video.play()
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
              <video className="" id={item.id} src={item.path} />
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
