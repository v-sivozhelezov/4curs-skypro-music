import { useState } from 'react';
import CenterBlockFilter from '../../components/Main/CenterBlockFilter';
import SectionMusicList from '../../components/Main/SectionMusicList';

function AllTracks() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handlerSelectCategory = (string) =>
    activeFilter === string ? setActiveFilter(null) : setActiveFilter(string);

  return (
    <>
      <CenterBlockFilter
        onClick={handlerSelectCategory}
        activeFilter={activeFilter}
      />
      <SectionMusicList />
    </>
  );
}

export default AllTracks;
