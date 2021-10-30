import React, { PureComponent } from 'react'

export const ProtocolDisclaimerPage = class _ProtocolDisclaimerPage extends PureComponent {
  render() {
    return (
      <>
        <div className='pool-container mx-auto flex flex-col text-base h-full z-10 relative mb-20'>
          <h2 className='mb-6'>PoolTogether Protocol Disclaimer</h2>

          <p className='mb-10'>
            PoolTogether is a decentralized peer-to-peer protocol that people can use to facilitate
            the aggregation and disbursement of interest generated on deposited funds. There are
            four versions of the PoolTogether protocol (v1, v2, v3, and V4), each of which is made
            up of free, public, open-source or source-available software including a set of smart
            contracts that are deployed on the Ethereum Blockchain and other blockchains.
          </p>

          <p className='mb-10'>
            Your use of the PoolTogether protocol involves various risks, including, but not limited
            to, losses while digital assets are being supplied to the PoolTogether protocol. Before
            using the PoolTogether protocol, you should review the relevant documentation to make
            sure you understand how the PoolTogether protocol works. Additionally, just as you can
            access email email protocols such as SMTP through multiple email clients, you can access
            the PoolTogether protocol through dozens of web or mobile interfaces. You are
            responsible for doing your own diligence on those interfaces to understand the fees and
            risks they present.
          </p>

          <p className='mb-10'>
            AS DESCRIBED IN THE POOLTOGETHER PROTOCOL LICENSES, THE POOLTOGETHER PROTOCOL IS
            PROVIDED ”AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. No developer or
            entity involved in creating the PoolTogether protocol will be liable for any claims or
            damages whatsoever associated with your use, inability to use, or your interaction with
            other users of, the PoolTogether protocol, including any direct, indirect, incidental,
            special, exemplary, punitive or consequential damages, or loss of profits,
            cryptocurrencies, tokens, or anything else of value.
          </p>

          <p className='mb-10'>
            Notice that the protocol is controlled by distributed governance via the POOL token. As
            such, information around prize distribution, frequencies, and any other expected returns
            from using the protocol are subject to control of the POOL token holders and may be
            changed at any time.
          </p>
        </div>
      </>
    )
  }
}
