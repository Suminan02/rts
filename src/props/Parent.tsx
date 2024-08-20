import {ChildAsFC} from './Child';
const Parent =()=>{
  return (
     <ChildAsFC color="red" onClick={()=>console.log('Click')}>
  </ChildAsFC>
  );
};

export default Parent;