import React from 'react';
import { Avatar } from 'react-native-elements';

const CustomAvatar= ()=>{
    return (
        <>
            <Avatar
                rounded
                size={200}
                containerStyle={{ marginLeft: 75, marginTop: 50}}
                source={{
                    uri:
                    'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
                }}
            />

        </>
    );
}

export default CustomAvatar
