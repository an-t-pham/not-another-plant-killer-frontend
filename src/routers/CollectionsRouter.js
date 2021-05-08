import React from 'react';
import CollectionInput from '../collection/CollectionInput';
import Collections from '../collection/Collections';

export default class CollectionsContainer extends React.Component {
    render() {
        return (
           <div>
               <CollectionInput />
               <Collections />
           </div>
        )
    }
}