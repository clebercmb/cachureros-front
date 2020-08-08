import {useContext} from react 
import {Context} from '../../store/appContext'


const [store, actions] = useContext(Context)


function handleChange(e, field, storeItem) {
    console.log("***registerUser.handleChange=",field)
    console.log('AddProductView.handleChange.e=',e)
    const {value} = e.target;
    console.log("***registerUser.handleChange.name=", e.name)
    console.log("***AddProductView.handleChange.value=", value)
    console.log("***AddProductView.handleChange.check=", e.target.checked)
    console.log("***AddProductView.handleChange.type=", e.target.type)

    console.log(e.target.id,":",value);
    let product = store[storeItem]
    product[field] = value
    if(e.target.type === 'checkbox')
        product[field] = e.target.checked

    actions.setProduct(product); 

}