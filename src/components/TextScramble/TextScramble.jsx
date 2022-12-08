import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function TextScramble(props) {
  const {
    set, nextIndex, chars, duration, waitTime, ...others
  } = props;
  const [index, setIndex] = useState(0);
  const [output, setOutput] = useState([...set[0]]);
  const char = () => chars[Math.floor(Math.random() * chars.length)];
  function* g(...lengths) {
    for (let i = 0; i < Math.max(...lengths); i += 1) {
      yield i;
    }
  }

  useEffect(() => {
    const t = {
      index: setTimeout(
        () => {
          const i = nextIndex(index, set.length);
          setIndex(i);
        },
        (waitTime + duration) * 1000,
      ),
      chars: [],
    };

    const nextText = set[nextIndex(index, set.length)];
    const indexs = [...g(set[index].length, nextText.length)];

    indexs.forEach((i) => {
      const beginDelay = (Math.random() * duration * 1000) / 2;
      const endDelay = beginDelay + (Math.random() * (duration * 1000 - beginDelay));
      t.chars[i] = {
        begin: setTimeout(() => {
          setOutput((v) => {
            const o = [...v];
            o[i] = <span>{char()}</span>;
            return o;
          });
        }, beginDelay),
        end: setTimeout(() => {
          setOutput((v) => {
            const o = [...v];
            o[i] = nextText[i] || '';
            return o;
          });
        }, endDelay),
      };
    });

    return () => {
      clearTimeout(t.index);
      t.chars.forEach(({ begin, end }) => {
        clearTimeout(begin);
        clearTimeout(end);
      });
    };
  }, [index]);

  return (
    <p {...others}>
      {output}
    </p>
  );
}

TextScramble.propTypes = {
  set: PropTypes.arrayOf(PropTypes.string).isRequired,
  chars: PropTypes.string,
  duration: PropTypes.number,
  waitTime: PropTypes.number,
  nextIndex: PropTypes.func,
};

TextScramble.defaultProps = {
  chars: '!<>-_\\/[]{}—=+*^?#@!·()$~_',
  nextIndex: (i, size) => (i + 1) % size,
  duration: 1,
  waitTime: 1,
};
