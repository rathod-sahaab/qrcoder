import React from "react"
import { Link } from "gatsby"
import QRCode from "qrcode.react"
import { TextField, IconButton, Color, Tooltip } from "@material-ui/core"
import { CenterFocusStrong } from "@material-ui/icons"
import { TwitterPicker } from "react-color"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"

import SEO from "../components/seo"
import "./index.css"

const INIT_TEXT: string = "Enter text for QR"
export default class IndexPage extends React.Component {
  state = {
    qrText: INIT_TEXT,
    qrFgColor: "#3d3d3d",
    qrBgColor: "#ffffff",
    qrLevel: "M",
  }
  constructor(props) {
    super(props)
    this.refreshQR = this.refreshQR.bind(this)
    this.onColorChange = this.onColorChange.bind(this)
    this.onQrLevelChange = this.onQrLevelChange.bind(this)
  }

  refreshQR(event) {
    this.setState({ qrText: event.target.value })
  }

  onColorChange(color, event) {
    this.setState({ qrFgColor: color.hex })
  }

  onQrLevelChange(event: object, value: any) {
    this.setState({
      qrLevel: value,
    })
  }

  render() {
    return (
      <div className="container">
        <SEO title="Generate" />
        <div className="partition">
          <h1>Generate QR codes</h1>
          <p>
            Generate QR Codes just type your string and download the generated
            image, <br />
            by right clicking on it and then 'Save Image As...'
            <br />
            <br />
          </p>
          <TextField
            prefix={CenterFocusStrong}
            label="Text for QR"
            variant="outlined"
            onChange={this.refreshQR}
            style={{
              width: "100%",
              paddingBottom: "1em",
            }}
          />
          <Tooltip placement="bottom" title="Error correction level">
            <ToggleButtonGroup
              value={this.state.qrLevel}
              exclusive
              onChange={this.onQrLevelChange}
            >
              <ToggleButton value="L"> L </ToggleButton>
              <ToggleButton value="M"> M </ToggleButton>
              <ToggleButton value="Q"> Q </ToggleButton>
              <ToggleButton value="H"> H </ToggleButton>
            </ToggleButtonGroup>
          </Tooltip>
        </div>
        <div
          className="partition"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="qrbox"
            style={{ borderColor: this.state.qrFgColor, margin: "1em 0" }}
          >
            <QRCode
              value={this.state.qrText}
              fgColor={this.state.qrFgColor}
              bgColor={this.state.qrBgColor}
              level={this.state.qrLevel}
              size={256}
            />
          </div>
          <TwitterPicker
            triangle="hide"
            color={this.state.qrFgColor}
            colors={[
              "#FF6900",
              "#FCB900",
              "#7BDCB5",
              "#00D084",
              "#8ED1FC",
              "#0693E3",
              "#ABB8C3",
              "#EB144C",
              "#3D3D3D",
              "#000000",
            ]}
            onChange={this.onColorChange}
          />
        </div>
      </div>
    )
  }
}
