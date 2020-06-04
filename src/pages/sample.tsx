import React from 'react';
import Layout from '../components/layout';
import { motion } from 'framer-motion';

type Props = {};

type State = {};

export default class Sample extends React.Component<Props, State> {
  render() {
    return (
      <Layout>
        <div className="inline-block mt-48 text-6xl font-pq">
          <motion.div
            // className="font-pq"
            animate={{
              // scale: [1, 2, 2, 1, 1],
              rotate: [0, 180],
              originX: 2.7,
              originY: 0.52,
            }}
            transition={{
              duration: 4,
              // ease: 'easeInOut',
              times: [0, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            p
          </motion.div>
        </div>
        <div className="inline-block text-6xl font-pq">ullRe</div>
        <div className="inline-block mt-48 text-6xl font-pq">
          <motion.div
            // className="font-pq"
            animate={{
              // scale: [1, 2, 2, 1, 1],
              rotate: [0, 180],
              originX: -1.7,
              originY: 0.53,
            }}
            transition={{
              duration: 4,
              // ease: 'easeInOut',
              times: [0, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            q
          </motion.div>
        </div>
        {/* <div className="mt-16">
          <motion.div
            className="font-pq"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              // originX: 2,
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            pullReq
          </motion.div>
        </div> */}
        {/* <div className="mt-16">
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            p
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 0.5, 0.5, 1, 1],
              rotate: [0, 0, 360, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            u
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 0.5, 0.5, 1, 1],
              rotate: [0, 0, 360, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            l
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 0.5, 0.5, 1, 1],
              rotate: [0, 0, 360, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            l
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 0.5, 0.5, 1, 1],
              rotate: [0, 0, 360, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            R
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 0.5, 0.5, 1, 1],
              rotate: [0, 0, 360, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            e
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              // loop: Infinity,
              repeatDelay: 1,
            }}
          >
            q
          </motion.div>
        </div> */}
      </Layout>
    );
  }
}
