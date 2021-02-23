import React from 'react';

function WithoutJsx(){
    return(
        
        // <h1>Hello Mohammad Ali sakib. </h1>
        //creatElement(parentElement,attribute,inside content)
        React.createElement('div',{id:'dummyId',className:'parentClass'},React.createElement('h1',null,'Hello My name is mohammad ali sakib.'))
    )
}
export default WithoutJsx;
