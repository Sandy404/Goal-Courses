import React, { useState } from 'react';
import {Button} from 'react-native';

const Header = props =>{
    return(
            <Button title='Add New Goal' color="grey" onPress={props.onClick}/>
    );
};

export default Header;