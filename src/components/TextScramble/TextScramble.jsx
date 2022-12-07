import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function TextScramble(props) {
  const {
    set, chars, duration, waitTime, ...others
  } = props;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(set[index]);
  const range = function* (start, end) {
    for (let i = start; i < end; i += 1) {
      yield i;
    }
  };
  const char = () => {
    const i = Math.floor(Math.random() * set[index].length);
    return chars[i];
  };

  useEffect(() => {
    /*
    const interval = setInterval(() => {
      setIndex((v) => (v + 1) % set.length);

      [...range(0, set[index].length)].forEach((i) => {
        setTimeout(
          () => {
            setText((v) => {
              v[i] = char();
              return v;
            });
            console.log(text);
          },
          Math.random() * duration,
        );
      });
    }, (waitTime + duration) * 1000);
    return () => clearInterval(interval);
    */
  }, [waitTime, duration]);

  return <p {...others}>{text}</p>;
}

TextScramble.propTypes = {
  set: PropTypes.arrayOf(PropTypes.string).isRequired,
  chars: PropTypes.string,
  duration: PropTypes.number,
  waitTime: PropTypes.number,
};

TextScramble.defaultProps = {
  chars: '!<>-_\\/[]{}—=+*^?#________',
  duration: 1,
  waitTime: 1,
};

/*
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Neo,',
  'sooner or later',
  'you\'re going to realize',
  'just as I did',
  'that there\'s a difference',
  'between knowing the path',
  'and walking the path'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()
*/
