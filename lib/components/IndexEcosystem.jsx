import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { GridItem } from 'lib/components/GridItem'

import DharmaSvg from 'assets/images/dharma-logo.png'
import ZerionSvg from 'assets/images/zerion.svg'
import ZapperFiSvg from 'assets/images/zapperfi.svg'

export const IndexEcosystem = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {}
  }

  return (
    <>
      <div className='py-24'>
        <div className='pool-container mx-auto'>
          <h5 className='uppercase text-highlight-1 pb-4'>Ecosystem:</h5>

          <div className='flex flex-col'>
            <p className='text-sm xs:text-xl sm:text-lg lg:text-xl sm:max-w-2xl'>
              Decentralized Finance (DeFi) platforms, neobanks and savings customers all working
              together to win.
            </p>

            <motion.div
              className={
                'flex flex-col sm:flex-row sm:flex-wrap mt-12 text-base lg:text-lg -mx-12 lg:-mx-12'
              }
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={containerVariants}
            >
              <GridItem
                altBg
                title={'Zapper'}
                description={`Join PoolTogether using this portal to DeFi.`}
                img={ZapperFiSvg}
                url='https://www.zapper.fi/#/dashboard'
              />

              <GridItem
                altBg
                title={'Dharma'}
                description={`Deposit into PoolTogether from your US bank.`}
                img={DharmaSvg}
                url='https://www.dharma.io/'
              />

              <GridItem
                altBg
                title={'Zerion'}
                description={`Access DeFi & view your PoolTogether deposits.`}
                img={ZerionSvg}
                url='https://zerion.io/'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}