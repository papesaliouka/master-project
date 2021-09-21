import React from 'react';
import { Avatar } from 'react-native-elements';

const CustomAvatar= ()=>{
    return (
        <>
            <Avatar
                rounded
                size={200}
                activeOpacity={0.7}
                containerStyle={{ marginLeft: 75, marginTop: 50}}
                source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />

        </>
    );
}

export default CustomAvatar
