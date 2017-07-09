import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import connect from '../utils/connect';
import routes from './routes'

const HandleAuth = connect((state) => ({currentUser: state.users.currentUser}))(({currentUser, renderComponent : RenderComponent, isPublic, ...otherProps}) => {
    if (!currentUser && !isPublic) {
        return <Redirect to='/' />
    } else {
        return <RenderComponent {...otherProps}/>
    }
})

function transformObjectToRoute(obj) {
    return React.isValidElement(obj) ? obj : <Route key={obj.path} {...obj} render={(props) => {
        return <HandleAuth {...obj} {...props} />    
    }} />
}

export default routes.map(transformObjectToRoute)
