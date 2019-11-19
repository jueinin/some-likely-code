import React from "react";
import classNames from "classnames";
import './Button.scss';
export type ButtonType = "default" | "primary" | "ghost" | "dashed" | "danger" | "link";
export type ButtonShape = "circle" | "circle-outline" | "round";
export type ButtonSize = "large" | "default" | "small";
export type ButtonHTMLType = "submit" | "button" | "reset";

export interface BaseButtonProps {
    type?: ButtonType;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    loading?: boolean;
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
    block?: boolean;
    children?: React.ReactNode;
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | "onClick">;

export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>
} &BaseButtonProps &  Omit<React.AnchorHTMLAttributes<any>, 'type' | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

interface ButtonState {
    loading?: boolean | { delay?: number}
    hasTwoCnChar: boolean;
}

const twoCnChar = /^[\u4e00-\u9fa5]{2}$/;
class Button extends React.Component<ButtonProps,ButtonState> {
    static defaultProps= {
        loading: false,
        ghost: false,
        block: false,
        size: "default",
        htmlType: "button"
    }

    constructor(props: ButtonProps) {
        super(props);
        this.state= {
            loading: props.loading,
            hasTwoCnChar: false
        }
    }

    isNeededInsert = () => {
        const {icon, children, type} = this.props;
        return React.Children.count(children) === 1 && !icon && type !=="link";
    };
    onClick:React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
        const {onClick} = this.props;
        if (this.state.loading) {
            return;
        }
        if (onClick) {
            ((onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>))(e)
        }
    };
    renderButton = () => {
        const {prefixCls = 'chen-btn',loading, type, size = 'default', shape, className, children, icon, ghost, block, ...rest} = this.props;
        let sizeCls = "";
        let obj = {
            large: "lg",
            small: "sm",
            default: ""
        };
        sizeCls = sizeCls + obj[size];
        const iconType = loading ? 'loading' : icon;
        const classes = classNames(prefixCls, className, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${sizeCls}`]: size,
            [`${prefixCls}-icon-only`]: !children && children !== 0 && iconType,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-background-ghost`]: ghost,
            [`${prefixCls}-block`]: block
        });
        const buttonNode = <button className={classes} onClick={this.onClick}>{children}</button>;
        return buttonNode;
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return this.renderButton();
    }
}

export default Button;















