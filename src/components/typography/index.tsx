import React, {Component} from 'react';
import classNames from 'classnames';
import "./index.css"

interface Paragraph {
  copyable?: boolean | {
    text?: string,
    onCopy?: Function
  },
  deleted?: boolean;
  disabled?: boolean;
  editable?: boolean | {
    editing?: boolean,
    onStart?: Function,
    onChange?: (string: string) => void
  };
  ellipsis?: boolean | {
    rows?: number;
    expandable?: boolean;
  }
  mark?: boolean;
  underline?: boolean;
  strong?: boolean;
  type?: "secondary" | "warning" | "danger";
}
class TypographyParagraph extends Component<Paragraph,{}> {
  pRef = React.createRef<HTMLParagraphElement>();
  state= {
    copied: false
  }
  onCopyClick=()=>{
    let {copyable}=this.props
    let area = document.createElement("textarea");
    // area.style.display = "none";
    document.body.appendChild(area);
    if (typeof copyable === "boolean") {
      // 复制原来的值
      // console.log(value, typeof value)
      area.value = React.Children.toArray(this.props.children)[0] as string
      // console.log(area.value);
    } else {
      // @ts-ignore
      area.value = copyable.text || "";
    }
    area.select();
    document.execCommand("copy");
    if (typeof copyable === "object" && copyable.onCopy) {
      copyable.onCopy();
    }
    document.body.removeChild(area);
    this.setState({copied: true})
    setTimeout(() => {
      this.setState({copied: false})
    }, 3000);
  }
  render() {
    let {deleted, disabled, mark, underline, strong, type,ellipsis} = this.props;
    let className=classNames({
      "p-deleted": deleted,
      "p-disabled": disabled,
      "p-mark": mark,
      "p-underline": underline,
      "p-strong": strong,
      "p-ellipsis": ellipsis === true,
      "p-ellipsis-much": typeof ellipsis === "object"
    },type)
    let lineClamp: any = "none";
    if (typeof ellipsis === "object") {
      lineClamp = typeof ellipsis ===
        "object" && ellipsis.rows;
    }
    let copy= ()=>{
      let copyable: Paragraph["copyable"] = this.props.copyable;
      if (!copyable) {
        return null;
      } else {
        if (!this.state.copied) {
          return <i onClick={this.onCopyClick} className="far fa-copy copy-icon"></i>;
        } else {
          return <i className="fas fa-check copy-icon"></i>
        }
      }
    };
    return (
      <React.Fragment>
      <p ref={this.pRef} className={className} style={{lineClamp: lineClamp || "none"}}>
        {this.props.children}{copy()}
      </p>
      </React.Fragment>
    );
  }
}
export {TypographyParagraph}
interface TypoGraphy {
  Paragraph: any
}

let Typography: TypoGraphy = {
  Paragraph: TypographyParagraph
};
export default Typography;
