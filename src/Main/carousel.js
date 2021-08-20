import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import Alisster from './images/alisster.png'
import AliFight from './images/bgimg.jpg'
import AliWin from './images/hero.jpg'
import BlackGuy from './images/imagery.jpg'
import LoganFight from './images/LoganFight.jpeg'
import Pacquiao from './images/Pacquiao.jpeg'
import ConorVsKhabib from './images/ConorVsKhabib.jpeg'

var slides = [
  { id: 0, url: AliFight },
  { id: 1, url: BlackGuy },
  { id: 2, url: AliWin },
  { id: 3, url: Alisster },
  { id: 4, url: LoganFight },
  { id: 5, url: Pacquiao },
  { id: 6, url: ConorVsKhabib },
]

slides.sort(() => Math.random() - 0.5)

const Slidehow = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  console.log(slides)
  useEffect(() => void setInterval(() => set(state => (state + 1) % 7), 4000), [])
  return transitions?.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg bkg"
      style={{ ...props, backgroundImage: "url(" + item.url + ")" }}
    />
  ))
}

export default Slidehow
