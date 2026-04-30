import React, { memo, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const TYPES = [
  { id: 'grass',    label: 'Planta'    },
  { id: 'fire',     label: 'Fuego'     },
  { id: 'water',    label: 'Agua'      },
  { id: 'bug',      label: 'Bicho'     },
  { id: 'fairy',    label: 'Hada'      },
  { id: 'dragon',   label: 'Dragón'   },
  { id: 'shadow',   label: 'Sombra'    },
  { id: 'ground',   label: 'Tierra'    },
  { id: 'normal',   label: 'Normal'    },
  { id: 'psychic',  label: 'Psíquico'  },
  { id: 'steel',    label: 'Acero'     },
  { id: 'dark',     label: 'Siniestro' },
  { id: 'electric', label: 'Eléctrico' },
  { id: 'fighting', label: 'Lucha'     },
  { id: 'flying',   label: 'Volador'   },
  { id: 'ice',      label: 'Hielo'     },
  { id: 'poison',   label: 'Veneno'    },
  { id: 'rock',     label: 'Roca'      },
];

function FilterBar() {
  const { active, handleCheckbox } = useContext(PokemonContext);

  return (
    <aside className={`container-filters ${active ? 'active' : ''}`}>
      <div className='filter-by-type'>
        <span>Tipo</span>
        {TYPES.map(({ id, label }) => (
          <div key={id} className='group-type'>
            <input
              type='checkbox'
              onChange={handleCheckbox}
              name={id}
              id={id}
            />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default memo(FilterBar);
