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
        style={{width: 150}}
      />
      <Select
        defaultValue="value1"
        options={[
          {label: "option 1", value: "value1"},
          {label: "option 2", value: "value2"}
        ]}
        onChange={(value) => {
          console.log(value)
        }}
        style={{width: 150}}
      />
    </div>
  )
}