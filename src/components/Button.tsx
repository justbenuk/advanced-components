import { ComponentPropsWithoutRef, ReactNode } from "react"

type ButtonProps = {
  el: 'button',
  children: ReactNode
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
  el: 'link'
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps | AnchorProps) {

  if (props.el === 'link') {
    return <a {...props}></a>
  }

  return <button {...props}>{props.children}</button>
}
