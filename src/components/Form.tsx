import { type FormEvent, type ComponentPropsWithoutRef, useRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

export default function Form({onSave, children, ...otherProps}: FormProps) {
  const form = useRef<HTMLFormElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    const formdata = new FormData(e.currentTarget)

    const data = Object.fromEntries(formdata)
    onSave(data)

    form.current?.reset()
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>{children}</form>
  )
}
