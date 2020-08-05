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

    useEffect(() => {
        setState({...state, image: props.src});
        console.log('DraggableUploader.useEffect.props.src=', props.src)            
    }, [props.src]);


    function handleFile (e) {
        console.log('DraggableUploader.handleFile')
        const {name, files} = e.target;
        console.log('DraggableUploader.handleFile.name=', name)
        console.log('DraggableUploader.handleFile.files=', files) 
        console.log('DraggableUploader.handleFile.props.index=', props.index)
        let image = files[0]


        props.handleFile(files[0], props.index)

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                //this.setState({profileImg: reader.result})
                setState({...state, image: reader.result});
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    console.log('DraggableUploader.props.src=', props.src)
    console.log('DraggableUploader.state', state)
    return (
        <div className='container-draggable-uploader' onClick={() => state.fileInput.click()}>
            <img className={state.image === '' ? 'container-draggable-uploader-img-default' : 'container-draggable-uploader-img'} src={state.image === '' ? state.imageDefault: state.image} />

            <input type="file" id="file-browser-input" name="file-browser-input" ref={input => state.fileInput = input} onChange={ (e) => handleFile(e)} />

        </div>
    )
}

export default DraggableUploader