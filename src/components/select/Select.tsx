import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import { Label, Wrapper, Input, Item, Ul, StyledSearch } from './styles';

export type SelectItems = string[];

type Props = {
  items: SelectItems;
  lookUpUsers: (e: any) => void;
  setUser?: (u: string) => void;
};

const Select: React.FC<Props> = ({ items, lookUpUsers, setUser }) => {
  const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: value => {
      if (!value.selectedItem) return;
      setUser?.(value.selectedItem);
    },
    onInputValueChange: ({ inputValue }) => {
      setInputItems(items.filter(item => item.toLowerCase()));
    },
  });

  return (
    <StyledSearch>
      <Wrapper className={inputItems ? 'active' : ''}>
        <Label {...getLabelProps()}>Type something</Label>
        <div {...getComboboxProps()}>
          <Input {...getInputProps()} onInput={lookUpUsers} />
        </div>
      </Wrapper>
      <Ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <Item
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              onClick={() => setUser?.(item)}
            >
              <span>{item}</span>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.35413 1.68681C7.54939 1.49154 7.54939 1.17496 7.35413 0.979699C7.15887 0.784436 6.84228 0.784436 6.64702 0.979699L0.333909 7.29281C-0.0566163 7.68334 -0.0566147 8.3165 0.333909 8.70703L6.64702 15.0201C6.84228 15.2154 7.15887 15.2154 7.35413 15.0201C7.54939 14.8249 7.54939 14.5083 7.35413 14.313L1.5411 8.5H14.334C14.6101 8.5 14.834 8.27614 14.834 8C14.834 7.72386 14.6101 7.5 14.334 7.5H1.54093L7.35413 1.68681Z" />
              </svg>
            </Item>
          ))}
      </Ul>
    </StyledSearch>
  );
};

export default Select;
