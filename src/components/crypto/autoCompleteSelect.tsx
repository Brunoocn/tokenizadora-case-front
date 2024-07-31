"use client";

import Select from "react-select";

interface AutoCompleteSelectProps {
  options?: Array<{ id: string; name: string }>;
  onChange: (value: Array<string>) => void;
  selectMessage?: string;
}
export function AutoCompleteSelect({
  options,
  onChange,

  selectMessage = "Selecione um item disponivel",
}: AutoCompleteSelectProps) {
  const optionsFormatted = options?.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  return (
    <Select
      classNames={{
        control: () =>
          "min-h-[46px] rounded-md border border-input bg-background text-sm ring-offset-background",
      }}
      isMulti
      placeholder={selectMessage}
      onChange={(val) => onChange(val?.map((val) => val.value))}
      options={optionsFormatted}
    />
  );
}
