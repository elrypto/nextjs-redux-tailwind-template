import React, { useState } from 'react'
import Select from 'react-select';
import { Button } from './Button';


export interface Props {
  rawValues: Array<any>;
  idField?: string;
  preLabelField?: string;
  labelField?: string;
  mode?: Mode;
  fnSave: Function;
}

export enum Mode {
  simple = 'simple',
  extract = 'extract'
}

export const EasySelect: React.FC<Props> = ({ rawValues, idField, labelField, preLabelField, fnSave, mode }) => {
  const [selected, setSelected] = useState<any>(null);

  const currentMode = mode || Mode.simple;

  let values;
  if (currentMode === Mode.simple) { values = rawValues.map(v => ({ value: v, label: v })) };

  if (currentMode === Mode.extract) {
    if (!idField || !labelField) throw new Error('You must provide an idField and a labelField when mode is set to extract');

    values = rawValues.map(v => {
      const labelVal = preLabelField ? `${v[preLabelField]} - ${v[labelField]}` : v[labelField];

      return { value: v[idField], label: labelVal }
    })
  }


  // console.log('raw values:', rawValues);
  // console.log('transformed values:', values);

  const styles = {
    menu: base => ({
      ...base,
      fontSize: '0.80rem'
    })
  };

  return (
    <div className="flex">
      <Select className="w-full" options={values} styles={styles} onChange={sel => { setSelected(sel) }} />
      <Button
        className="ml-2"
        type="dark"
        size="sm"
        onClick={(evt) => {
          evt.preventDefault();
          fnSave(selected.value);
        }}
      >
        Save
      </Button>
    </div>
  );
}