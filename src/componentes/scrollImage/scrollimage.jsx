import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const ScrollImage = ({ src, id }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.img
      ref={ref}
      src={src}
      id={id} // <-- aqui!
      style={springProps}
      alt="Scroll effect"
    />
  );
};

export default ScrollImage;