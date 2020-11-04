import React from "react"
import { Link } from "gatsby"
import QRCode from "qrcode.react"
import { TextField, IconButton } from "@material-ui/core"
import { CenterFocusStrong } from "@material-ui/icons"

import SEO from "../components/seo"
import "./index.css"

const INIT_TEXT: string = "Enter text for QR"
export default class IndexPage extends React.Component {
  state = {
    qrText: INIT_TEXT,
  }
  constructor(props) {
    super(props)
    this.refreshQR = this.refreshQR.bind(this)
  }

  refreshQR(event) {
    this.setState({ qrText: event.target.value })
  }

  render() {
    return (
      <body>
        <SEO title="Generate" />
        <div className="container">
          <div className="partition">
            <h1>Generate QR codes</h1>
            <p>
              Generate QR Codes just type your string and download the generated
              image, <br />
              by right clickicg on it and then 'Save Image As...'
              <br />
              <br />
            </p>
            <TextField
              prefix={CenterFocusStrong}
              label="Text for QR"
              variant="outlined"
              onChange={this.refreshQR}
            />
          </div>
          <div className="partition">
            <div className="qrbox">
              <QRCode size={256} value={this.state.qrText} />
            </div>
          </div>
        </div>
      </body>
    )
  }
}
