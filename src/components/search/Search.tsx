import React, { useState } from 'react';
import Headline from '../Headline/Headline';
import Select, { SelectItems } from '../select/Select';

type Props = {
  setUser?: (u: string) => void;
};

const Search: React.FC<Props> = ({ setUser }) => {
  const [items, setItems] = useState<SelectItems>([]);

  async function lookUpUsers(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value.length < 4) return;

    const rawData = await fetch(`https://api.github.com/search/users?q=${value}`);
    const users = await rawData
      .json()
      .then(data => data.items.map((item: any) => item.login));

    setItems(users);
  }
  return (
    <>
      <Headline maxWidth="430px">
        Search for a user or organization to find a repository.
      </Headline>
      <Select items={items} lookUpUsers={lookUpUsers} setUser={setUser} />
    </>
  );
};

export default Search;
