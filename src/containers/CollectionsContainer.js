import React from 'react';
import CollectionInput from '../components/CollectionInput';
import Collections from '../components/Collections';

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