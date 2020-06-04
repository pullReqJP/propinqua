import React from 'react';
import Layout from '../components/layout';
import { motion } from 'framer-motion';

type Props = {};

type State = {};

export default class Sample extends React.Component<Props, State> {
  render() {
    return (
      <Layout>
        <div>
          <motion.div
            className="font-pq"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            pullReq
          </motion.div>
        </div>
        <div className="mt-16">
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            p
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            u
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            l
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            l
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            R
          </motion.div>
          <motion.div
            className="font-pq inline-block"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
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
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            q
          </motion.div>
        </div>
      </Layout>
    );
  }
}
