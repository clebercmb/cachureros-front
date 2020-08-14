import React, {useState, useEffect} from 'react'
import './DraggableUploader.css'

const DraggableUploader = (props) => {

    const [state, setState] = useState({
        file: {
            name: '',
            size: 0
        },
        fileInput:undefined,
        imageDefault:'/images/camera.png',
        image: ''

    })



    function handleFile (e) {
        console.log('DraggableUploader.handleFile')
        const {name, files} = e.target;
        console.log('DraggableUploader.handleFile.name=', name)
        console.log('DraggableUploader.handleFile.files=', files) 
        console.log('DraggableUploader.handleFile.props.index=', props.index)
        let image = files[0]

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                //this.setState({profileImg: reader.result})
                setState({...state, image: reader.result});
                props.handleFile(files[0], reader.result, props.index)

            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    console.log('DraggableUploader.props.src=%s, index=%s', props.src, props.index)
    console.log('DraggableUploader.state', state)
    console.log(">>>>DraggableUploader.process.env=", process.env)
    console.log(">>>>DraggableUploader.process.env.REACT_APP_BACK_IMAGES=", process.env.REACT_APP_BACK_IMAGES)

    console.log(">>>>DraggableUploader.props=", props)
    console.log(">>>>DraggableUploader.props.src=", props.src)


    let url = process.env.REACT_APP_BACK_IMAGES
    
    return (
        <div className='container-draggable-uploader' onClick={() => state.fileInput.click()}>
{/*             <img className={props.image === '' ? 'container-draggable-uploader-img-default' : 'container-draggable-uploader-img'} src={state.image} />
 */}
            <img className={props.small ? 'container-draggable-uploader-img-default' : 'container-draggable-uploader-img'} src={props.src} />



            <input type="file" id="file-browser-input" name="file-browser-input" ref={input => state.fileInput = input} onChange={ (e) => handleFile(e)} />

        </div>
    )
}

export default DraggableUploader