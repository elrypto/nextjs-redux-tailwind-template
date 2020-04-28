import { useDispatch } from 'react-redux';
import LeakedPage from '../components/ui/common/LeakedPage';
import { Button } from '../components/ui/common/Button';
import { dp } from '../common/Actions';
import { ActionType } from '../common/Interfaces';

const Index = () => {
  const dispatch = useDispatch();

  return (
    <LeakedPage
      leakedTitle="Index"
    >
      <div className="p-8">
        <div>
          Somethign should go in here
      </div>
        <div className="mt-2">
          <Button type="primary"
            onClick={(evt) => {
              evt.preventDefault();
              dp(dispatch, ActionType.SET_ERROR, new Error('something has gone pretty wrong'))
            }}
          >
            Make an error
        </Button>
        </div>
      </div>
    </LeakedPage>
  )
}

export default Index;