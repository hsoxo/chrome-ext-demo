import React, { useState } from 'react';
import PostCard from './PostCard';
import { animated, useTransition } from 'react-spring';

const Post = () => {
  const [show, setShow] = useState(true);

  const handleTimeout = () => setShow(false);

  const transition = useTransition(show, {
    from: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    config: { mass: 1, tension: 200, friction: 18 },
  });

  return transition(
    (styles, item) =>
      item && (
        <animated.div className="fixed right-0 z-[20000]" style={styles}>
          <PostCard onTimeout={handleTimeout} />
        </animated.div>
      )
  );
};

export default Post;
