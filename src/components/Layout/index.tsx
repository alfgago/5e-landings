import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"

import Footer from "../Footer"
import Header from "../Header"

import { LayoutStyles } from "./LayoutStyles"

const defaultVariants = {
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const onExitCompleteHandler = () => {
  window.scrollTo(0, 0)
}
const Layout = ({ children }: { children: JSX.Element }) => {
  const { asPath } = useRouter()

  return (
    <LayoutStyles className="main">
      <Header />
      <div className="page-content">
      <AnimatePresence mode="wait" onExitComplete={onExitCompleteHandler}>
        <motion.div
          key={asPath}
          variants={defaultVariants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
        </AnimatePresence>
        </div>
      <Footer />
    </LayoutStyles>
  )
}
export default Layout
