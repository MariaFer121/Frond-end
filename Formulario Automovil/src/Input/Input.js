
function Input(props){

    return(
        <div>
            <p>{props.title}</p>
            <input type={props.type} />
        </div>
    )
}
export default Input