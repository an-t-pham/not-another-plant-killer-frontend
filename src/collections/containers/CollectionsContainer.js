import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { fetchCollections } from '../../actions/fetchCollections';
import Collections from '../Collections';
import { addCollection } from '../../actions/addCollection';

import CollectionInput from '../CollectionInput';

import FabButton from '../../components/FabButton';
import Modal from '@material-ui/core/Modal';



// class CollectionsContainer extends React.Component {
const CollectionsContainer = (props) => {
  // state = {
  //   showCForm: false
  // }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
//   handleOpen = () => {
//     this.setState({
//       showCForm: true
//     })
//  }

//    handleClose = () => {
//       this.setState({
//         showCForm: false
//       })
//    }


  useEffect(() => {
    props.user && (dispatch(fetchCollections(props.user.id)))
  }, [props.user, props.collections])

  // componentDidMount() {
  //    this.props.user && (this.props.fetchCollections(this.props.user.id))
  // }

  // componentDidUpdate(prevProps) {
  //   const prevCollections = prevProps.collections.map(col => col.attributes.name)
  //   const currentCollections = this.props.collections.map(col => col.attributes.name)
  //   const hasChanged = prevCollections.every(col => currentCollections.includes(col))

  //   if (prevProps.user === null || !hasChanged) {
  //     this.props.fetchCollections(this.props.user.id)
  //   }
  // }
  const handleSubmit = (collectionData) => {
    dispatch(addCollection(collectionData, props.user.id));
    handleClose();
 }
  //  handleSubmit = (collectionData) => {
  //     this.props.addCollection(collectionData, this.props.user.id);
  //     this.handleClose();
  //  }
  // render() {
    return (
       <div>
            <Collections collections={this.props.collections} /> 

            <div style={{position: 'fixed', top: '50px', right: '20px'}}>
              <FabButton title="Create New Collection" button="add" handleAction={handleOpen} />
            </div>
            
                <Modal
                  open={open}
                  onClose={handleClose}
                >
                    <CollectionInput handleSubmit={handleSubmit} />
                </Modal>
                 
       </div>
    )
  // }

}

// const mapStateToProps = state => {
//     return {
//         collections: state.collections,
//         user: state.user
//     }
// }

// export default connect(mapStateToProps, { addCollection, fetchCollections })(CollectionsContainer)
export default CollectionsContainer