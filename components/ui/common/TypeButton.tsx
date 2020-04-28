import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';

interface TypeButtonProps {
  color: string;
  name: string;
  current: string;
  fnAction: Function;
  icon?: IconProp;
}

export const TypeButton: React.FC<TypeButtonProps> = ({ color, name, current, fnAction, icon }: TypeButtonProps) => {
  const selected = name === current;

  return (
    <div>
      <Button
        className={`px-4 py-2 mr-1 ${color} ${selected && ' border-purple-300 bg-purple-100 border-2'}`}
        type="ghost"
        onClick={(evt) => {
          evt.preventDefault();
          fnAction();
        }}
      >
        {icon ?
          <FontAwesomeIcon className={` inline `} icon={icon} width={20} />
          :
          <span className={` inline-block `}>{`${name}`}</span>
        }
      </Button>
    </div>
  );
}



