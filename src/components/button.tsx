// props is an object
// state

function Button(props){

    return(
        <button onClick={props.onClick} className="px-3 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-red-500 hover:text-blue-300">{props.title}</button>
    )
}

export default Button

