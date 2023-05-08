import Link from "next/link"

import { FooterStyles } from "./FooterStyles"

const Footer = () => {
  return (
    <FooterStyles>
      <section className="footer">
        <div className="content">
          <Link href="/">
            LOGO
          </Link>
            <ul>
              <li>
                <Link href="/">Footer Link</Link>
              </li>
            </ul>
        </div>
      </section>
    </FooterStyles>
  )
}
export default Footer
