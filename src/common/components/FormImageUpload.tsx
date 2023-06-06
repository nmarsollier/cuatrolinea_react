import React from "react"
import { ErrorHandler } from "../utils/ErrorHandler"
import ErrorLabel from "./ErrorLabel"
import ImageUpload from "./ImageUpload"

export default function FromImageUpload(props: {
  picture: string
  name: string
  errorHandler: ErrorHandler
  onImageChanged: (image: string) => any
}) {
  return (
    <div className="form-group">
      <label>Profile Picture</label>
      <ImageUpload
        image={getPictureData(props.picture)}
        onChange={props.onImageChanged}
      />
      <ErrorLabel message={props.errorHandler.getErrorText("image")} />
    </div>
  )
}

function getPictureData(data: string) {
  if (data && data.length > 0) {
    return data
  } else {
    return "/assets/profile.png"
  }
}