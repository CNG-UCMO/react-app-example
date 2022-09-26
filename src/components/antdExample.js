import { Input, Select } from "antd";
import { useState } from "react";

export function AntdExample() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => {
          console.log(e.target.value)
          setInputValue(e.target.value)
        }}
      />
      <Select
        options={[
          {label: "option 1", value: "value1"}
        ]}
        onChange={(value) => {
          console.log(value)
        }}
      />
    </div>
  )
}