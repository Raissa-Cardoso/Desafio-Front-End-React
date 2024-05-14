import {Container} from './styles';

export function Button({type,title, onClick}){  
    return(
        <Container onClick={onClick}>
        {type === 'disabled' ? (
          <div className='disabled'>
            <p>{title}</p>            
          </div>
        ) : type === 'delete' ? (
          <div className='delete' >
            <p>{title}</p>            
          </div>
        ) : (
          <div className='normal'>
            <p>{title}</p>
          </div>
        )}
      </Container>
    )
}