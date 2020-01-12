import React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default function Tasks() {
  return <SwaggerUI url="https://raw.githubusercontent.com/dzeyelid/arm-templates-sample-for-serverless/v2/api-specs/openapi.yaml" />
}
